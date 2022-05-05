import { redisOptions } from './services/redis/redisClient';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import { WebSocketServer } from 'ws';
import { buildSchema } from 'type-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { resolvers } from './generated/graphql';
import { ApolloServerPluginCacheControl } from 'apollo-server-core';
import customAuthChecker from './services/customAuthChecker';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { Resolve } from './config/authentication.config';
import { httpServer } from './app';
import { customResolvers } from './custom_resolvers/resolvers';
import { graphQLContext, webSocketContext } from './context/context';
import { customSubscriptionsResolvers } from './custom_resolvers/subscriptions/index';
import { redisPubSub } from './services/redis';
import {
  BaseRedisCache,
  RedisCache,
  RedisClient,
} from 'apollo-server-cache-redis';
import cacheConfig from './config/cacheConfig';
import Redis from 'ioredis';

const customCreateServer = async (): Promise<ApolloServer<ExpressContext>> => {
  // The Resolve function is called before the server starts.
  // It is used to apply middleware with enhance map functions
  Resolve();

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/websocket',
  });

  const schema = await buildSchema({
    resolvers: [
      ...resolvers,
      ...customResolvers,
      ...customSubscriptionsResolvers,
    ],

    pubSub: redisPubSub,
    validate: false,

    authChecker: customAuthChecker,
  });

  const serverCleanup = useServer(
    {
      schema,
      context: (ctx, msg, args) => webSocketContext(ctx, msg, args),
    },
    wsServer
  );

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => graphQLContext({ req, res }),

    cache: new BaseRedisCache({
      client: new Redis({
        ...redisOptions,
        keyPrefix: 'apollo-cache:',
      }) as RedisClient,
    }),

    persistedQueries: {
      cache: new RedisCache({
        ...redisOptions,
        keyPrefix: 'apollo-apq:',
      }),

      ttl: 3600,
    },

    plugins: [
      ApolloServerPluginCacheControl({
        defaultMaxAge: 3600,
        calculateHttpHeaders: false,
      }),
      ApolloServerPluginDrainHttpServer({ httpServer }),
      responseCachePlugin({
        sessionId: ({ context }) => (context.user ? context.user.id : null),

        shouldReadFromCache: cacheConfig,
        shouldWriteToCache: ({ context }) => context.user,
      }),
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled
        : ApolloServerPluginLandingPageGraphQLPlayground,
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],

    introspection: true,
  });
  return server;
};

export default customCreateServer;

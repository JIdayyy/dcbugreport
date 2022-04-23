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
import customAuthChecker from './services/customAuthChecker';
import { Resolve } from './config/authentication.config';
import { httpServer } from './app';
import { customResolvers } from './custom_resolvers/resolvers';
import { graphQLContext, webSocketContext } from './context/context';
import { customSubscriptionsResolvers } from './custom_resolvers/subscriptions/index';

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
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
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

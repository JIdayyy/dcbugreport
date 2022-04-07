/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import { WebSocketServer } from 'ws';
import { buildSchema } from 'type-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { resolvers } from './generated/graphql';
import customAuthChecker from './utils/customAuthChecker';
import { Resolve } from './authConfig';
import { CreateBugCustomResolver } from './custom_resolvers/Bug/CreateBugCustomResolver';
import { SampleResolver } from './custom_resolvers/subscriptions/newBugSubscription';
import { httpServer } from './app';
import { customResolvers } from './custom_resolvers/customResolvers';
import { graphQLContext, webSocketContext } from './services/context';

const customCreateServer = async () => {
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
      CreateBugCustomResolver,
      SampleResolver,
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

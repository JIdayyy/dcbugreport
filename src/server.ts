/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { WebSocketServer } from 'ws';
import { buildSchema } from 'type-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { PubSub } from 'graphql-subscriptions';
import Cookies from 'cookies';
import { Response } from 'express';
import { verify } from 'jsonwebtoken';
import { resolvers } from './generated/graphql';
import prisma from '../prisma/prismaClient';
import customAuthChecker from './utils/customAuthChecker';
import { RegisterResolver } from './custom_resolvers/auth/register';
import { LoginResolver } from './custom_resolvers/auth/login';
import { Resolve } from './authConfig';
import { MeResolver } from './custom_resolvers/auth/me';
import { UploadFile } from './custom_resolvers/UploadFileResolver';
import { CreateBugCustomResolver } from './custom_resolvers/Bug/CreateBugCustomResolver';
import { SampleResolver } from './custom_resolvers/subscriptions/newBugSubscription';
import { httpServer } from './app';

const pubsub = new PubSub();

const customCreateServer = async () => {
  Resolve();

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/websocket',
  });

  const schema = await buildSchema({
    resolvers: [
      ...resolvers,
      RegisterResolver,
      LoginResolver,
      MeResolver,
      UploadFile,
      CreateBugCustomResolver,
      SampleResolver,
    ],
    validate: false,

    authChecker: customAuthChecker,
  });

  const serverCleanup = useServer(
    {
      schema,
      context: async (ctx, msg, args) => {
        const cookies = new Cookies(
          ctx.extra.request,
          {} as unknown as Response
        );
        const token = cookies.get('token');
        const user = verify(token!, process.env.JWT_SECRET as string);

        if (typeof user === 'string') {
          throw new Error('User not logged in');
        }
        return { ctx, msg, args, prisma, user };
      },
    },
    wsServer
  );

  const server = new ApolloServer({
    schema,

    context: async ({ req, res }) => ({ prisma, req, res, pubsub }),

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

import Cookies from 'cookies';
import { Request, Response } from 'express';
import { ExecutionArgs } from 'graphql';
import { Context, SubscribeMessage } from 'graphql-ws';
import { Extra } from 'graphql-ws/lib/use/ws';
import { verify } from 'jsonwebtoken';
import { PubSub } from 'graphql-subscriptions';
import { GQLContext, WebsocketContext } from '../interfaces/index';
import prisma from '../../prisma/prismaClient';

const pubsub = new PubSub();

export const webSocketContext = async (
  ctx: Context<
    Record<string, unknown> | undefined,
    Extra & Partial<Record<PropertyKey, never>>
  >,
  msg: SubscribeMessage,
  args: ExecutionArgs
): Promise<WebsocketContext> => {
  const cookies = new Cookies(ctx.extra.request, {} as unknown as Response);
  const token = cookies.get('token');

  if (token) {
    const user = verify(token, process.env.JWT_SECRET as string, {
      ignoreExpiration: true,
    });
    if (typeof user === 'string') {
      throw new Error('User not logged in');
    }

    return { ctx, msg, args, prisma, user };
  }

  return { ctx, msg, args, prisma };
};

export const graphQLContext = async ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<GQLContext> => {
  const cookies = new Cookies(req, res);
  const token = cookies.get('token');
  if (token) {
    const user = verify(token, process.env.JWT_SECRET as string, {
      ignoreExpiration: true,
    });

    return { prisma, req, res, pubsub, user };
  }

  return { prisma, req, res, pubsub };
};

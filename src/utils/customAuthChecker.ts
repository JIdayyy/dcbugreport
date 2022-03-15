import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { PubSubEngine } from 'graphql-subscriptions';
import { AuthChecker } from 'type-graphql';
import mobileClientAuthChecker from './mobileClientAuthChecker';
import clientTypeChecker from './platformTypeChecker';

import webClientAuthCheck from './webClientAuthCheck';

const customAuthChecker: AuthChecker<{
  req: Request;
  res: Response;
  prisma: PrismaClient;
  pubsub: PubSubEngine;
}> = async ({ context }, roles) => {
  if (
    clientTypeChecker(context.req) === 'web' &&
    (await webClientAuthCheck(context, roles))
  ) {
    return true;
  }
  if (
    clientTypeChecker(context.req) === 'mobile' &&
    (await mobileClientAuthChecker(context, roles))
  ) {
    return true;
  }
  if (await webClientAuthCheck(context, roles)) {
    return true;
  }
  return webClientAuthCheck(context, roles);
};

export default customAuthChecker;

import { PrismaClient } from '.prisma/client';

export interface GQLContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  user?: User;
  pubsub: PubSub;
}

export interface WebsocketContext {
  ctx: Context<
    Record<string, unknown> | undefined,
    Extra & Partial<Record<PropertyKey, never>>
  >;
  msg: SubscribeMessage;
  args: ExecutionArgs;
  user?: User;
  prisma: PrismaClient;
}

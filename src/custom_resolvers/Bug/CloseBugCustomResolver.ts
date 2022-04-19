/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { JwtPayload, verify } from 'jsonwebtoken';
import { Arg, Args, PubSub } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Bug } from '../../generated/graphql/models/Bug';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../generated/graphql/helpers';
import CloseBugArgs from '../Args/closeBugArgs';
import { NotificationPayload } from '../models/notification';

@TypeGraphQL.Resolver((_of) => Bug)
export class CloseBugCustomResolver {
  @TypeGraphQL.Mutation((_returns) => Bug, {
    nullable: false,
  })
  async closeBug(
    @TypeGraphQL.Ctx()
    ctx: {
      prisma: PrismaClient;
      req: Request;
      res: Response;
      pubsub: PubSubEngine;
      user: JwtPayload;
    },
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @Args() args: CloseBugArgs,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Bug | null> {
    const { _count } = transformFields(graphqlFields(info as any));

    const bug = await getPrismaFromContext(ctx).bug.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    if (bug) {
      const payload: NotificationPayload = {
        userId: ctx.user.id,
        senderId: ctx.user.id,
        message: `${ctx.user.name} has closed a bug`,
      };

      pubSub.publish('NOTIFICATIONS', payload);
    }

    return bug;
  }
}

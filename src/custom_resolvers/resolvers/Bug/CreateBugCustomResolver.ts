import { GQLContext } from '@interfaces';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { Publisher, PubSub } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { JwtPayload, verify } from 'jsonwebtoken';
import Cookies from 'cookies';
import { NotificationTopics, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { CreateBugArgs } from '../../../generated/graphql/resolvers/crud/Bug/args';
import { Bug } from '../../../generated/graphql/models/Bug';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../generated/graphql/helpers';
import { NotificationPayload } from '../../models/notification';
import { ApolloError } from 'apollo-server-core';

@TypeGraphQL.Resolver((_of) => Bug)
export class CreateBugCustomResolver {
  @TypeGraphQL.Mutation((_returns) => Bug, {
    nullable: false,
  })
  async createBugCustom(
    @TypeGraphQL.Ctx()
    ctx: GQLContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBugArgs,
    @PubSub('NOTIFICATIONS') pubSub: Publisher<NotificationPayload>
  ): Promise<Bug> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { _count } = transformFields(graphqlFields(info as any));

    const websiteFromPrisma = await ctx.prisma.website.findUnique({
      where: {
        id: args.data.Website.connect?.id,
      },
      rejectOnNotFound: true,
    });

    const payload: NotificationPayload = {
      senderId: ctx.user.id,
      userId: ctx.user.id,
      message: `${ctx.user.first_name} ${ctx.user.last_name} has created a new bug on ${websiteFromPrisma.name}`,
    };

    const users = await ctx.prisma.user.findMany();

    const allNewNotifications = users.map((usr) => ({
      description: payload.message as string,
      title: payload.message as string,
      userId: usr.id,
      senderId: ctx.user.id,
      topics: ['NEW_BUG'] as NotificationTopics[],
      is_disabled: false,
    }));

    await ctx.prisma.notification.createMany({
      data: allNewNotifications,
    });

    const bug = await getPrismaFromContext(ctx).bug.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    if (bug) {
      await pubSub(payload);
    }

    return bug;
  }
}

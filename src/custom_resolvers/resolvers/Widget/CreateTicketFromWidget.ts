/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { PubSub, UseMiddleware } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { NotificationTopics, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Bug } from '../../../generated/graphql/models/Bug';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../generated/graphql/helpers';
import { NotificationPayload } from '../../models/notification';
import { JwtPayload, verify } from 'jsonwebtoken';
import { CreateBugFromWidgetArgs } from '../../Args/createBugFromWidgetArgs';

@TypeGraphQL.Resolver((_of) => Bug)
export class CreateTicketFromWidgetCustomResolver {
  @TypeGraphQL.Mutation((_returns) => Bug, {
    nullable: false,
  })
  async createBugFromWidget(
    @TypeGraphQL.Ctx()
    ctx: {
      prisma: PrismaClient;
      req: Request;
      res: Response;
      pubsub: PubSubEngine;
    },
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBugFromWidgetArgs,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Bug> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { _count } = transformFields(graphqlFields(info as any));
    console.log(args);
    console.log('header', ctx.req.headers.authorization);

    const widgetToken = verify(
      ctx.req.headers.authorization as string,
      process.env.JWT_SECRET_WIDGET as string
    ) as JwtPayload;

    const user = await ctx.prisma.user.findUnique({
      where: {
        id: widgetToken.id,
      },
      rejectOnNotFound: true,
    });

    const websiteFromPrisma = await ctx.prisma.website.findUnique({
      where: {
        id: args.data.Website.connect?.id,
      },
      rejectOnNotFound: true,
    });

    const payload: NotificationPayload = {
      senderId: '100_100_1337',
      userId: user.id,
      message: `${user.first_name} ${user.last_name} has created a new bug on ${websiteFromPrisma.name}`,
    };

    const users = await ctx.prisma.user.findMany();

    const allNewNotifications = users.map((usr) => ({
      description: payload.message as string,
      title: payload.message as string,
      userId: usr.id,
      senderId: user.id,
      topics: ['NEW_BUG'] as NotificationTopics[],
      is_disabled: false,
    }));

    await ctx.prisma.notification.createMany({
      data: allNewNotifications,
    });

    const bug = await getPrismaFromContext(ctx).bug.create({
      data: {
        ...args.data,
        Website: {
          connect: {
            id: 'aede2270-c4eb-49d8-a430-d754adfd992b',
          },
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    if (bug) {
      await pubSub.publish('NOTIFICATIONS', payload);
    }

    return bug;
  }
}

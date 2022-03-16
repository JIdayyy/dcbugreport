/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { PubSub } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { JwtPayload, verify } from 'jsonwebtoken';
import Cookies from 'cookies';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { CreateBugArgs } from '../../generated/graphql/resolvers/crud/Bug/args';
import { Bug } from '../../generated/graphql/models/Bug';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../generated/graphql/helpers';
import { NotificationPayload } from '../models/notification';

@TypeGraphQL.Resolver((_of) => Bug)
export class CreateBugCustomResolver {
  @TypeGraphQL.Mutation((_returns) => Bug, {
    nullable: false,
  })
  async createBugCustom(
    @TypeGraphQL.Ctx()
    ctx: {
      prisma: PrismaClient;
      req: Request;
      res: Response;
      pubsub: PubSubEngine;
    },
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBugArgs,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Bug> {
    const { _count } = transformFields(graphqlFields(info as any));
    const cookies = new Cookies(ctx.req, ctx.res, {
      secure: true,
    });

    const token = cookies.get('token');

    const user = verify(token!, process.env.JWT_SECRET as string);

    if (typeof user === 'string') {
      throw new Error('User not logged in');
    }

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

    const bug = await getPrismaFromContext(ctx).bug.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
    if (bug) {
      await pubSub.publish('NOTIFICATIONS', payload);
    }

    return bug;
  }
}

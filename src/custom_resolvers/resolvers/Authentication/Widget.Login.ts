/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloError } from 'apollo-server-core';
import { Args, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { PubSubEngine } from 'graphql-subscriptions';
import { verify } from 'jsonwebtoken';
import { User } from '../../../generated/graphql';
import WidgetLoginArgs from '../../Args/widgetLoginArgs';
import { UserWithoutCountAndPassword } from '@interfaces/user';

@Resolver()
export class WidgetLogin {
  @Mutation(() => User)
  async widgetLogin(
    @Ctx()
    ctx: {
      prisma: PrismaClient;
      req: Request;
      res: Response;
      pubsub: PubSubEngine;
    },
    @Args() data: WidgetLoginArgs
  ): Promise<UserWithoutCountAndPassword> {
    const widget = verify(
      data.data.widget_token,
      process.env.JWT_SECRET_WIDGET as string
    );

    if (typeof widget === 'string') {
      throw new ApolloError('Invalid widget token');
    }

    const userWidget = await ctx.prisma.user.findUnique({
      where: {
        id: widget.id as string,
      },
      rejectOnNotFound: true,
    });

    const { password, ...widgetWithoutPassword } = userWidget;

    return widgetWithoutPassword;
  }
}

/* eslint-disable import/no-extraneous-dependencies */
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { PubSubEngine } from 'graphql-subscriptions';
import { sign } from 'jsonwebtoken';
import Cookies from 'cookies';
import bcrypt from 'bcrypt';
import { User } from '../../generated/graphql';
import { UserWithoutCountAndPassword } from '../models/register';
import { LoginInput } from '../models/login';

@Resolver()
export class LoginResolver {
  @Mutation(() => User)
  async login(
    @Ctx()
    ctx: {
      prisma: PrismaClient;
      req: Request;
      res: Response;
      pubsub: PubSubEngine;
    },
    @Arg('data') data: LoginInput
  ): Promise<UserWithoutCountAndPassword> {
    const cookies = new Cookies(ctx.req, ctx.res, {
      secure: process.env.NODE_ENV === 'production',
    });
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new Error("User doesn't exist");

    if (!bcrypt.compareSync(data.password, user.password)) {
      ctx.res.cookie('widget-token', '');
      throw new Error('Invalid password');
    }

    const token = sign(
      {
        email: user.email,
        id: user.id,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );

    const { password, ...userWithoutPassword } = user;

    cookies.set('token', token, {
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });

    ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

    return userWithoutPassword;
  }
}

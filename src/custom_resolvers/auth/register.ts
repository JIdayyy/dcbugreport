/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Cookies from 'cookies';
import { sign } from 'jsonwebtoken';
import { User } from '../../generated/graphql/models/User';
import { RegisterInput, UserWithoutCountAndPassword } from '../models/register';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Ctx() ctx: { prisma: PrismaClient; req: Request; res: Response },
    @Arg('data') data: RegisterInput
  ): Promise<UserWithoutCountAndPassword> {
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    const cookies = new Cookies(ctx.req, ctx.res, {
      secure: process.env.NODE_ENV === 'production',
    });
    console.log(data, process.env.ACCESS_KEY);
    if (data.secret_key !== process.env.ACCESS_KEY) {
      throw new Error('Invalid secret key');
    }

    const user = await ctx.prisma.user.create({
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: hashedPassword,
        is_disabled: false,
        role: ['USER'],
      },
    });

    const token = sign(
      {
        email: user.email,
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );

    cookies.set('token', token, {
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}

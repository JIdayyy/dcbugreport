/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Cookies from 'cookies';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../../../generated/graphql';
import { UserWithoutCountAndPassword } from '@interfaces/user';
import { setCookieToken, signToken } from '../../../services/authentication';
import { GQLContext } from '../../../interfaces';

@Resolver()
export class MeResolver {
  @Mutation(() => User)
  async me(@Ctx() ctx: GQLContext): Promise<UserWithoutCountAndPassword> {
    const cookies = new Cookies(ctx.req, ctx.res, {
      secure: true,
    });
    const token = cookies.get('token');

    if (!token) throw new Error('No token provided');

    const result = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      function (err, decoded) {
        if (err) {
          return console.log(decoded);
        }
      }
    );

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    const prismaUser = await ctx.prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (!prismaUser) throw new Error("User doesn't exist");

    const newToken = signToken(prismaUser);

    const { password, ...userWithoutPassword } = prismaUser;

    setCookieToken(newToken, 'token', ctx);

    return userWithoutPassword;
  }
}

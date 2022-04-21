import prismaClient from '../../prisma/prismaClient';
import { ApolloError } from 'apollo-server-core';
import bcrypt from 'bcrypt';
import Cookies from 'cookies';
import { sign } from 'jsonwebtoken';
import { Role, User } from '../generated/graphql';
import { GQLContext } from '../interfaces/index';

export const getWidgetToken = async ({
  websiteId,
}: {
  websiteId: string;
}): Promise<string> => {
  const website = await prismaClient.website.findUnique({
    where: {
      id: websiteId,
    },
  });

  if (!website) throw new ApolloError("Website doesn't exist");

  const token = sign(
    {
      id: '100_100_1337',
      websiteId,
      email: 'guest@widget.ts',
      role: [Role.WIDGET],
    },
    process.env.JWT_SECRET_WIDGET as string
  );
  return token;
};

export const checkPassword = (
  password: string,
  passwordFromDatabase: string,
  ctx: GQLContext
): boolean => {
  if (!bcrypt.compareSync(password, passwordFromDatabase)) {
    ctx.res.cookie('token', '');
    throw new ApolloError('Invalid password');
  }
  return true;
};

export const signToken = (user: User): string => {
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
  return token;
};

export const setCookieToken = (token: string, ctx: GQLContext): void => {
  const cookies = new Cookies(ctx.req, ctx.res, {
    secure: process.env.NODE_ENV === 'production',
  });
  cookies.set('token', token, {
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });
  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');
};

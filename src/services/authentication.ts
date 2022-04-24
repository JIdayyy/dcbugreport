import prismaClient from '../../prisma/prismaClient';
import { ApolloError } from 'apollo-server-core';
import bcrypt from 'bcrypt';
import Cookies from 'cookies';
import { sign } from 'jsonwebtoken';
import { Role, User } from '../generated/graphql';
import { GQLContext } from '../interfaces/index';

/**
 * This function sign a new API key for a website and return it
 * @param {string} websiteId - is the id of the website to get the widget api key for
 * @returns {Promise<ApiKey>} string - is the widget api key as a promise
 */

export const generateApiKey = async ({
  websiteId,
}: {
  websiteId: string;
}): Promise<string> => {
  const apiKey = sign(
    {
      id: '100_100_1337',
      websiteId,
      email: 'guest@widget.ts',
      role: [Role.WIDGET],
    },
    process.env.JWT_SECRET_WIDGET as string
  );
  return apiKey;
};

/**
 * This function sign a new token for a website and return it
 * @param {string} websiteId - is the id of the website to get the widget api key for
 * @returns {Promise<WidgetToken>} string - is the widget api token as a promise
 */

export const generateSecretKey = async ({
  websiteId,
  apiKeyId,
}: {
  websiteId: string;
  apiKeyId: string;
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
      apiKeyId: apiKeyId,
      websiteId,
      email: 'guest@widget.ts',
      role: [Role.WIDGET],
    },
    process.env.JWT_SECRET_WIDGET as string
  );
  return token;
};

/**
 * This function check if the input password match with the salted one
 * @param {string} password - is the password to check
 * @param {string} passwordFromDatabase - is the salted password from the database
 * @returns  true or Error - as the result of the check
 */

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

/**
 * @param user - is the user to check
 * @returns token - as the JWT token with the user informations as payload
 */

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

/**
 * @param user - is the user to check
 * @returns token - as the JWT refresh token with the user informations as payload
 */

export const signRefreshToken = (user: User): string => {
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
      expiresIn: '6d',
    }
  );
  return token;
};

/**
 * @param token - is the token set is cookies
 * @param ctx - is the context of the API
 * @returns void - when the token is set in the cookies
 */

export const setCookieToken = (token: string, ctx: GQLContext): void => {
  const cookies = new Cookies(ctx.req, ctx.res, {
    secure: process.env.NODE_ENV === 'production',
  });

  cookies.set('token', token, {
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    domain:
      process.env.NODE_ENV === 'production'
        ? 'https://dcbugreport.vercel.app/'
        : 'localhost',
  });

  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');
};

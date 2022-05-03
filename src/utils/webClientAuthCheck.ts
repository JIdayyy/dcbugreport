/* eslint-disable @typescript-eslint/no-explicit-any */
import { GQLContext } from '@interfaces';
import { setCookieToken, signRefreshToken } from './../services/authentication';
import { signToken } from '../services/authentication';
import { ApolloError } from 'apollo-server-core';
import Cookies from 'cookies';
import { verify, JwtPayload, decode } from 'jsonwebtoken';

const webClientAuthCheck = async (
  context: GQLContext,
  roles: string[]
): Promise<boolean | ApolloError | void> => {
  const cookies = new Cookies(context.req, context.res, { secure: true });

  const token = context.req.cookies
    ? context.req.cookies.token
    : cookies.get('token');

  const refreshToken = context.req.cookies
    ? context.req.cookies.refreshToken
    : cookies.get('refreshToken');

  if (!token) throw new ApolloError('U have to be logged in');

  try {
    const user = verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if (!user) throw new ApolloError('Invalid token');

    if (roles.find((role) => user.role.includes(role))) return true;

    throw new ApolloError('Acces denied');
  } catch (error) {
    if (error instanceof Error && error.name === 'TokenExpiredError') {
      verify(refreshToken, process.env.JWT_SECRET as string, (err: any) => {
        console.log(err);
      });

      const { email, id, role, first_name, last_name } = decode(
        refreshToken
      ) as JwtPayload;

      const newToken = signToken({
        email,
        id,
        role,
        first_name,
        last_name,
      });

      const newRefreshToken = signRefreshToken({
        email,
        id,
        role,
        first_name,
        last_name,
      });

      setCookieToken(newToken, 'token', context);
      setCookieToken(newRefreshToken, 'refreshToken', context);

      return true;
    }
    throw new ApolloError('Error during the authentication');
  }
};

export default webClientAuthCheck;

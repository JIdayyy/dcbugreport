import bcrypt from 'bcrypt';
import Cookies from 'cookies';
import { sign } from 'jsonwebtoken';
import { User } from 'src/generated/graphql';
import { GQLContext } from 'src/interfaces';

export const checkPassword = (
  password: string,
  passwordFromDatabase: string,
  ctx: GQLContext
) => {
  if (!bcrypt.compareSync(password, passwordFromDatabase)) {
    ctx.res.cookie('token', '');
    throw new Error('Invalid password');
  }
};

export const signToken = (user: User) => {
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

export const setCookieToken = (token: string, ctx: GQLContext) => {
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

import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Cookies from 'cookies';
import { LoginInput } from 'src/custom_resolvers/models/login';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const loginJWTCookies = async (
  ctx: { prisma: PrismaClient; req: Request; res: Response },
  data: LoginInput
) => {
  const cookies = new Cookies(ctx.req, ctx.res, {
    secure: process.env.NODE_ENV === 'production',
  });
  console.log('ici');
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) throw new Error("User doesn't exist");
  if (!bcrypt.compareSync(data.password, user.password)) {
    ctx.res.cookie('token', '');
    throw new Error('Invalid password');
  }

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

  const { password, ...userWithoutPassword } = user;
  // ctx.res.cookie('token', token);
  cookies.set('token', token, {
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });

  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

  return userWithoutPassword;
};
export default loginJWTCookies;

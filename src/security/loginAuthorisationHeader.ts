/* eslint-disable @typescript-eslint/no-unused-vars */
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { LoginInput } from '@custom_resolvers/Inputs/login';
import { UserWithoutCountAndPassword } from '@interfaces/user';

const loginAuthorizationHeader = async (
  ctx: { prisma: PrismaClient; req: Request; res: Response },
  data: LoginInput
): Promise<UserWithoutCountAndPassword> => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) throw new Error("User doesn't exist");

  if (!bcrypt.compareSync(data.password, user.password)) {
    ctx.res.setHeader('x-Authorization', '');
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

  ctx.res.setHeader('x-Authorization', `Bearer ${token}`);
  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

  return userWithoutPassword;
};
export default loginAuthorizationHeader;

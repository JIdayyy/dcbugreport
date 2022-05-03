import dotenv from 'dotenv';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Redis from 'ioredis';

dotenv.config();

console.log(process.env.REDIS_PASSWORD);

export const redisOptions = {
  port: +process.env.REDIS_PORT! || 6379,
  host: process.env.REDIS_HOST as string,
  password: process.env.REDIS_PASSWORD as string,
  retryStrategy: (times: number): number => {
    // reconnect after
    return Math.min(times * 50, 2000);
  },
};

export const redis = new Redis(redisOptions);

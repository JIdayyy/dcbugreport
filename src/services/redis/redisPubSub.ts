import { redisOptions } from './redisClient';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';

export const redisPubSub = new RedisPubSub({
  publisher: new Redis(redisOptions),
  subscriber: new Redis(redisOptions),
});

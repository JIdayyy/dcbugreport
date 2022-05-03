import Redis from 'ioredis';

export const redisOptions = {
  port: 6379,
  host: '149.202.85.181',
  password: 'DigitalCopilote1337',
  retryStrategy: (times: number): number => {
    // reconnect after
    return Math.min(times * 50, 2000);
  },
};

export const redis = new Redis(redisOptions);

// redis://:DigitalCopilote1337@149.202.85.181:6379

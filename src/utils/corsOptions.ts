const whitelistedUrls = process.env.CLIENTS_URLS?.split(',') || [];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, check?: boolean) => Error | void
  ) => {
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    if (whitelistedUrls.indexOf(origin as string) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
};

export default corsOptions;

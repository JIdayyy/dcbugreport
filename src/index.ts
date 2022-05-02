/* eslint-disable no-console */
import 'reflect-metadata';
import { graphqlUploadExpress } from 'graphql-upload';
import dotenv from 'dotenv';
import morgan from 'morgan';
import createServer from './server';
import app, { httpServer } from './app';
import limiter from './security/rateLimit';

dotenv.config();

process.on('warning', (e) => console.warn(e.stack));

const { PORT } = process.env;

(async () => {
  const server = await createServer();

  await server.start();

  app.use(graphqlUploadExpress());
  app.use(morgan('combined'));
  app.use(limiter);

  server.applyMiddleware({
    app,
    cors: false,
  });

  const serverStartLogs = () => {
    console.log(`Server running on http://localhost:${PORT || 4000} 🪐🌶️. `);
    console.log(
      `GraphQL running on http://localhost:${PORT}${server.graphqlPath}. 👍🐉`
    );
  };

  await new Promise((resolve) =>
    httpServer.listen(PORT || 4000, () => {
      resolve(serverStartLogs());
    })
  );
})();

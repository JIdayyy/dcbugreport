/* eslint-disable no-console */
import 'reflect-metadata';
import dotenv from 'dotenv';
import { graphqlUploadExpress } from 'graphql-upload';
import createServer from './server';
import app from './app';

dotenv.config();
const { PORT } = process.env;

(async () => {
  const server = await createServer();

  await server.start();

  app.use(graphqlUploadExpress());
  // app.use(morgan('combined'));

  server.applyMiddleware({
    app,
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
      exposedHeaders: ['x-authorization'],
    },
  });

  const serverStartLogs = () => {
    console.log(`Server running on http://yourwebsite:${PORT || 4000}/ 🪐🌶️. `);
    console.log(
      `GraphQL running on http://yourwebsite:${PORT}${server.graphqlPath}. 👍🐉`
    );
  };

  await new Promise((resolve) =>
    app.listen(PORT || 4000, () => {
      resolve(serverStartLogs());
    })
  );
})();

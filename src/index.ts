/* eslint-disable no-console */
import 'reflect-metadata';
import { graphqlUploadExpress } from 'graphql-upload';
import dotenv from 'dotenv';
import createServer from './server';
import app, { httpServer } from './app';

dotenv.config();

process.on('warning', (e) => console.warn(e.stack));

const { PORT } = process.env;

(async () => {
  const server = await createServer();

  await server.start();

  app.use(graphqlUploadExpress());
  // app.use(morgan('combined'));

  server.applyMiddleware({
    app,
    cors: false,
  });

  const serverStartLogs = () => {
    console.log(`Server running on http://yourwebsite:${PORT || 4000}/ 🪐🌶️. `);
    console.log(
      `GraphQL running on http://yourwebsite:${PORT}${server.graphqlPath}. 👍🐉`
    );
  };

  await new Promise((resolve) =>
    httpServer.listen(PORT || 4000, () => {
      resolve(serverStartLogs());
    })
  );
})();

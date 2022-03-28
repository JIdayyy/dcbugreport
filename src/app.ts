import express from 'express';

import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [process.env.CLIENT_URL] as string[]
        : ['http://localhost:3000','http://localhost:3001'],
    credentials: true,
  })
);

app.get('/', (req, res) => res.status(200).send('Hello World'));

export const httpServer = createServer(app);

export default app;

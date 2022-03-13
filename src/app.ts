import express from 'express';

import cors from 'cors';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.CLIENT_URL
        : 'http://localhost:3000',
    credentials: true,
  })
);

app.get('/', (req, res) => res.status(200).send('Hello World'));

export default app;

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import corsOptions from './utils/corsOptions';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.set('Cache-control', 'public, max-age=604800');
  next();
});

app.get('/', (req, res) => res.status(200).send('Hello World'));

export const httpServer = createServer(app);

export default app;

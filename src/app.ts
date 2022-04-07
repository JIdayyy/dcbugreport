import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import corsOptions from './utils/corsOptions';
import limiter from './security/rateLimit';

const app = express();

app.use(limiter);

app.use(express.json());

app.use(cors(corsOptions));

app.get('/', (req, res) => res.status(200).send('Hello World'));

export const httpServer = createServer(app);

export default app;

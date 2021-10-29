import express, { Request, Response } from 'express';
import { routes } from '../routes';

const app = express();

app.use(routes)

app.use(express.json());

app.listen(3333, () => { console.log("[SERVER ON] app running on http://localhost:3333")});
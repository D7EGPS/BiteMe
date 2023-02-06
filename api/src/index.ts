import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import db from './database/connect';
import config from './config';
import { appRouter, createContext } from './routes';
// export const middleware = t.middleware;
// export const publicProcedure = t.procedure;

const app = express();
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
);

db()
  .then(() => console.log('db connected'))
  .catch((err) => console.log('connection error'));

app.listen(config.PORT);

export type AppRouter = typeof appRouter;

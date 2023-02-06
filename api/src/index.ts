import express from 'express';
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';

export const t = initTRPC.create();
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

export const appRouter = t.router({
  getUser: t.procedure.query((req) => {
    // string
    return { name: 'Bilbo' };
  }),
});

const app = express();
app.use('/trpc', trpcExpress.createExpressMiddleware({ router: appRouter }));
export type AppRouter = typeof appRouter;
app.listen(3000);

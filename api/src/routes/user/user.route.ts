import { z } from 'zod';
import { publicProcedure, router } from '../../tRPC';
import { UserModel } from '../../models';

export const userRouter = router({
  getUser: publicProcedure.query((req) => {
    return { name: 'Bilbo' };
  }),
  createUser: publicProcedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      return await UserModel.create({
        data: req.input,
      });
    }),
});

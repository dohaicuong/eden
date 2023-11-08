import { t } from './trpc'
import { z } from 'zod' 

export const appRouter = t.router({
  greeting: t.procedure
    .input(z.object({
      name: z.string().optional().default('tRPC v10')
    }))
    .query(({ input }) => `hello ${input.name}!`),
})
 
export type AppRouter = typeof appRouter

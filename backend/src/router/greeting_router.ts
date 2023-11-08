import { z } from "zod";
import { t } from "../trpc";

export const greeting_router = t.router({
  greeting: t.procedure
    .input(z.object({
      name: z.string().optional().default('tRPC v10')
    }))
    .query(({ input }) => `hello ${input.name}!`),
})

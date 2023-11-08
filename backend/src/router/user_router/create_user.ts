import { z } from "zod"
import { t } from "../../trpc"
import { db } from "../../services/db"

export const create_user = t.procedure
  .input(z.object({
    email: z.string(),
    name: z.string()
  }))
  .mutation(async ({ input }) => {
    return db.user.create({
      data: input
    })
  })

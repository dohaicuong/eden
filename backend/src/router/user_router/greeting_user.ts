import { z } from "zod"
import { t } from "../../trpc"
import { db } from "../../services/db"
import { TRPCError } from "@trpc/server"

export const greeting_user = t.procedure
  .input(z.object({
    email: z.string()
  }))
  .query(async ({ input }) => {
    const user = await db.user.findUnique({
      where: {
        email: input.email
      }
    })
    if (!user) throw new TRPCError({
      code: 'NOT_FOUND',
      message: `User with email ${input.email} is not found`
    })

    return `hello ${user.name}!`
  })

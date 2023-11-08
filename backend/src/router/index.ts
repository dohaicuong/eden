import { t } from '../trpc'
import { greeting_router } from './greeting_router'
import { user_router } from './user_router'

export const appRouter = t.mergeRouters(
  greeting_router,
  user_router
)

export type AppRouter = typeof appRouter

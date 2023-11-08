import { t } from "../../trpc";
import { create_user } from "./create_user";
import { greeting_user } from "./greeting_user";

export const user_router = t.router({
  create_user,
  greeting_user,
})

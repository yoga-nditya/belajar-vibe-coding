import { Elysia } from "elysia";
import { userRoute } from "./routes/user-route";
import { authRoute } from "./routes/auth-route";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(userRoute)
  .use(authRoute)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


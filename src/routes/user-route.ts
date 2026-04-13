import { Elysia } from "elysia";
import { userService } from "../service/user-service";

export const userRoute = new Elysia({ prefix: "/api" }).post(
  "/users",
  async ({ body, set }) => {
    const { name, email, password } = body as {
      name: string;
      email: string;
      password: string;
    };

    try {
      await userService.registerUser(name, email, password);
      return { data: "ok" };
    } catch (error: any) {
      set.status = 400;
      return { error: error.message ?? "email atau password salah" };
    }
  }
);

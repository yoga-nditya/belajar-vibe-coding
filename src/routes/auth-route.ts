import { Elysia } from "elysia";
import { authService } from "../service/auth-service";

export const authRoute = new Elysia({ prefix: "/api" }).post(
  "/login",
  async ({ body, set }) => {
    const { email, password } = body as { email: string; password: string };

    try {
      const token = await authService.login(email, password);
      return { data: token };
    } catch (error: any) {
      set.status = 401;
      return { error: error.message ?? "email atau password salah" };
    }
  }
);

import { Elysia } from "elysia";
import { userService } from "../service/user-service";

export const userRoute = new Elysia({ prefix: "/api" })
  .post("/users", async ({ body, set }) => {
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
      return { error: error.message ?? "email sudah terdaftar" };
    }
  })
  .get("/users/current", async ({ headers, set }) => {
    const authHeader = headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      set.status = 401;
      return { error: "unauthorized" };
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      set.status = 401;
      return { error: "unauthorized" };
    }

    try {
      const user = await userService.getCurrentUser(token);
      return { data: user };
    } catch (error: any) {
      set.status = 401;
      return { error: "unauthorized" };
    }
  });

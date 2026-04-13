import bcrypt from "bcryptjs";
import { db } from "../db";
import { users, session } from "../db/schema";
import { eq } from "drizzle-orm";

export const authService = {
  async login(email: string, password: string) {
    if (!email || !password) {
      throw new Error("email atau password salah");
    }

    const userList = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    const [user] = userList;

    if (!user) {
      throw new Error("email atau password salah");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("email atau password salah");
    }

    const token = crypto.randomUUID();

    await db.insert(session).values({
      token,
      userId: user.id,
    });

    return token;
  },
};

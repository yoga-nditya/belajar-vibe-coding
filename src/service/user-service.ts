import bcrypt from "bcryptjs";
import { db } from "../db";
import { users, session } from "../db/schema";
import { eq } from "drizzle-orm";

export const userService = {
  async registerUser(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      throw new Error("email sudah terdaftar");
    }

    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existing.length > 0) {
      throw new Error("email sudah terdaftar");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    });
  },

  async getCurrentUser(token: string) {
    const sessionRecord = await db
      .select()
      .from(session)
      .where(eq(session.token, token))
      .limit(1);

    const [currentSession] = sessionRecord;

    if (!currentSession) {
      throw new Error("unauthorized");
    }

    const user = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(eq(users.id, currentSession.userId))
      .limit(1);

    if (user.length === 0) {
      throw new Error("unauthorized");
    }

    return user[0];
  },
};

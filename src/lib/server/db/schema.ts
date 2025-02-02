import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: serial("id").primaryKey(),
    age: integer("age").notNull(),
    username: text("username").notNull().unique(),
    email: text("email").notNull().unique(),
});

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;

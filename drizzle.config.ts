import { defineConfig } from "drizzle-kit";
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/lib/server/auth-schema.ts",
    out: "./supabase/migrations",

    dbCredentials: {
        url: process.env.DATABASE_URL,
    },

    verbose: true,
    strict: true,
});

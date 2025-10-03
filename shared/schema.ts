import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const dashboardUsers = pgTable("dashboard_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  userType: text("user_type").notNull(),
  status: text("status").notNull(),
  downloadCount: integer("download_count").default(0),
  rechargeAmount: integer("recharge_amount").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const bbpsServices = pgTable("bbps_services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  serviceName: text("service_name").notNull(),
  category: text("category").notNull(),
  provider: text("provider").notNull(),
  amount: integer("amount").notNull(),
  status: text("status").notNull(),
  transactionDate: timestamp("transaction_date").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDashboardUserSchema = createInsertSchema(dashboardUsers).omit({
  id: true,
  createdAt: true,
});

export const insertBBPSServiceSchema = createInsertSchema(bbpsServices).omit({
  id: true,
  transactionDate: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DashboardUser = typeof dashboardUsers.$inferSelect;
export type InsertDashboardUser = z.infer<typeof insertDashboardUserSchema>;
export type BBPSService = typeof bbpsServices.$inferSelect;
export type InsertBBPSService = z.infer<typeof insertBBPSServiceSchema>;

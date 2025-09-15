import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// IT Services data types based on the provided services data
export interface ITService {
  id: number;
  name: string;
  category: string;
  baseCostUSD: number;
  description: string;
  detailedDescription: string;
  keyFeatures: string[];
  scaleDetails: {
    Small: string;
    Medium: string;
    Large: string;
  };
  scaleMultipliers: {
    Small: number;
    Medium: number;
    Large: number;
  };
  addOns: Array<{
    name: string;
    costUSD: number;
    description: string;
  }>;
  monthlyMaintenance: {
    Small: number;
    Medium: number;
    Large: number;
  };
}

export interface ServiceConfiguration {
  serviceId: number;
  projectSize: "Small" | "Medium" | "Large";
  selectedAddOns: string[];
  customizations: Record<string, any>;
}

export interface EstimateItem {
  service: ITService;
  configuration: ServiceConfiguration;
  estimatedCost: number;
  id: string;
}

export type Currency = "USD" | "EUR" | "INR" | "GBP";

export interface CurrencyRates {
  USD: number;
  EUR: number;
  INR: number;
  GBP: number;
}
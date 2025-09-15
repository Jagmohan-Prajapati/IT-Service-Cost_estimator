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

// IT Services data types based on the provided JSON
export interface ITService {
  id: string;
  ServiceCategory: string;
  SubService: string;
  IndustryUseCase: string;
  ProjectSize: "Small" | "Medium" | "Large";
  DeliveryModel: "Offshore" | "Onshore" | "Hybrid";
  Pricing: {
    PricingType: string;
    TotalEstimatedCostUSD: string;
    MilestoneBased: any[];
  };
  ToolingLicensingInfra: {
    CloudGPU_monthly_USD?: string;
    CloudHosting_monthly_USD?: string;
    SaaS_license_annual_USD?: string;
    Monitoring_tool_annual_USD?: string;
    Security_tools_annual_USD?: string;
    ERP_license_annual_USD?: string;
  };
  ComplianceCostsUSD: {
    GDPR_USD?: string;
  };
  TechnologyStack: string[];
  RegionsServed: string[];
  ScopeInclusions: string[];
  ScopeExclusions: string[];
  ServiceDescription: string;
  KeyFeatures: string[];
  AddOns: any[];
  Notes: string;
  TimelineWeeks: string;
  EngagementModel: string;
  PaymentTerms: string;
  RiskFactors: string[];
}

export interface ServiceConfiguration {
  serviceId: string;
  projectSize: "Small" | "Medium" | "Large";
  deliveryModel: "Offshore" | "Onshore" | "Hybrid";
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
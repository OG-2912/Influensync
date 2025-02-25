import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  displayName: text("display_name").notNull(),
  connectedPlatforms: jsonb("connected_platforms").notNull().default([]),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  displayName: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Types for mock data
export interface SocialPlatform {
  id: string;
  name: string;
  connected: boolean;
  followers: number;
  engagement: number;
}

export interface Post {
  id: string;
  platform: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  status: 'draft' | 'scheduled' | 'published';
  scheduledFor?: string;
}

export interface AnalyticsData {
  date: string;
  engagement: number;
  followers: number;
  posts: number;
}

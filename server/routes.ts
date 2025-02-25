import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { platforms, recentPosts, analyticsData } from "@/lib/mock-data";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication routes
  setupAuth(app);

  // Mock API endpoints for platform data
  app.get("/api/platforms", (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    res.json(platforms);
  });

  app.get("/api/posts", (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    res.json(recentPosts);
  });

  app.get("/api/analytics", (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    res.json(analyticsData);
  });

  const httpServer = createServer(app);
  return httpServer;
}

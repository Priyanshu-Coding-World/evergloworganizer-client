import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEventInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Event inquiry endpoint
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertEventInquirySchema.parse(req.body);
      const createdInquiry = await storage.createEventInquiry(inquiry);
      res.json(createdInquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create inquiry" });
      }
    }
  });

  // Get all event inquiries
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getEventInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  // Get portfolio items
  app.get("/api/portfolio", async (req, res) => {
    try {
      const items = await storage.getPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio items" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

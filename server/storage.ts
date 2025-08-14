import { type User, type InsertUser, type EventInquiry, type InsertEventInquiry, type PortfolioItem, type InsertPortfolioItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEventInquiry(inquiry: InsertEventInquiry): Promise<EventInquiry>;
  getEventInquiries(): Promise<EventInquiry[]>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private eventInquiries: Map<string, EventInquiry>;
  private portfolioItems: Map<string, PortfolioItem>;

  constructor() {
    this.users = new Map();
    this.eventInquiries = new Map();
    this.portfolioItems = new Map();
    
    // Initialize with sample portfolio items
    this.initializePortfolio();
  }

  private initializePortfolio() {
    const sampleItems: InsertPortfolioItem[] = [
      {
        title: "Sarah & James",
        category: "wedding",
        description: "Garden Wedding • 150 Guests",
        imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 150,
      },
      {
        title: "Tech Corp Gala",
        category: "corporate",
        description: "Annual Awards • 500 Guests",
        imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 500,
      },
      {
        title: "Emma & Michael",
        category: "wedding",
        description: "Beach Wedding • 200 Guests",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 200,
      },
      {
        title: "Sophie's 30th",
        category: "social",
        description: "Birthday Party • 80 Guests",
        imageUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 80,
      },
      {
        title: "Innovation Summit",
        category: "corporate",
        description: "Conference • 300 Guests",
        imageUrl: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 300,
      },
      {
        title: "Victoria & David",
        category: "wedding",
        description: "Ballroom Wedding • 250 Guests",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 250,
      },
      {
        title: "Golden Anniversary",
        category: "social",
        description: "50th Anniversary • 60 Guests",
        imageUrl: "https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 60,
      },
      {
        title: "Product Launch",
        category: "corporate",
        description: "Tech Launch • 400 Guests",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        guestCount: 400,
      },
    ];

    sampleItems.forEach(item => {
      this.createPortfolioItem(item);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEventInquiry(insertInquiry: InsertEventInquiry): Promise<EventInquiry> {
    const id = randomUUID();
    const inquiry: EventInquiry = {
      ...insertInquiry,
      phone: insertInquiry.phone || null,
      eventDate: insertInquiry.eventDate || null,
      guestCount: insertInquiry.guestCount || null,
      budgetRange: insertInquiry.budgetRange || null,
      message: insertInquiry.message || null,
      id,
      createdAt: new Date(),
    };
    this.eventInquiries.set(id, inquiry);
    return inquiry;
  }

  async getEventInquiries(): Promise<EventInquiry[]> {
    return Array.from(this.eventInquiries.values());
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const item: PortfolioItem = {
      ...insertItem,
      description: insertItem.description || null,
      guestCount: insertItem.guestCount || null,
      id,
      createdAt: new Date(),
    };
    this.portfolioItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();

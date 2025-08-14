# EverGlow Organisers - Event Management Platform

## Overview

EverGlow Organisers is a premium event management platform that creates "luminous, memorable experiences" for luxury weddings, corporate events, social celebrations, and virtual events. The platform serves as both a marketing website and client inquiry system, featuring a modern design with elegant gold/champagne and navy blue branding. The application showcases the company's portfolio, services, and provides an integrated contact system for potential clients to submit event inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application is built using modern React with TypeScript, following a component-based architecture:

- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom EverGlow brand colors and Shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form submissions
- **Component Library**: Extensive use of Radix UI primitives through Shadcn/ui for accessibility

### Backend Architecture

The server is built as a RESTful API using Express.js with modern ES modules:

- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect, using Neon Database serverless
- **Storage Strategy**: Memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for event inquiries and portfolio management
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema

The application uses three main entities defined in the shared schema:

- **Users**: Basic user management with username/password authentication
- **Event Inquiries**: Customer inquiry forms capturing event details, contact information, and requirements
- **Portfolio Items**: Showcase items with categorization (wedding, corporate, social) and metadata

### Component Organization

The frontend follows a structured component hierarchy:

- **Pages**: Single Home page with embedded sections
- **Components**: Modular sections (Hero, Services, Portfolio, Testimonials, Contact, Footer)
- **UI Components**: Reusable Shadcn/ui components with consistent styling
- **Shared**: Type definitions and schemas shared between client and server

### Development Workflow

The project uses modern development tooling:

- **Build System**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement with runtime error overlay
- **Type Checking**: Strict TypeScript configuration across client, server, and shared code
- **Database Migrations**: Drizzle Kit for schema management and migrations

### Authentication & Authorization

Currently implements a basic foundation with user schema, designed for future expansion of authentication features.

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom EverGlow brand variables
- **Radix UI**: Accessible component primitives for complex UI components
- **Shadcn/ui**: Pre-built component library built on Radix UI
- **Google Fonts**: Custom typography using Playfair Display, Inter, Source Sans Pro, and Montserrat

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API endpoints
- **Hookform Resolvers**: Zod integration for React Hook Form

### Development Tools
- **Vite**: Build tool with HMR and optimized bundling
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds

### Image & Content
- **Unsplash**: External image service for portfolio and background images
- **Lucide React**: Icon library for consistent iconography

### Deployment & Runtime
- **Node.js**: Runtime environment with ES modules support
- **Express Static**: Static file serving for production builds
- **Process Environment**: Environment variable management for database connections
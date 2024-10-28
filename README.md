# E-commerce Product Search Application

## Overview

This application is a modern e-commerce product search platform built with Next.js 14, featuring a robust search interface that allows users to discover products through an advanced search API. The application provides real-time search results with faceted navigation, categories filtering.

## Core Features

### Search Functionality

- **Free Text Search**: Users can search products using natural language queries
- **Real-time Results**: Fast search response with query time tracking

### Filtering and Facets

- **Category Navigation**: Browse products by categories

### Product Display

- **Product Information**: Detailed product cards showing essential information
- **Merchant Details**: Associated merchant information for each product

### User Interface

- **URL State Management**: Search parameters and filters preserved in URL for sharing and navigation
- **Modern Styling**: SCSS modules for component-specific styling
- **Type-Safe**: Full TypeScript implementation for improved reliability

## Technical Architecture

### Frontend Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **State Management**: URL-based state management
- **Development Tools**: ESLint and Prettier for code quality

### Performance Features

- **Server-Side Rendering**: Utilizing Next.js SSR capabilities
- **Efficient Data Fetching**: Optimized API calls with pagination
- **Type Safety**: Complete TypeScript integration
- **Modular Architecture**: Component-based structure for maintainability
- **Turbopack Integration**: Enhanced development experience with fast refresh

### API Integration

The application integrates with a RESTful API that provides:

- Product search with filtering and sorting
- Faceted navigation data
- Price range information
- Merchant details
- Product metadata

## Data Structure

### Search Request

```typescript
interface SearchRequest {
  query: string
  sortBy?: 'lowPrice' | 'highPrice' | 'newest' | 'relevance'
  offset?: number
  limit?: number
}
```

### Search Response

```typescript
interface SearchResponse {
  offset: number
  limit: number
  totalHits: number
  queryTime: number
  hits: Array<SearchHit>
  facets: {
    brands: Array<{ name: string; count: number }>
    tags: Array<{ name: string; count: number }>
    categories: Array<{ name: string; count: number }>
  }
  priceRange: {
    min: number
    max: number
  }
  products: Array<Product>
  merchants: Array<Merchant>
}
```

## Development Focus Areas

1. **Code Organization**

   - Modular component structure
   - Clear separation of concerns
   - Reusable utility functions
   - Type definitions and interfaces

2. **State Management**

   - URL-based state for filters and search
   - Client-side state for UI interactions
   - Server state management for API data

3. **Performance Optimization**

   - Efficient data fetching strategies
   - Client-side caching where appropriate
   - Image optimization

4. **User Experience**
   - Instant search feedback
   - Smooth transitions

## System Requirements

- Node.js 18.18 or later
- npm 9.0.0 or later
- macOS, Windows (including WSL), and Linux are supported

## Navigation

This project uses Next.js 14's App Router for navigation. Here’s how you can navigate between pages:

### Go to Products Listing Page

- Search for a product on the main page or click one of the links in the top navigation bar.

### Back and Forward Navigation

- Use breadcrumb navigation links to move back and forward between pages.

## Getting Started

The application can be run locally using the development server with Turbopack for enhanced performance:

```bash
npm run dev
```

For production builds:

```bash
npm run build
npm run start
```

Ermegilius: let's update readme for the whole project

GitHub Copilot: # Countries Fullstack

A comprehensive full-stack application showcasing countries data with a NestJS backend and React frontend. This project features country information display, weather data for capital cities, user authentication, and more.

## Features

-   Browse countries with search and filter capabilities
-   View detailed information about each country
-   Display real-time weather data for capital cities
-   User authentication and favorites management
-   Responsive design for mobile and desktop
-   Comprehensive error handling and loading states

## Tech Stack

### Frontend

-   React 18
-   TypeScript
-   Vite
-   Redux Toolkit for state management
-   React Router for navigation
-   Material UI for components
-   Axios for API requests

### Backend

-   NestJS
-   TypeScript
-   Supabase integration
-   Class-validator and class-transformer
-   Environment configuration

## Project Structure

```
project-root/
├── backend/      # NestJS application
└── frontend/     # React application with Vite
```

## Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (comes with Node.js)
-   Supabase account (for database)
-   OpenWeather API key

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd countries-fullstack
```

2. Install all dependencies (both frontend and backend):

```bash
npm run install:all
```

Or install separately:

```bash
# Install backend dependencies
npm run install:backend

# Install frontend dependencies
npm run install:frontend
```

## Environment Setup

### Backend (.env file in backend directory)

```env
SUPABASE_URL=https://your-supabase-instance.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

### Frontend (.env file in frontend directory)

```env
VITE_OPENWEATHER_API_KEY=your_api_key
```

## Development

Start both frontend and backend development servers:

```bash
npm run dev
```

The applications will be available at:

-   Frontend: http://localhost:5180
-   Backend: http://localhost:3000

### Available Commands

-   `npm run dev` - Start both frontend and backend in development mode
-   `npm run dev:frontend` - Start only the frontend
-   `npm run dev:backend` - Start only the backend
-   `npm run install:all` - Install dependencies for both projects
-   `npm run install:frontend` - Install frontend dependencies
-   `npm run install:backend` - Install backend dependencies
-   `npm run build` - Build both projects
-   `npm run build:frontend` - Build frontend only
-   `npm run build:backend` - Build backend only

## API Endpoints

### Countries API

-   Base URL: https://restcountries.com/v3.1
-   Endpoints:
    -   GET /all - Returns all countries
    -   GET /alpha/{code} - Returns specific country by code

### Weather API

-   Base URL: https://api.openweathermap.org/data/2.5
-   Endpoints:
    -   GET /weather?q={city}&units=metric&appid={API_KEY} - Returns weather for a city

## Testing

### E2E Testing with Cypress

Run Cypress tests:

```bash
# Navigate to frontend directory
cd frontend

# Open Cypress Test Runner
npm run cypress:open

# Run tests headlessly
npm run cypress:run
```

### Backend Tests

```bash
# Navigate to backend directory
cd backend

# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Routes

-   / (home) -> CountriesList
-   /countries -> CountriesList
-   /countries/:name -> CountryDetail

## Error Handling

This application implements:

-   Loading states for API data fetching
-   Error states with user-friendly messages
-   Fallbacks for missing data
-   Type-safe error handling in Redux

## License

MIT

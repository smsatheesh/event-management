# Events Management Application

A full-stack events management application built with a Node.js/Express backend and a React frontend.

## Features

- View a list of events
- Add new events
- Edit existing events
- Delete events
- View detailed information about a specific event
- Responsive design
- Client-side routing with React Router
- State management with React hooks (useState, useEffect, etc.)
- RESTful API backend

## Architecture

### High-Level Overview

The application follows a client-server architecture:

- **Backend**: Node.js with Express.js, providing a RESTful API for event data.
- **Frontend**: React application built with Vite (or Create React App, based on the setup) that consumes the backend API and provides a user interface.

### Backend (`backend/`)

- `app.js`: Entry point of the Express application.
- `routes/events.js`: Defines API endpoints for events (GET, POST, PUT, DELETE).
- `data/event.js`: Contains the Event model or data structure (if using a database, this might be replaced; currently using in-memory or JSON file).
- `util/errors.js`: Custom error handling utilities.
- `util/validation.js`: Input validation functions for event data.
- `events.json`: JSON file used as a simple data store (for development).

### Frontend (`frontend/`)

- `src/pages`: Contains page components for different routes (Home, Events, Event Detail, New Event, Edit Event, etc.).
- `src/components`: Reusable UI components (EventForm, EventItem, EventsList, Navigation, etc.).
- `src/index.js`: Entry point of the React application.
- Uses `react-router-dom` for client-side routing.
- Uses React hooks for state and side effects.

## Technology Stack

### Backend
- Node.js
- Express.js
- UUID (for generating unique IDs)

### Frontend
- React
- React Router DOM
- CSS Modules (for component-scoped styling)
- Testing Library (for unit tests)

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000` (or as configured in `app.js`).

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000` (or as configured).

### Running the Application
- Ensure both backend and frontend are running simultaneously.
- Access the application via the frontend URL (usually `http://localhost:3000`).

## API Endpoints

The backend provides the following RESTful API endpoints under `/api/events`:

- `GET /api/events` - Retrieve all events
- `GET /api/events/:id` - Retrieve a specific event by ID
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an existing event
- `DELETE /api/events/:id` - Delete an event

## Available Scripts

### Backend
- `npm start` - Starts the server using `node app.js`

### Frontend
- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (if applicable)

## Project Structure

```
events-management/
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── events.js
│   ├── data/
│   │   └── event.js
│   ├── util/
│   │   ├── errors.js
│   │   └── validation.js
│   └── events.json
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── EventForm.js
│   │   │   ├── EventItem.js
│   │   │   ├── EventsList.js
│   │   │   ├── Navigation components...
│   │   │   └── ... (with corresponding CSS modules)
│   │   └── pages/
│   │       ├── HomePage.js
│   │       ├── EventsPage.js
│   │       ├── EventDetailPage.js
│   │       ├── NewEventPage.js
│   │       ├── EditEventPage.js
│   │       ├── Newsletter.js
│   │       ├── Error.js
│   │       ├── NotFound.js
│   │       └── Layout components...
│   └── public/
│       ├── index.html
│       ├── manifest.json
│       └── robots.txt
└── how-to-use.txt
```

## License

This project is licensed under the ISC License (backend) and the frontend is private (as per package.json). See the respective package.json files for details.

## Acknowledgments

- Inspired by various full-stack tutorials.
- Built with Node.js, Express, and React.
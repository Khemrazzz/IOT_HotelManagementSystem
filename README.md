# Hotel IoT Energy Management System

This project is a prototype for managing energy consumption in a hotel using IoT devices. It provides a simple Node.js server that communicates with various sensors and actuators to optimize power usage in hotel rooms.

## Prerequisites

- **Node.js**: version 18 or later is recommended.
- **Package manager**: either `npm` (comes with Node.js) or `yarn`.

## Installation

1. Clone this repository.
2. Install dependencies using your preferred package manager:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Development Server

After installing dependencies with `npm install`, start the server in development mode using:

```bash
npm run dev
# or
yarn dev
```

The application will start on the default port `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env` in the project root and provide your Supabase project credentials:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_public_anon_key
```



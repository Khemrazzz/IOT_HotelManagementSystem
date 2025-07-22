# IoT Hotel Management Dashboard

This repository contains a Next.js dashboard used to monitor rooms, devices and alerts for a hotel. The UI is built with TypeScript and styled using Tailwind CSS.

## Project Structure

- **hotal-management-system/** – Next.js 15 application
  - `src/app/components` – shared UI components such as the sidebar
  - `src/app/*` – pages for the dashboard, rooms, devices and alerts

## Getting Started

1. Change into the project directory:
   ```bash
   cd hotal-management-system
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the dashboard.

## Building for Production

To create an optimized build and start the server:

```bash
npm run build
npm start
```


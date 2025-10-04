# LCR Pay Admin Dashboard

## Overview
This is a professional enterprise dashboard application for managing payment services, recharges, and BBPS (Bharat Bill Payment System) services. The application features a dark-mode interface with a comprehensive set of business management tools.

## Tech Stack
- **Frontend**: React with TypeScript, Vite
- **Backend**: Express.js with TypeScript
- **UI Framework**: Tailwind CSS with Radix UI components (shadcn/ui)
- **State Management**: TanStack Query (React Query v5)
- **Routing**: wouter
- **Database**: PostgreSQL (via Drizzle ORM)
- **Storage**: In-memory storage (MemStorage) by default

## Project Structure
```
.
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Application pages
│   │   ├── lib/         # Utilities and query client
│   │   └── hooks/       # Custom React hooks
│   └── index.html
├── server/              # Backend Express server
│   ├── index.ts        # Main server entry point
│   ├── routes.ts       # API routes
│   ├── storage.ts      # Storage interface and implementation
│   └── vite.ts         # Vite dev server setup
├── shared/             # Shared types and schemas
│   └── schema.ts       # Drizzle database schemas
└── attached_assets/    # Static assets
```

## Development

### Running the Application
The application is configured to run on port 5000:
```bash
npm run dev
```

This starts:
- Express server on port 5000
- Vite dev server (integrated via middleware)
- Hot module replacement (HMR) enabled

### Environment Setup
- **Port**: 5000 (required for Replit environment)
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **Vite**: Configured with `allowedHosts: true` for Replit iframe compatibility

### Building for Production
```bash
npm run build
npm run start
```

## Features
- Dashboard with statistics and analytics
- User management (Prime/Normal users)
- Mobile & DTH recharge services
- BBPS services (bill payments)
- Wallet management
- Service tracking
- Authentication system
- Theme toggle (dark/light mode)

## Authentication
Default credentials:
- Username: admin
- Password: admin123

## Database
The application uses Drizzle ORM with PostgreSQL. Schema is defined in `shared/schema.ts`:
- `users` - Authentication users
- `dashboard_users` - Dashboard user records
- `bbps_services` - BBPS service transactions

To push schema changes:
```bash
npm run db:push
```

## Application Pages
The dashboard includes comprehensive pages organized by category:

### Analytics
- Revenue Analytics, Transaction Analytics, User Growth, Service Performance, Realtime Metrics

### User Management
- All Users, Prime Users, Active Users, Inactive Users, KYC Pending

### Transaction Monitoring  
- Live Transactions, All Transactions, Failed Transactions, Pending Approvals, Refunds

### Reports
- Daily Reports, Monthly Reports, Service-wise Reports, Commission Reports, Tax Reports

### BBPS Management
- Service Status, Provider Management, BBPS Analytics, Commission Settings

### Financial Overview
- Revenue Dashboard, Settlement Reports, Commission Tracking, Wallet Balances

### System Monitoring
- Server Health, API Performance, Error Logs, System Alerts

### Notifications
- Send Notifications, Push Campaigns, User Alerts, SMS Management

### Security
- Security Dashboard, Fraud Detection, Audit Logs, Compliance Reports

### Configuration
- Service Settings, API Configuration, Payment Gateway, Pricing Management

### Settings
- Admin Users, Roles & Permissions, System Preferences

## Recent Changes (2025-10-04)
- Initial Replit environment setup completed
- Workflow configured for port 5000 with webview output
- Vite configured with `allowedHosts: true` for Replit proxy compatibility
- Deployment configuration set up for autoscale
- Created 40+ pages across all sidebar menu categories with professional designs
- Updated router in App.tsx with all new page routes
- All pages feature responsive tables, modern UI with Radix components, and dark mode support
- Application successfully running with HMR enabled

## Notes
- The project uses in-memory storage by default unless database is provisioned
- Frontend and backend run on the same port (5000) via Vite middleware
- All routes are prefixed with `/api` for backend endpoints
- All pages are protected routes requiring authentication

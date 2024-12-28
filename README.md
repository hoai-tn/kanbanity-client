This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
│
├── components/            # Shared, reusable components
│   ├── Kanban/            # Kanban-specific components
│   │   ├── Board/
│   │   │   ├── Board.tsx         # Main board component
│   │   │   ├── BoardHeader.tsx   # Header with filters and controls
│   │   │   ├── BoardFooter.tsx   # Footer with summaries
│   │   │   └── index.ts          # Barrel file
│   │   ├── Column/
│   │   │   ├── Column.tsx        # Kanban column component
│   │   │   ├── ColumnHeader.tsx  # Column header
│   │   │   ├── ColumnFooter.tsx  # Column footer
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx          # Kanban card
│   │   │   ├── CardDetails.tsx   # Card details modal
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── Docs/              # Document management components
│   │   ├── DocEditor.tsx      # Document editing
│   │   ├── DocViewer.tsx      # Document viewing
│   │   ├── DocList.tsx        # Document listing
│   │   └── index.ts
│   │
│   ├── Timesheets/        # Timesheet management components
│   │   ├── TimesheetTable.tsx # Main timesheet table
│   │   ├── TimesheetEntry.tsx # Entry form for hours
│   │   └── index.ts
│   │
│   ├── UI/                # General reusable components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Modal/
│   │   │   ├── Modal.tsx
│   │   │   └── index.ts
│   │   ├── Dropdown/
│   │   │   ├── Dropdown.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   └── index.ts           # Export all shared components
│
├── layouts/               # Page layouts
│   ├── MainLayout.tsx     # Main app layout
│   ├── KanbanLayout.tsx   # Layout for Kanban pages
│   ├── DocsLayout.tsx     # Layout for document management
│   ├── TimesheetsLayout.tsx # Layout for timesheet pages
│   └── index.ts
│
├── pages/                 # Next.js routes
│   ├── index.tsx          # Dashboard or landing page
│   ├── kanban/
│   │   ├── [id].tsx       # Kanban workspace by ID
│   │   └── index.tsx
│   ├── docs/
│   │   ├── [id].tsx       # Document editor/viewer by ID
│   │   └── index.tsx
│   ├── timesheets/
│   │   ├── index.tsx      # Timesheet overview
│   │   └── entry.tsx      # New timesheet entry form
│   └── ...
│
├── hooks/                 # Custom hooks
│   ├── useKanban.ts       # State and actions for Kanban
│   ├── useDocs.ts         # State and actions for docs
│   ├── useTimesheets.ts   # State and actions for timesheets
│   ├── useAuth.ts         # Authentication logic
│   └── index.ts
│
├── contexts/              # Context providers
│   ├── KanbanContext.tsx  # State management for Kanban
│   ├── DocsContext.tsx    # State management for docs
│   ├── TimesheetsContext.tsx # State management for timesheets
│   └── index.ts
│
├── utils/                 # Utility functions
│   ├── api.ts             # API call wrappers
│   ├── dateUtils.ts       # Utility functions for dates
│   ├── stringUtils.ts     # String manipulation utilities
│   └── index.ts
│
├── styles/                # Shared and scoped styles
│   ├── global.css
│   ├── variables.css
│   ├── Kanban.module.css
│   ├── Docs.module.css
│   ├── Timesheets.module.css
│   └── ...
│
└── types/                 # TypeScript types
    ├── kanban.ts          # Types for Kanban boards, columns, and cards
    ├── docs.ts            # Types for documents
    ├── timesheets.ts      # Types for timesheets
    ├── user.ts            # Types for user data
    └── index.ts

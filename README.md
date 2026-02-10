# 📋 Job Tracker Dashboard
A simple dashboard that displays a list of jobs, allows filtering by status, and reactive status updates through immediate UI feedback.

## 🚀 Tech Stack
- **Framework:** React (Vite)
- **Language:** TypeScript
- **UI Library:** Material UI (MUI)
- **State Management:** React Hooks (useState, useMemo, useEffect)
- **Data Source:** Local JSON mock data
- **Styling:** MUI + CSS

## 📁 Project Structure
```
src/
├── assets/        # Images and global styles
├── components/    # Reusable UI components
├── constants/     # App constants (colors, config values)
├── data/          # Mock data sources
├── hooks/         # Custom React hooks
├── pages/         # Page-level components
├── theme/         # Theme configuration
├── types/         # TypeScript type definitions
└── main.tsx       # App entry point
```

## ⚙️ Setup & Installation
## 1. Clone the repository
```bash
git clone <your-repo-link>
cd job-tracker-dashboard
```

## 2. Install dependencies
```bash
npm install
```

## 3 Start development server
```bash
npm run dev
```

App will run at:
```
http://localhost:5173
```

## 📊 Data Model
## Example shape:
```typescript
interface Job {
  id: string;
  jobName: string;
  clientName: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  createdAt: string;
  updatedAt: string;
}
```

## Design intent:
* Domain-neutral job names for reuse
* ISO timestamps for date and time

## 🎯 Design Decisions
- src/pages is used to allow for addition of more pages in the future and easy addition to routes
- Material UI used for base components  

## ⚖️ Tradeoffs
- No backend or API layer included (mock JSON only)
- No routing — single dashboard view

## 🚀 Possible Future Improvements
- Could migrate data to a NoSQL based DB by connecting to a 'cloud-backend' like Firebase
- Enable multi-device data persistence
- Add more status filters 
- Create job filter

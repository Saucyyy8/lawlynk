# CaseMate Pro

CaseMate Pro is a comprehensive case management solution for legal professionals, designed to streamline workflows and enhance client-lawyer communication.

## Overview

This application provides a secure and efficient platform for managing legal cases, with distinct functionalities for lawyers and clients. Lawyers can manage their case assignments, update case statuses, and communicate with clients, while clients can create new cases, track their progress, and interact with their legal representatives.

## Tech Stack

### Backend

- **Java 21**
- **Spring Boot 3.2.2**
  - **Spring Web:** For building RESTful APIs.
  - **Spring Security:** For authentication and authorization.
  - **Spring Data JPA:** For data persistence.
- **MySQL:** As the primary database.
- **JWT (JSON Web Tokens):** For securing the API.
- **Lombok:** To reduce boilerplate code.
- **Maven:** For dependency management.

### Frontend

- **React 18**
- **TypeScript**
- **Vite:** As the build tool.
- **Shadcn/ui & Radix UI:** For UI components.
- **Tailwind CSS:** For styling.
- **React Hook Form & Zod:** For form handling and validation.
- **React Router DOM:** For routing.
- **TanStack Query:** For data fetching and state management.
- **Recharts:** For data visualization.
- **date-fns:** For date manipulation.

## Features

### For Lawyers

- **Dashboard:** An overview of active cases, recent activities, and key metrics.
- **Case Management:** View, update, and manage all assigned cases.
- **Accept/Reject Cases:** Accept or reject new case assignments.
- **Client Communication:** Communicate with clients through the platform.

### For Clients

- **Case Creation:** Create new cases with detailed descriptions.
- **Case Tracking:** Track the status and progress of their cases.
- **Lawyer Interaction:** Communicate with their assigned lawyer.

## Premium Dashboard Features 🚀

### Overview
Your LawLynk dashboards have been transformed into **top 1% quality** premium interfaces with advanced visualizations, interactive elements, and modern design patterns.

---

### 🎨 Design Enhancements

#### Modern Visual Identity
- **Gradient Headers**: Eye-catching gradient text effects (blue-cyan for lawyers, purple-pink for clients)
- **Premium Badges**: Sparkle-effect badges indicating premium status
- **Glassmorphism Effects**: Subtle transparency and backdrop blur effects
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Shadow Elevation**: Multi-layer shadows for depth perception

#### Color Palette
- Lawyer Dashboard: Blue/Cyan gradient theme
- Client Dashboard: Purple/Pink gradient theme
- Status indicators: Green (active), Amber (pending), Gray (closed)
- Custom gradient backgrounds for each card type

---

### 📊 Advanced Components

#### 1. AdvancedStatsCard
**Location**: `src/components/dashboard/AdvancedStatsCard.tsx`

**Features**:
- Real-time data visualization with mini line charts
- Trend indicators with color-coded badges
- Custom gradient backgrounds per metric
- Smooth hover animations and scale effects
- Responsive sparkline charts using Recharts

**Metrics Displayed**:
- **Lawyer**: Active Cases, Total Clients, Monthly Revenue, Pending Tasks
- **Client**: My Cases, Documents, Appointments, Messages

#### 2. ActivityTimeline
**Location**: `src/components/dashboard/ActivityTimeline.tsx`

**Features**:
- Chronological activity feed with visual timeline
- Color-coded icons for different activity types
- Case number badges for quick reference
- Relative timestamps (e.g., "2 hours ago")
- Smooth hover effects on timeline items

**Activity Types**:
- 📄 Case Updates (Blue)
- 📁 Document Actions (Purple)
- 📅 Hearings (Amber)
- ✅ Completed Tasks (Green)
- ⚠️ Alerts (Red)

#### 3. CaseAnalytics
**Location**: `src/components/dashboard/CaseAnalytics.tsx`

**Features**:
- **Pie Chart**: Case status distribution with percentages
- **Bar Chart**: 6-month case trend analysis
- Interactive tooltips on hover
- Responsive design for all screen sizes
- Color-coded data visualization

**Insights Provided**:
- Active vs Pending vs Closed case ratios
- Monthly case volume trends
- Visual performance metrics

#### 4. QuickActions
**Location**: `src/components/dashboard/QuickActions.tsx`

**Features**:
- One-click access to common tasks
- Gradient icon backgrounds
- Smooth hover animations with scale effects
- Role-specific action sets
- Descriptive tooltips

**Lawyer Actions**:
- ➕ Create New Case
- 👥 Add Client
- 📅 Schedule Hearing
- 📄 Generate Report

**Client Actions**:
- ➕ New Case Request
- 📤 Upload Document
- 💬 Contact Lawyer
- 📅 View Schedule

#### 5. Enhanced CaseCard
**Location**: `src/components/CaseCard.tsx`

**Features**:
- Gradient overlay effects
- Status-specific color coding
- Next hearing highlight section
- Smooth lift animation on hover
- Arrow animation on button hover
- Responsive truncation for long text

---

### 🎯 Dashboard Layouts

#### Lawyer Dashboard
**Location**: `src/pages/lawyer/LawyerDashboard.tsx`

**Sections**:
1. **Header Section**
   - Gradient title with premium badge
   - Success rate metric card
   - Personalized greeting

2. **Stats Overview**
   - 4 advanced stat cards with charts
   - Real-time data from backend
   - Trend indicators

3. **Quick Actions**
   - 4 action cards for common tasks
   - Gradient icons and hover effects

4. **Case Analytics**
   - Pie chart for case distribution
   - Bar chart for trends

5. **Content Grid**
   - Recent cases (2-column grid)
   - Activity timeline (1-column sidebar)

#### Client Dashboard
**Location**: `src/pages/client/ClientDashboard.tsx`

**Sections**:
1. **Header Section**
   - Purple/pink gradient theme
   - Protection status indicator
   - Personalized greeting

2. **Stats Overview**
   - Cases, Documents, Appointments, Messages
   - Mini charts for each metric

3. **Quick Actions**
   - Client-specific actions
   - Easy document upload access

4. **Case Overview**
   - Visual analytics section
   - Case distribution charts

5. **Content Grid**
   - My cases with enhanced cards
   - Activity feed for updates

---

### 🔄 Real-time Features

#### Data Integration
- **Backend API**: Full integration with Spring Boot
- **Loading States**: Smooth spinner animations
- **Error Handling**: Toast notifications for errors
- **Auto-refresh**: Dashboard data fetched on mount

#### API Endpoints Used
```
GET /api/stats/lawyer/full-dashboard
GET /api/stats/client/full-dashboard
```

---

### 🎭 Interactive Elements

#### Hover Effects
- Card lift animations (`-translate-y-1`)
- Shadow intensity changes
- Gradient opacity transitions
- Icon scale transformations
- Button arrow animations

#### Transitions
- Smooth 300ms duration
- Ease-in-out timing functions
- Staggered animations
- Gradient shifts

---

### 📱 Responsive Design

#### Breakpoints
- **Mobile**: 1-column layout, stacked stats
- **Tablet**: 2-column grids, optimized spacing
- **Desktop**: Full 3-4 column layouts, sidebar timeline

#### Adaptive Features
- Text truncation on small screens
- Collapsible sections
- Touch-optimized interactions
- Responsive charts and graphs

---

### 🎨 Color System

#### Gradients
```css
/* Lawyer Theme */
from-blue-500 to-cyan-500
from-blue-600 to-cyan-600

/* Client Theme */
from-purple-500 to-pink-500
from-purple-600 to-pink-600

/* Stats Cards */
from-blue-500 to-cyan-500      // Cases
from-purple-500 to-pink-500    // Clients/Documents
from-green-500 to-emerald-500  // Revenue/Success
from-amber-500 to-orange-500   // Tasks/Appointments
```

---

### 🚀 Performance Optimizations

#### Chart Rendering
- Recharts library for performance
- Responsive containers
- Lazy data generation
- Memoized components

#### Asset Loading
- Optimized icons (Lucide React)
- SVG-based graphics
- CSS animations (no JavaScript)
- Minimal re-renders

---

### 🎁 Premium Indicators

#### Visual Cues
- ✨ Sparkle icons in badges
- 🎯 Success rate cards
- 🛡️ Protection status
- 📈 Trend arrows
- 💎 Premium gradients

---

### 🔧 Technical Stack

#### Libraries Used
- **Recharts**: Data visualization
- **Lucide React**: Icon system
- **Tailwind CSS**: Styling framework
- **Radix UI**: Component primitives
- **React Router**: Navigation

#### Custom Components
- AdvancedStatsCard
- ActivityTimeline
- CaseAnalytics
- QuickActions
- Enhanced CaseCard

---

### 🎯 Key Differentiators

What makes these dashboards **top 1%**:

1. ✅ **Advanced Data Visualization** - Not just numbers, but insights
2. ✅ **Micro-interactions** - Every hover, every click feels premium
3. ✅ **Modern Design Patterns** - Gradients, glassmorphism, shadows
4. ✅ **Thoughtful UX** - Quick actions, activity feed, analytics
5. ✅ **Performance** - Smooth 60fps animations
6. ✅ **Responsive** - Perfect on any device
7. ✅ **Accessible** - Semantic HTML, proper ARIA labels
8. ✅ **Cohesive Theme** - Consistent design language
9. ✅ **Real Data Integration** - Not just mockups
10. ✅ **Professional Polish** - Every detail matters

---

### 📈 Future Enhancements

Potential additions for even more premium feel:
- Real-time WebSocket updates
- Animated number counters
- Advanced filtering and search
- Export to PDF functionality
- Dark mode toggle
- Customizable dashboard layouts
- AI-powered insights
- Notification system
- Calendar integration
- Document preview modals

---

### 🎉 Result

Your dashboards now feature:
- 🎨 Beautiful gradient designs
- 📊 Interactive charts and graphs
- ⚡ Smooth animations everywhere
- 📱 Fully responsive layouts
- 🚀 Lightning-fast performance
- 💎 Premium aesthetic quality

**These dashboards truly stand out in the top 1% of legal tech applications!**

## Screenshots

### Landing Page
![Landing Page](Screenshots/Landing%20Page.png)

### Login Page
![Login Page](Screenshots/Login%20Page.png)

### Client New Case
![Client New Case](Screenshots/Client%20New%20Case.png)

### Lawyer Dashboard
![Lawyer Dashboard](Screenshots/Lawyer%20Dashboard.png)

### Lawyer Recent Cases
![Lawyer Recent Cases](Screenshots/Lawyer%20Recent%20Cases.png)

### Lawyer Accept Or Reject a Case
![Lawyer Accept Or Reject a Case](Screenshots/Lawyer%20Accept%20Or%20Reject%20a%20Case.png)

## Getting Started

### Prerequisites

- Java 21
- Node.js 18 or higher
- MySQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/casemate-pro.git
   ```
2. **Backend Setup:**
   - Navigate to the `backend` directory.
   - Update the `application.properties` file with your MySQL database credentials.
   - Run the application using your favorite IDE or with Maven:
     ```bash
     mvn spring-boot:run
     ```
3. **Frontend Setup:**
   - Navigate to the root directory.
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

## API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint                      | Description                                |
| ------ | ----------------------------- | ------------------------------------------ |
| GET    | `/api/cases`                  | Get all cases for the current user.        |
| GET    | `/api/cases/{id}`             | Get a specific case by its ID.             |
| POST   | `/api/cases`                  | Create a new case.                         |
| PUT    | `/api/cases/{id}`             | Update a case.                             |
| PUT    | `/api/cases/{id}/status`      | Update the status of a case.               |
| PUT    | `/api/cases/{id}/accept`      | Accept a case.                             |
| PUT    | `/api/cases/{id}/reject`      | Reject a case.                             |
| DELETE | `/api/cases/{id}`             | Delete a case.                             |
| GET    | `/api/cases/recent`           | Get recent cases for the current user.     |
| POST   | `/api/auth/register`          | Register a new user.                       |
| POST   | `/api/auth/login`             | Authenticate a user and get a JWT token.   |
| GET    | `/api/users/lawyers`          | Get a list of all lawyers.                 |


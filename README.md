# CaseMate Pro

CaseMate Pro is a comprehensive case management solution for legal professionals, designed to streamline workflows and enhance client-lawyer communication. It provides a secure and efficient platform for managing legal cases, with distinct functionalities for lawyers and clients.

![Lawyer Dashboard](Screenshots/Lawyer%20Dashboard.png)

---

## ✨ Features

### Standard Features
- **Role-Based Access**: Separate, tailored experiences for Lawyers and Clients.
- **Secure Authentication**: JWT-based authentication ensures secure access to the platform.
- **Case Management**:
    - **Clients**: Can create new cases with detailed descriptions and track their status.
    - **Lawyers**: Can view assigned cases, update their status (accept, reject, close), and manage case details.
- **Communication**: Facilitates interaction between clients and their legal representatives.

### 🚀 Premium Dashboard Features
The dashboards have been transformed into premium interfaces with advanced visualizations and a modern design.

- **Modern Visual Identity**:
  - Eye-catching gradient headers and premium badges.
  - Glassmorphism effects with subtle transparency and blurs.
  - Smooth animations, hover effects, and micro-interactions.
- **Advanced Data Components**:
  - **Advanced Stats Cards**: Real-time data visualization with mini line charts and trend indicators.
  - **Activity Timeline**: A chronological feed of case activities with color-coded icons.
  - **Case Analytics**: Interactive Pie and Bar charts for case status distribution and trends.
  - **Quick Actions**: One-click access to common tasks for both lawyers and clients.
- **Real-time & Interactive**:
  - Full integration with the backend API.
  - Smooth loading states and toast notifications for error handling.
  - Rich micro-interactions on hover and click for a premium feel.
- **Fully Responsive Design**:
  - The layout adapts beautifully to mobile, tablet, and desktop screens, ensuring a seamless experience on any device.

---

## 📸 Screenshots

| Landing Page | Login Page |
| :---: | :---: |
| ![Landing Page](Screenshots/Landing%20Page.png) | ![Login Page](Screenshots/Login%20Page.png) |
| **Client: New Case** | **Lawyer: Accept/Reject Case** |
| ![Client New Case](Screenshots/Client%20New%20Case.png) | ![Lawyer Accept Or Reject a Case](Screenshots/Lawyer%20Accept%20Or%20Reject%20a%20Case.png) |
| **Lawyer: Dashboard** | **Lawyer: Recent Cases** |
| ![Lawyer Dashboard](Screenshots/Lawyer%20Dashboard.png) | ![Lawyer Recent Cases](Screenshots/Lawyer%20Recent%20Cases.png) |


---

## 🛠️ Tech Stack

| Area | Technology |
| :--- | :--- |
| **Backend** | Java 21, Spring Boot 3, Spring Security, Spring Data JPA, JWT, Maven |
| **Database** | MySQL |
| **Frontend** | React 18, TypeScript, Vite |
| **UI/Styling** | Shadcn/ui, Radix UI, Tailwind CSS, Recharts |
| **Client State**| TanStack Query, React Router DOM |
| **Forms** | React Hook Form, Zod |

---

## 🚀 Getting Started

### Prerequisites
- Java 21
- Node.js 18 or higher
- MySQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/casemate-pro.git
    ```
2.  **Backend Setup:**
    - Navigate to the `backend` directory.
    - Update the `application.properties` file with your MySQL database credentials.
    - Run the application using your favorite IDE or with Maven:
      ```bash
      mvn spring-boot:run
      ```
3.  **Frontend Setup:**
    - Navigate to the project's root directory.
    - Install the dependencies:
      ```bash
      npm install
      ```
    - Start the development server:
      ```bash
      npm run dev
      ```

---

## 🔌 API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user. |
| POST | `/api/auth/login` | Authenticate a user and get a JWT token. |
| GET | `/api/cases` | Get all cases for the current user. |
| POST | `/api/cases` | Create a new case. |
| GET | `/api/cases/recent` | Get recent cases for the current user. |
| GET | `/api/cases/{id}` | Get a specific case by its ID. |
| PUT | `/api/cases/{id}` | Update a case. |
| DELETE | `/api/cases/{id}` | Delete a case. |
| PUT | `/api/cases/{id}/status` | Update the status of a case. |
| PUT | `/api/cases/{id}/accept` | Accept a case. |
| PUT | `/api/cases/{id}/reject` | Reject a case. |
| GET | `/api/users/lawyers` | Get a list of all lawyers. |
| GET | `/api/stats/lawyer/full-dashboard` | Get all dashboard stats for a lawyer. |
| GET | `/api/stats/client/full-dashboard` | Get all dashboard stats for a client. |

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


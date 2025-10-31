
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Running in the browser
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      return 'http://localhost:8080';
    }
    // TODO: Add your production backend URL here
    return 'https://your-production-backend.com';
  }
  // Running on the server (e.g., during SSR)
  // TODO: Add your production backend URL here
  return 'http://localhost:8080';
};

const baseURL = getBaseUrl();

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Dashboard API Types
export interface CaseData {
  id: string;
  caseNumber: string;
  title: string;
  description?: string;
  status: string;
  clientName: string;
  lawyerName: string;
  nextHearing?: string;
  updatedAt: string;
  createdAt: string;
}

export interface LawyerDashboardData {
  activeCases: number;
  totalClients: number;
  monthlyRevenue: number;
  pendingTasks: number;
  recentCases: CaseData[];
}

export interface ClientDashboardData {
  activeCases: number;
  totalDocuments: number;
  upcomingAppointments: number;
  unreadMessages: number;
  recentCases: CaseData[];
}

// Dashboard API functions
export const dashboardApi = {
  // Get lawyer dashboard data
  getLawyerDashboard: async (): Promise<LawyerDashboardData> => {
    const response = await fetch(`${baseURL}/api/stats/lawyer/full-dashboard`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch lawyer dashboard data');
    }
    return response.json();
  },

  // Get client dashboard data
  getClientDashboard: async (): Promise<ClientDashboardData> => {
    const response = await fetch(`${baseURL}/api/stats/client/full-dashboard`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch client dashboard data');
    }
    return response.json();
  },
};

export const api = {
  baseURL,
};


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

export const api = {
  baseURL: getBaseUrl(),
};

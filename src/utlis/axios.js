import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // e.g., http://127.0.0.1:8000/api
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // ✅ required for Sanctum
});

// Attach token if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Helper: fetch CSRF cookie first
export const getCsrfCookie = () =>
  axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
    withCredentials: true,
  });

export default api;

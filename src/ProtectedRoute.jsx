import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("admin_token");

  if (!token) {
    // Redirect to login if token doesn't exist
    return <Navigate to="/ravi-login" replace />;
  }

  return children;
}

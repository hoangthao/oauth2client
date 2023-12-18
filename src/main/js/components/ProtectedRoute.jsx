import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth.jsx";


const ProtectedRoute = ({ children }) => {
    const { authed } = useAuth();
    if (!authed) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

export default ProtectedRoute;
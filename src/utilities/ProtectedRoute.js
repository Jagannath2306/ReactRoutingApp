import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function ProtectedRoute({ children }) {
  const userRole = "student";
  if (userRole === "admin") {
    return children;
  } else {
    Swal.fire({
      title: "Access Denied",
      text: "Only admin can access this page ...",
      icon: "error",
    });
    return <Navigate to="/home" replace />;
    //   navigate(to, { replace: true })
  }
}

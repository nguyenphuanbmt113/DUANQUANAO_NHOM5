import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { accessToken } = useSelector((state) => state.authReducer);
  return accessToken ? children : <Navigate to="/auth/login" />;
};

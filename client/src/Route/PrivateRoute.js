import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { access_token } = useSelector((state) => state.authReducer);
  return access_token ? children : <Navigate to="login" />;
};

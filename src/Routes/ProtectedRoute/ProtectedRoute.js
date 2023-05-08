import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const ProtectedRoute = ({ children: Component, ...rest }) => {
  const { currentUser } = useContext(UserContext);
  console.log("currentUser", currentUser);
  return currentUser ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;

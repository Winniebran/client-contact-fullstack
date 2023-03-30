import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ClientContext } from "../contexts/ClientContext";

export const ProtectRoutes = () => {
  const { client } = useContext(ClientContext);

  return client ? <Outlet /> : <Navigate to="/" replace />;
};

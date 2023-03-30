import { Route, Routes } from "react-router-dom";

import { NotFound } from "../components/NotFound/NotFound";
import { ContactProvider } from "../contexts/ContactContext";
import { TypeProvider } from "../contexts/TypeContext";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { ProtectRoutes } from "./ProtectRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

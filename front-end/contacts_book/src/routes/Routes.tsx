import { Route, Routes } from "react-router-dom";

import { NotFound } from "../components/NotFound/NotFound";
import { DashboardPage } from "../pages/dashboardPage/dashboardPage";
import { LoginPage } from "../pages/loginPage/loginPage";
import { RegisterPage } from "../pages/registerPage/registerPage";
import { ProtectRoutes } from "./ProtectRoutes";


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route element={<ProtectRoutes />}>
                <Route path="/dashboard" element={<DashboardPage />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}
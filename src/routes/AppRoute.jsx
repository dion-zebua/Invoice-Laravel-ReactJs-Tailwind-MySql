import { Routes, Route } from "react-router-dom";
import React from "react";

import { PrimeReactProvider } from "primereact/api";

import Index from "../pages/dashboard/Index";
import Login from "../pages/auths/Login";
import Profil from "../pages/dashboard/Profil";
import NotFound from "../pages/NotFound";

import UserRoute from "./UserRoute";

import CompanyIndex from "../pages/dashboard/company/Index";
import CompanyAdd from "../pages/dashboard/company/Add";
import CompanyEdit from "../pages/dashboard/company/Edit";
import CompanyRoute from "./CompanyRoute";

export default function AppRoute() {
  return (
    <Routes>
      <Route
        index
        element={<Index />}
      />

      <Route
        path="login"
        element={<Login />}
      />

      <Route
        path="profil"
        element={<Profil />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />

      <Route
        path="user/*"
        element={<UserRoute />}
      />

      <Route
        path="perusahaan/*"
        element={<CompanyRoute />}
      />
    </Routes>
  );
}

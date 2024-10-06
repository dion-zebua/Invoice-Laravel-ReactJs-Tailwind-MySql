import { Routes, Route } from "react-router-dom";
import React, { createContext, useContext } from "react";

import { PrimeReactProvider } from "primereact/api";

import Index from "../pages/dashboard/Index";
import Login from "../pages/auths/Login";
import Profil from "../pages/dashboard/Profil";
import NotFound from "../pages/NotFound";

import UserRoute from "./UserRoute";

import CompanyRoute from "./CompanyRoute";
import ProductRoute from "./ProductRoute";
import InvoiceRoute from "./InvoiceRoute";

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
        path="/dashboard/profil"
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

      <Route
        path="produk/*"
        element={<ProductRoute />}
      />

      <Route
        path="invoice/*"
        element={<InvoiceRoute />}
      />
    </Routes>
  );
}

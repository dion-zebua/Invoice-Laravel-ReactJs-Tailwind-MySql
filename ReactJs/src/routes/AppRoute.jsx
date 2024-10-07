import { Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";

import { PrimeReactProvider } from "primereact/api";

import Index from "../pages/dashboard/Index";
import Login from "../pages/auths/Login";
import Profil from "../pages/dashboard/Profil";
import NotFound from "../pages/NotFound";

import UserRoute from "./UserRoute";

import CompanyRoute from "./CompanyRoute";
import ProductRoute from "./ProductRoute";
import InvoiceRoute from "./InvoiceRoute";
import AuthProvider, { AuthContext } from "../hooks/AuthContext";

export default function AppRoute() {
  const routes = [
    { path: "/", element: <Index />, protected: true },
    { path: "/login", element: <Login /> },
    { path: "/user/profil", element: <Profil />, protected: true },
    { path: "user/*", element: <UserRoute />, protected: true },
    { path: "perusahaan/*", element: <CompanyRoute />, protected: true },
    { path: "produk/*", element: <ProductRoute />, protected: true },
    { path: "invoice/*", element: <InvoiceRoute />, protected: true },
    { path: "*", element: <NotFound /> },
  ];

  const isLogin = useContext(AuthContext);

  return (
    <Routes>
      {routes.map((route, index) => {
        const { path, element, protected: isProtected } = route;

        return (
          <Route
            key={index}
            path={path}
            element={
              isLogin.login ? (
                path == "/login" ? (
                  <Navigate to={"/"} />
                ) : (
                  element
                )
              ) : path != "/login" && path != "*" ? (
                <Navigate to={"/login"} />
              ) : (
                element
              )
            }
          />
        );
      })}
    </Routes>
  );
}

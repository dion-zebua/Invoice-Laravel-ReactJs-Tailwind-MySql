import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./assets/styles/index.css";

import NotFound from "./pages/NotFound";

import Login from "./pages/auths/Login";

import { PrimeReactProvider } from "primereact/api";
import React from "react";
import Index from "./pages/dashboard/Index";
import Profil from "./pages/dashboard/Profil";

import UserIndex from "./pages/dashboard/user/Index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            index
            element={<Index />}
          />
          <Route
            path="profil"
            element={<Profil />}
          />
          <Route
            path="user"
            element={<UserIndex />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);

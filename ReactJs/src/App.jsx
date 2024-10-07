import { BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";

import "./assets/styles/index.css";
import AppRoute from "./routes/AppRoute";
import AuthProvider from "./hooks/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoute />
        </AuthProvider>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);

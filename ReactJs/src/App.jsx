import { BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";

import "./assets/styles/index.css";
import AppRoute from "./routes/AppRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);

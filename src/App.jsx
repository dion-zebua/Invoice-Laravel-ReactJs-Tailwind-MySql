import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./assets/styles/index.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Login from "./pages/auths/Login";

import { PrimeReactProvider } from "primereact/api";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="login"
            element={<Login />}
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

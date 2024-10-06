import { Routes, Route } from "react-router-dom";

import ProductIndex from "../pages/dashboard/product/Index";
import ProductAdd from "../pages/dashboard/product/Add";
import ProductEdit from "../pages/dashboard/product/Edit";
import NotFound from "../pages/NotFound";

export default function ProductRoute() {
  return (
    <Routes>
      <Route
        index
        element={<ProductIndex />}
      />
      <Route
        path="tambah-produk"
        element={<ProductAdd />}
      />
      <Route
        path="edit-produk"
        element={<ProductEdit />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

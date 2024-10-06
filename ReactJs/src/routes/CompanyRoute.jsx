import { Routes, Route } from "react-router-dom";

import CompanyIndex from "../pages/dashboard/company/Index";
import CompanyAdd from "../pages/dashboard/company/Add";
import CompanyEdit from "../pages/dashboard/company/Edit";
import NotFound from "../pages/NotFound";

export default function CompanyRoute() {
  return (
    <Routes>
      <Route
        index
        element={<CompanyIndex />}
      />
      <Route
        path="tambah-perusahaan"
        element={<CompanyAdd />}
      />
      <Route
        path="edit-perusahaan"
        element={<CompanyEdit />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";

import InvoiceIndex from "../pages/dashboard/invoice/Index";
import InvoiceAdd from "../pages/dashboard/invoice/Add";
import NotFound from "../pages/NotFound";

export default function InvoiceRoute() {
  return (
    <Routes>
      <Route
        index
        element={<InvoiceIndex />}
      />
      <Route
        path="tambah-invoice"
        element={<InvoiceAdd />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

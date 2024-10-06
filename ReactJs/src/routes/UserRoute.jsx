import { Routes, Route } from "react-router-dom";

import UserIndex from "../pages/dashboard/user/Index";
import UserAdd from "../pages/dashboard/user/Add";
import UserEdit from "../pages/dashboard/user/Edit";
import NotFound from "../pages/NotFound";

export default function UserRoute() {
  return (
    <Routes>
      <Route
        index
        element={<UserIndex />}
      />
      <Route
        path="tambah-pengguna"
        element={<UserAdd />}
      />
      <Route
        path="edit-pengguna"
        element={<UserEdit />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

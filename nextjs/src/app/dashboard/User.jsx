"use client";
import Box from "@/components/other/Box";
import DataTable from "@/components/other/Table/DataTable";
import { CheckCircle, XCircle } from "@deemlol/next-icons";
import React from "react";

export default function User() {
  const column = [
    { key: "name", header: "Perusahaan", className: "min-w-36" },
    { key: "telephone", header: "Telephone" },
    {
      key: "is_verified",
      header: "Status",
      cell: function ({ data }) {
        return data ? (
          <CheckCircle
            className="stroke-emerald-500"
            size={15}
          />
        ) : (
          <XCircle
            className="stroke-rose-500"
            size={15}
          />
        );
      },
    },
  ];

  const defaultParams = {
    page: 1,
    perPage: 5,
    role: "user",
    orderBy: "id",
    orderDirection: "desc", // asc=oldest
  };

  return (
    <Box
      title="User Terbaru"
      className="col-span-full h-80">
      <DataTable
        column={column}
        path="pengguna"
        model="user"
        defaultParams={defaultParams}
        searchColumn={["name", "sales"]}
      />
    </Box>
  );
}

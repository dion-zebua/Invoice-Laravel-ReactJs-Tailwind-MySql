"use client";
import DataTable from "@/components/other/DataTable";
import React from "react";

export default function IndexTable(props) {
  const { data, message, path, model, params } = props;
  const column = [
    { key: "id", header: "No", sortable: true },
    { key: "name", header: "Nama", sortable: true },
    { key: "sales", header: "Sales", sortable: true },
    { key: "telephone", header: "Telephone" },
    {
      key: "role",
      header: "Role",
      selector: true,
      cell: function ({ data }) {
        return (
          <div
            className={`font-medium border-2 text-slate-100 inline px-1 rounded-sm ${
              data == "user"
                ? "bg-amber-700 border-amber-500"
                : "bg-teal-700 border-teal-500"
            }`}>
            {data}
          </div>
        );
      },
    },
    { key: "is_verified", header: "Status", selector: true },
    { key: "invoice_count", header: "Jumlah Invoice", sortable: true },
    { header: "Action", action: { edit: true, delete: true } },
  ];

  return (
    <DataTable
      params={params}
      data={data}
      message={message}
      column={column}
      path={path}
      model={model}
    />
  );
}

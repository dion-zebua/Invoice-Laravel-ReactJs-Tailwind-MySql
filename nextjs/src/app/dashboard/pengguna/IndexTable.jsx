"use client";
import DataTable from "@/components/other/DataTable";
import fetch from "@/lib/fetch";
import React, { useEffect, useState } from "react";

export default function IndexTable(props) {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoadingAction, setIsLoadingAction] = useState(false);
  const [params, setParams] = useState({
    perPage: 5,
    verified: null,
    search: null,
    role: null,
    orderBy: "id",
    orderDirection: "asc",
  });

  useEffect(() => {
    setIsLoadingData(true);
    fetch
      .get("user/", { params: params })
      .then((res) => setData(res.data.data))
      .catch((err) => setMessage(err.response.data.message ?? err.message))
      .finally(() => {
        setIsLoadingData(false);
      });
  }, [params]);

  const column = [
    { key: "id", header: "No", sortable: true },
    { key: "name", header: "Nama", sortable: true, className: "min-w-36" },
    { key: "sales", header: "Sales", sortable: true },
    { key: "telephone", header: "Telephone" },
    {
      key: "role",
      header: "Role",
      selector: true,
      cell: function ({ data }) {
        return (
          <div
            className={`inline-block font-medium border-2 text-slate-100 px-1 rounded-sm ${
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
    { key: "invoice_count", header: "Invoice", sortable: true },
    { header: "Action", action: { edit: true, delete: true } },
  ];

  return (
    <DataTable
      params={params}
      data={data}
      message={message}
      column={column}
      path="pengguna"
      model="user"
      isLoadingData={isLoadingData}
    />
  );
}

"use client";
import Box from "@/components/other/Box";
import DataTable from "@/components/other/Table/DataTable";
import { CheckCircle, XCircle } from "@deemlol/next-icons";
import React from "react";

export default function Invoice() {
  const column = [
    {
      key: "code",
      header: "Kode",
      cell: function ({ data }) {
        return `#${data}`;
      },
    },
    {
      key: "user",
      header: "Perusahaan Penjual",
      cell: function ({ data }) {
        return data?.name;
      },
      role: "admin",
    },
    { key: "to_name", header: "Perusahan Pembeli" },
    {
      key: "to_telephone",
      header: "Telp Pembeli",
    },
    {
      key: "status",
      header: "Status",
      cell: function ({ data }) {
        return (
          <div className="flex items-center gap-x-2 whitespace-nowrap">
            {data == "paid" ? (
              <>
                <CheckCircle
                  className="stroke-emerald-500"
                  size={15}
                />{" "}
                Lunas
              </>
            ) : (
              <>
                <XCircle
                  className="stroke-rose-500"
                  size={15}
                />{" "}
                Belum Lunas
              </>
            )}
          </div>
        );
      },
    },
  ];

  const defaultParams = {
    page: 1,
    perPage: 5,
    orderBy: "id",
    orderDirection: "desc", // asc=oldest
  };

  return (
    <Box
      title="Invoice Terbaru"
      className="col-span-full h-80">
      <DataTable
        column={column}
        path="invoice"
        model="invoice"
        defaultParams={defaultParams}
        searchColumn={["name", "sales"]}
      />
    </Box>
  );
}

"use client";
import DataTable from "@/components/other/Table/DataTable";
import { CheckCircle, XCircle } from "@deemlol/next-icons";
import Link from "next/link";

export default function IndexTable(props) {
  const column = [
    { key: "id", header: "No", sortable: true },
    {
      key: "code",
      header: "Kode",
      sortable: true,
      cell: function ({ data }) {
        return `#${data}`;
      },
    },
    {
      key: "user",
      header: "Perusahaan Penjual",
      sortable: true,
      cell: function ({ data }) {
        return (
          <Link
            className="underline"
            href={`./pengguna/${data?.id}`}>
            {data?.name}
          </Link>
        );
      },
      role: "admin",
    },
    { key: "to_name", header: "Perusahan Pembeli", sortable: true },
    {
      key: "to_telephone",
      header: "Telp Pembeli",
      cell: function ({ data }) {
        return (
          <Link
            className="underline"
            target="_blank"
            href={`tel:${data}`}>
            {data}
          </Link>
        );
      },
    },
    {
      key: "to_email",
      header: "Email Pembeli",
      cell: function ({ data }) {
        return (
          <Link
            className="underline"
            target="_blank"
            href={`mailto:${data}`}>
            {data}
          </Link>
        );
      },
    },
    {
      key: "status",
      header: "Status",
      selector: true,
      selectorItem: [
        { key: null, label: "semua" },
        { key: "paid", label: "Lunas" },
        { key: "unpaid", label: "Belum Lunas" },
      ],
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
    {
      key: "grand_total",
      header: "Total",
      sortable: true,
      cell: function ({ data }) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(data);
      },
    },
    { header: true, action: { edit: true, delete: true } },
  ];

  const defaultParams = {
    page: 1,
    perPage: 5,
    status: null,
    search: null,
    orderBy: "id",
    orderDirection: "desc", // asc=oldest
  };

  return (
    <DataTable
      column={column}
      path="invoice"
      model="invoice"
      defaultParams={defaultParams}
      searchColumn={[
        "kode",
        "perusahaan penjual",
        "perusahaan pembeli",
        "email pembeli",
      ]}
    />
  );
}

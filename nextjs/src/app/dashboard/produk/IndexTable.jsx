"use client";
import DataTable from "@/components/other/Table/DataTable";
import Link from "next/link";

export default function IndexTable(props) {
  const column = [
    { key: "id", header: "No", sortable: true },
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
    { key: "name", header: "Nama", sortable: true, className: "min-w-36" },
    { key: "unit", header: "Unit", sortable: true },
    {
      key: "price",
      header: "Price",
      cell: function ({ data }) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(data);
      },
      sortable: true,
    },
    { header: true, action: { edit: true, delete: true } },
  ];

  const defaultParams = {
    page: 1,
    perPage: 5,
    search: null,
    orderBy: "id",
    orderDirection: "desc", // asc=oldest
  };

  return (
    <DataTable
      column={column}
      path="produk"
      model="product"
      defaultParams={defaultParams}
      searchColumn={["name", "unit", "harga"]}
    />
  );
}

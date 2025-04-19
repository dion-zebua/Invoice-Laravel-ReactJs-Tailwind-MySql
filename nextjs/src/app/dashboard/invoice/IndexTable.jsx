"use client";
import DataTable from "@/components/other/Table/DataTable";

export default function IndexTable(props) {
  const column = [
    { key: "id", header: "No", sortable: true },
    { key: "name", header: "Nama", sortable: true, className: "min-w-36" },
    { key: "unit", header: "Unit", sortable: true },
    { key: "price", header: "Price", sortable: true },
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
    />
  );
}

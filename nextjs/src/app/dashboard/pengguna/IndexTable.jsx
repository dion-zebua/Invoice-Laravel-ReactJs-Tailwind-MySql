"use client";
import DataTable from "@/components/other/Table/DataTable";

export default function IndexTable(props) {
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
                ? "bg-violet-700 border-violet-200"
                : "bg-teal-700 border-teal-200"
            }`}>
            {data}
          </div>
        );
      },
    },
    { key: "is_verified", header: "Status", selector: true },
    { key: "invoice_count", header: "Invoice", sortable: true },
    { header: true, action: { edit: true, delete: true } },
  ];

  const defaultParams = {
    page: 1,
    perPage: 5,
    verified: null,
    search: null,
    role: null,
    orderBy: "id",
    orderDirection: "desc", // asc=oldest
  };

  return (
    <DataTable
      column={column}
      path="pengguna"
      model="user"
      defaultParams={defaultParams}
    />
  );
}

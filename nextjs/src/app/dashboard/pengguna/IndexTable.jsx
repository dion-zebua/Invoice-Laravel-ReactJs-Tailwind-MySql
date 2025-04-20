"use client";
import DataTable from "@/components/other/Table/DataTable";
import { CheckCircle, XCircle } from "@deemlol/next-icons";

export default function IndexTable(props) {
  const column = [
    { key: "id", header: "No", sortable: true },
    {
      key: "name",
      header: "Perusahaan",
      sortable: true,
      className: "min-w-36",
    },
    { key: "sales", header: "Sales", sortable: true },
    {
      key: "role",
      header: "Role",
      selector: true,
      selectorItem: [
        { key: null, label: "semua" },
        { key: "admin", label: "admin" },
        { key: "user", label: "user" },
      ],
      cell: function ({ data }) {
        return (
          <div
            className={`inline-block font-medium border-2 text-slate-100 px-1 rounded-sm ${
              data?.role == "user"
                ? "bg-violet-700 border-violet-200"
                : "bg-teal-700 border-teal-200"
            }`}>
            {data?.role}
          </div>
        );
      },
    },
    { key: "telephone", header: "Telephone" },
    {
      key: "is_verified",
      header: "Status",
      selector: true,
      selectorItem: [
        { key: null, label: "semua" },
        { key: 1, label: "terverifikasi" },
        { key: 0, label: "tidak terverifikasi" },
      ],
      cell: function ({ data }) {
        return (
          <div className="flex items-center gap-x-2 whitespace-nowrap">
            {data?.is_verified ? (
              <>
                <CheckCircle
                  className="stroke-emerald-500"
                  size={15}
                />
                <span className="line-clamp-1 block text-ellipsis">
                  Terverifikasi
                </span>
              </>
            ) : (
              <>
                <XCircle
                  className="stroke-rose-500"
                  size={15}
                />
                <span className="line-clamp-1 block text-ellipsis">
                  Tidak terverifikasi
                </span>
              </>
            )}
          </div>
        );
      },
    },
    // { key: "invoice_count", header: "Invoice", sortable: true },
    { header: true, action: { edit: true, delete: true } },
  ];

  const defaultParams = {
    page: 1,
    perPage: 5,
    is_verified: null,
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
      searchColumn={["name", "sales"]}
      header={true}
      footer={true}
    />
  );
}

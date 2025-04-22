"use client";
import DataTable from "@/components/other/Table/DataTable";
import { Button } from "@/components/ui/button";
import { useSession } from "@/context/SessionContext";
import { CheckCircle, Download, Edit, Eye, XCircle } from "@deemlol/next-icons";
import Link from "next/link";

export default function IndexTable(props) {
  const user = useSession();
  const column = [
    { key: "id", header: "No", sortable: true },
    {
      key: "code",
      header: "Kode",
      sortable: true,
      cell: function ({ data }) {
        return `#${data.code}`;
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
            href={`./pengguna/${data?.user?.id}`}>
            {data?.user?.name}
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
            href={`tel:${data.to_telephone}`}>
            {data.to_telephone}
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
            href={`mailto:${data.to_email}`}>
            {data.to_email}
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
            {data?.status == "paid" ? (
              <>
                <CheckCircle
                  size={15}
                  className="stroke-emerald-500"
                />
                <span className="line-clamp-1 block text-ellipsis">Lunas</span>
              </>
            ) : (
              <>
                <XCircle
                  size={15}
                  className="stroke-rose-500"
                />
                <span className="line-clamp-1 block text-ellipsis">
                  Belum Lunas
                </span>
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
        }).format(data?.grand_total);
      },
    },
    {
      key: "code",
      header: "",
      cell: function ({ data }) {
        return (
          <div className="flex gap-x-2 [&_button]:rounded-sm [&_button]:!p-[3px] [&_button]:h-auto [&_button]:border-2 [&_button]:text-red-50 [&_svg]:!w-3.5 [&_svg]:!h-3.5">
            <Button
              onClick={() => {
                window.open(
                  `${process.env.NEXT_PUBLIC_APP_URL_BACKEND}invoice/${data.id}/${data.code}/download/`
                );
              }}
              variant="destructive"
              className="border-emerald-200 hover:bg-emerald-500 bg-emerald-700">
              <Download />
            </Button>
            <Link
              target="_blank"
              href={`/invoice/${data.id}/${data.code}/`}>
              <Button
                variant="destructive"
                className="border-cyan-200 hover:bg-cyan-500 bg-cyan-700">
                <Eye />
              </Button>
            </Link>
            {user?.role == "user" && data?.status == "unpaid" && (
              <Link
                target="_blank"
                href={`./invoice/edit/${data.id}/${data.code}/`}>
                <Button
                  variant="destructive"
                  className="border-yellow-200 hover:bg-yellow-500 bg-yellow-700">
                  <Edit />
                </Button>
              </Link>
            )}
          </div>
        );
      },
    },
    { header: true, action: { delete: true } },
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
      header={true}
      footer={true}
    />
  );
}

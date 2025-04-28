"use client";

import Action from "@/components/other/Table/Action";
import DataNotFound from "@/components/other/Table/DataNotFound";
import Footer from "@/components/other/Table/Footer";
import Header from "@/components/other/Table/Header";
import SkeletonTable from "@/components/other/Table/SkeletonTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import fetch from "@/lib/fetch";
import {
  CheckCircle,
  Download,
  Edit,
  Eye,
  Trash,
  XCircle,
} from "@deemlol/next-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import error from "@/lib/error";
import { toast } from "sonner";
import Sortable from "@/components/other/Table/Sortable";
import Selector from "@/components/other/Table/Selector";
import { useSession } from "@/context/SessionContext";

export default function IndexTable() {
  const user = useSession();
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);

  const [params, setParams] = useState({
    page: 1,
    perPage: 5,
    search: null,
    orderBy: "id",
    orderDirection: "desc", // asc=oldest
  });

  useEffect(() => {
    setIsLoadingData(true);
    fetch
      .get("invoice/", { params: params })
      .then((res) => setData(res.data.data))
      .catch((err) => {
        setData(null);
        let newMessage = err.response.data.message ?? err.message;
        if (newMessage && typeof newMessage == "object") {
          const messageFlat = Object.values(newMessage).flat();
          setMessage(
            <ul className="">
              {messageFlat.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          );
        } else {
          setMessage(newMessage);
        }
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  }, [params]);

  const handleDelete = (e, col) => {
    e.preventDefault();
    toast.info("Sedang menghapus...");
    setIsLoadingData(true);
    fetch
      .delete(`invoice/${col?.id}/`)
      .then((response) => {
        setParams((prevData) => ({
          ...prevData,
          timeStamp: Date.now(),
        }));
        toast.success(response.data.message);
      })
      .catch((err) => {
        error(err);
      })
      .finally(() => setIsLoadingData(false));
  };

  return (
    <>
      <Header
        isLoadingData={isLoadingData}
        params={params}
        setParams={setParams}
        searchColumn={`kode, ${
          user?.role == "admin" ? "perusahaan penjual, " : ""
        }perusahaan pembeli`}
      />

      <Table className="table-auto">
        <TableHeader>
          <TableRow className="bg-white hover:bg-white">
            <TableHead>
              <Sortable
                isLoadingData={isLoadingData}
                params={params}
                column="id"
                setParams={setParams}>
                No
              </Sortable>
            </TableHead>
            <TableHead>
              <Sortable
                isLoadingData={isLoadingData}
                params={params}
                column="code"
                setParams={setParams}>
                Kode
              </Sortable>
            </TableHead>
            {user?.role == "admin" && (
              <TableHead>
                <Sortable
                  isLoadingData={isLoadingData}
                  params={params}
                  column="name"
                  setParams={setParams}>
                  Perusahaan Penjual
                </Sortable>
              </TableHead>
            )}
            <TableHead>
              <Sortable
                isLoadingData={isLoadingData}
                params={params}
                column="to_name"
                setParams={setParams}>
                Perusahaan Pembeli
              </Sortable>
            </TableHead>
            <TableHead>
              <Selector
                isLoadingData={isLoadingData}
                params={params}
                column="status"
                setParams={setParams}
                item={[
                  { key: null, label: "semua" },
                  { key: "paid", label: "lunas" },
                  { key: "unpaid", label: "belum lunas" },
                ]}>
                Status
              </Selector>
            </TableHead>
            <TableHead>
              <Sortable
                isLoadingData={isLoadingData}
                params={params}
                column="grand_total"
                setParams={setParams}>
                Biaya
              </Sortable>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* Skelaton */}
          {isLoadingData && (
            <SkeletonTable
              column={user?.role == "user" ? 5 : 6}
              params={params}
            />
          )}

          {/* Data */}
          {!isLoadingData &&
            data?.data &&
            data?.data.length > 0 &&
            data?.data.map((col, i) => (
              <TableRow key={i}>
                <TableCell>{i + data?.from}</TableCell>
                <TableCell>{"#" + col["code"] ?? "-"}</TableCell>
                {user?.role == "admin" && (
                  <TableCell>
                    <Link
                      className="underline"
                      href={`./pengguna/edit/${col?.user?.id}`}>
                      {col?.user?.name}
                    </Link>
                  </TableCell>
                )}
                <TableCell>{col?.to_name ?? "-"}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-x-2 whitespace-nowrap">
                    {col?.status == "paid" ? (
                      <>
                        <CheckCircle
                          className="stroke-emerald-500"
                          size={15}
                        />
                        <span className="line-clamp-1 block text-ellipsis">
                          Lunas
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle
                          className="stroke-rose-500"
                          size={15}
                        />
                        <span className="line-clamp-1 block text-ellipsis">
                          Belum lunas
                        </span>
                      </>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(col?.grand_total ?? 0)}
                </TableCell>
                <TableCell>
                  <Action>
                    {/* Download */}
                    <Link
                      target="_blank"
                      // download
                      href={`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}invoice/${col?.id}/${col?.code}/download/`}
                      className="block border-teal-200 hover:bg-teal-500 bg-teal-700 p-1">
                      <Download />
                    </Link>

                    {/* Lihat */}
                    <Link
                      target="_blank"
                      href={`/invoice/${col?.id}/${col?.code}`}
                      className="block border-cyan-200 hover:bg-cyan-500 bg-cyan-700 p-1">
                      <Eye />
                    </Link>

                    {/* Delete */}
                    <AlertDialog>
                      <AlertDialogTrigger
                        variant="destructive"
                        className="border-rose-200 hover:bg-rose-500 bg-rose-700">
                        <Trash />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Anda yakin hapus?</AlertDialogTitle>
                          <AlertDialogDescription></AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Tidak</AlertDialogCancel>
                          <form onSubmit={(e) => handleDelete(e, col)}>
                            <AlertDialogAction type="submit">
                              Ya
                            </AlertDialogAction>
                          </form>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </Action>
                </TableCell>
              </TableRow>
            ))}

          {/* Not Found */}
          {!isLoadingData && !data?.data && (
            <DataNotFound
              column={7}
              message={message}
            />
          )}
        </TableBody>
      </Table>

      <Footer
        setParams={setParams}
        data={data}
      />
    </>
  );
}

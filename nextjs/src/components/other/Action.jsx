import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Edit, Eye, Trash } from "@deemlol/next-icons";
import fetch from "@/lib/fetch";
import { toast } from "sonner";
import error from "@/lib/error";
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

export default function Action(props) {
  const { path, model, id, action, setIsLoadingData, setParams } = props;

  const Delete = () => {
    const handleSubmit = (e) => {
      e.preventDefault();

      setIsLoadingData(true);
      fetch
        .delete(`${model}/${id}/`)
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
            <form onSubmit={handleSubmit}>
              <AlertDialogAction type="submit">Ya</AlertDialogAction>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  return (
    <div className="flex gap-x-2 [&_button]:rounded-sm [&_button]:!p-[3px] [&_button]:h-auto [&_button]:border-2 [&_button]:text-red-50 [&_svg]:!w-3.5 [&_svg]:!h-3.5">
      {action?.edit && (
        <Link href={`${path}/edit/${id}`}>
          <Button
            variant="destructive"
            className="border-yellow-200 hover:bg-yellow-500 bg-yellow-700">
            <Edit />
          </Button>
        </Link>
      )}

      {action?.edit && <Delete />}
    </div>
  );
}

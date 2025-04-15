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
  const { path, model, id, action } = props;

  const Delete = () => {
    const handleSubmit = (e) => {
      e.preventDefault();

      fetch
        .delete(`${model}/${id}/`)
        .then((response) => {
          toast.success(response.data.message);
        })
        .catch((err) => {
          error(err);
        });
    };

    return (
      <AlertDialog>
        <AlertDialogTrigger
          variant="destructive"
          className="border-rose-500 hover:bg-rose-500 bg-rose-700">
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
    <div className="flex gap-x-2 [&_button]:rounded-sm [&_button]:!p-[3px] [&_button]:h-auto [&_button]:border-2 [&_button]:text-red-50 [&_svg]:!w-3 [&_svg]:!h-3">
      {action?.show && (
        <Link href={`${path}/${id}`}>
          <Button
            variant="destructive"
            className="border-emerald-500 hover:bg-emerald-500 bg-emerald-700">
            <Eye />
          </Button>
        </Link>
      )}

      {action?.edit && (
        <Link href={`${path}/edit/${id}`}>
          <Button
            variant="destructive"
            className="border-yellow-500 hover:bg-yellow-500 bg-yellow-700">
            <Edit />
          </Button>
        </Link>
      )}

      {action?.edit && <Delete />}
    </div>
  );
}

"use client";

import error from "@/lib/error";
import fetch from "@/lib/fetch";
import { logout } from "@/lib/session";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
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

export default function Logout() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch
      .post("logout/")
      .then((response) => {
        toast.success(response.data.message);
        logout();
        router.push("/login");
      })
      .catch((err) => {
        if (err.status == 401) {
          logout();
          toast.success("Berhasil logout.");
          redirect("/login");
        } else {
          error(err);
        }
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>Logout</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Anda yakin logout?</AlertDialogTitle>
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
}

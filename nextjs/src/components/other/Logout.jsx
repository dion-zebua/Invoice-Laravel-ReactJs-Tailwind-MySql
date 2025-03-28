"use client";

import error from "@/lib/error";
import fetch from "@/lib/fetch";
import { logout } from "@/lib/session";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

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
        console.log(err);
        if (err.status == 401) {
          logout();
          redirect("/login");
          toast.success("Berhasil logout.");
        } else {
          error(err);
        }
      });
  };

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit}>
      <button
        type="submit"
        className="w-full text-left">
        Logout
      </button>
    </form>
  );
}

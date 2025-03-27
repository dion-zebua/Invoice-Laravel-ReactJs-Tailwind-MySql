"use client";

import error from "@/lib/error";
import fetch from "@/lib/fetch";
import { logout } from "@/lib/session";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function Logout() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch
      .post("logout/")
      .then((response) => {
        const timeout = setTimeout(() => {
          logout();
          toast.success(response.data.message);
          router.push("/login");
        }, 100);
      })
      .catch((err) => {
        error(err);
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

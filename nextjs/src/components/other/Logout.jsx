"use client";

import error from "@/lib/error";
import fetch from "@/lib/fetch";
import { logout } from "@/lib/session";
import React from "react";
import { toast } from "sonner";

export default function Logout() {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.warning("Sedang logout...");

    fetch
      .post("logout/")
      .then((response) => {
        toast.success(response.data.message);
        logout();
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

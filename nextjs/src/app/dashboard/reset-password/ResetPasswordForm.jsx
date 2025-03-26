"use client";
import FormDasboard from "@/components/other/FormDasboard";
import InputPassword from "@/components/other/InputPassword";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function ResetPasswordForm({ pageTitle }) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    fetch
      .post(`user/reset-password/`, data)
      .then((response) => {
        toast.success(
          response.data.message +
            " Redirect otomatis ke halaman login dalam 5 detik!"
        );
        const timeout = setTimeout(() => {
          router.push("/login");
        }, 5000);
      })
      .catch((err) => {
        error(err);
      })
      .finally(() => {
        setLoadingSubmit(false);
      });
  };

  return (
    <FormDasboard
      pageTitle={pageTitle}
      onSubmit={handleSubmit}>
      <div className="sm:!col-span-6">
        <Label htmlFor="password">Password</Label>
        <InputPassword id="password" />
      </div>
      <div className="sm:!col-span-6">
        <Label htmlFor="password-confirmation">Konfirmasi Password</Label>
        <InputPassword id="password-confirmation" />
      </div>
    </FormDasboard>
  );
}

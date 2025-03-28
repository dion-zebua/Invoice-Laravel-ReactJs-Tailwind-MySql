"use client";
import Box from "@/components/other/Box";
import FormDasboard from "@/components/other/FormDasboard";
import InputPassword from "@/components/other/InputPassword";
import { Label } from "@/components/ui/label";
import error from "@/lib/error";
import fetch from "@/lib/fetch";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ResetPasswordForm({ pageTitle }) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    fetch
      .post(`user/reset-password/`, data)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((err) => {
        error(err);
      })
      .finally(() => {
        setLoadingSubmit(false);
      });
  };

  return (
    <Box
      title={pageTitle}
      className="col-span-full">
      <FormDasboard
        pageTitle={pageTitle}
        loadingSubmit={loadingSubmit}
        onSubmit={handleSubmit}>
        <div className="sm:!col-span-6">
          <Label htmlFor="password">Password</Label>
          <InputPassword
            onChange={handleChange}
            id="password"
          />
        </div>
        <div className="sm:!col-span-6">
          <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
          <InputPassword
            onChange={handleChange}
            id="password_confirmation"
          />
        </div>
      </FormDasboard>
    </Box>
  );
}

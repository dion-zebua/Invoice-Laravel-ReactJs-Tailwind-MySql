"use client";
import React, { useState } from "react";
import FormLandingPage from "@/components/other/FormLandingPage";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LinkLabel from "@/components/other/LinkLabel";
import { toast } from "sonner";
import fetch from "@/lib/fetch";
import Spin from "@/components/other/Spin";
import error from "@/lib/error";
import InputPassword from "@/components/other/InputPassword";
import { useParams, useRouter } from "next/navigation";
import ButtonSubmit from "@/components/other/ButtonSubmit";

export default function ResetPasswordForm({ pageTitle }) {
  const router = useRouter();
  const params = useParams();
  const { id, token } = params;
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
      .post(`reset-password/${id}/${token}/`, data)
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
    <FormLandingPage
      pageTitle={pageTitle}
      onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <InputPassword onChange={handleChange} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password-confirmation">Password</Label>
        <InputPassword
          onChange={handleChange}
          id="password_confirmation"
        />
      </div>
      <ButtonSubmit
        label={pageTitle}
        className="!w-full"
        loadingSubmit={loadingSubmit}
      />
      <LinkLabel
        href="/login"
        text="Sudah reset?"
      />
    </FormLandingPage>
  );
}

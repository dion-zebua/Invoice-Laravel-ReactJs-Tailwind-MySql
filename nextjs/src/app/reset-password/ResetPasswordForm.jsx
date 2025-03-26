"use client";
import React, { useState } from "react";
import FormLandingPage from "@/components/other/FormLandingPage";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LinkLabel from "@/components/other/LinkLabel";
import fetch from "@/lib/fetch";
import { toast } from "sonner";
import error from "@/lib/error";
import { Input } from "@/components/ui/input";
import Spin from "@/components/other/Spin";
import ButtonSubmit from "@/components/other/ButtonSubmit";

export default function ResetPasswordForm({ pageTitle }) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({ email: "" });

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
      .post("send-forgot-password/", data)
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
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          name="email"
          onChange={handleChange}
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

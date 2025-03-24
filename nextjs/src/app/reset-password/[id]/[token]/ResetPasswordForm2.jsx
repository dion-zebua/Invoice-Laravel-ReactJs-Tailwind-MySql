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

export default function ResetPasswordForm2({ pageTitle }) {
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
        toast.success(
          response.data.message + " Redirect otomatis ke halaman login dalam 5 detik!"
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
    <FormLandingPage
      page={pageTitle}
      onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <LinkLabel
            href="/reset-password"
            text="Lupa password?"
          />
        </div>
        <InputPassword onChange={handleChange} />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password-confirmation">Password</Label>
          <LinkLabel
            href="/reset-password"
            text="Lupa password?"
          />
        </div>
        <InputPassword
          onChange={handleChange}
          id="password_confirmation"
        />
      </div>
      <Button
        type="submit"
        className="w-full">
        {loadingSubmit && <Spin />}
        {pageTitle}
      </Button>
      <LinkLabel
        href="/login"
        text="Sudah verifikasi?"
      />
    </FormLandingPage>
  );
}

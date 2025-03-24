"use client";
import React, { useState } from "react";
import FormLandingPage from "@/components/other/FormLandingPage";
import Link from "next/link";
import { UserPlus } from "@deemlol/next-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputPassword from "@/components/other/InputPassword";
import { Button } from "@/components/ui/button";
import LinkLabel from "@/components/other/LinkLabel";
import fetch from "@/lib/fetch";
import Spin from "@/components/other/Spin";
import { toast } from "sonner";
import error from "@/lib/error";

export default function LoginForm({ pageTitle }) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingSubmit(true);
    fetch
      .post("login/", {
        email: "zebuadbless@gmail.com",
        password: "Password",
      })
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
      page={pageTitle}
      onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="email">Email</Label>
          <LinkLabel
            href="/verifikasi-email"
            text="Lupa verifikasi?"
          />
        </div>
        <Input
          id="email"
          type="email"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <LinkLabel
            href="/reset-password"
            text="Lupa password?"
          />
        </div>
        <InputPassword />
      </div>
      <Button
        type="submit"
        className="w-full">
        {loadingSubmit && <Spin />}
        {pageTitle}
      </Button>
      <div className="-z-1 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          atau
        </span>
      </div>
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=6288289317870&text=Saya+ingin+daftar+https://invoices.my.id">
        <Button
          className="w-full lg:!px-5"
          variant="outline">
          <UserPlus /> Daftar
        </Button>
      </Link>
    </FormLandingPage>
  );
}

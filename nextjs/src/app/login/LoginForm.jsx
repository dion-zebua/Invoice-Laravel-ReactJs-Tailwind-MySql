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
import { toast } from "sonner";
import error from "@/lib/error";
import ButtonSubmit from "@/components/other/ButtonSubmit";
import { login } from "@/lib/session";
import { useRouter } from "next/navigation";

export default function LoginForm({ pageTitle }) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoadingSubmit(true);
    fetch
      .post("login/", data)
      .then((response) => {
        login(response.data.data);
        toast.success(response.data.message);
        router.push("/dashboard");
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
        <div className="flex items-center">
          <Label htmlFor="email">Email</Label>
          <LinkLabel
            href="/verifikasi-email"
            text="Lupa verifikasi?"
          />
        </div>
        <Input
          onChange={handleChange}
          id="email"
          type="email"
          name="email"
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
        <InputPassword onChange={handleChange} />
      </div>
      <ButtonSubmit
        label={pageTitle}
        className="!w-full"
        loadingSubmit={loadingSubmit}
      />
      <div className="-z-1 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          atau
        </span>
      </div>
      <Link
        target="_blank"
        href={`https://api.whatsapp.com/send/?phone=6288289317870&text=Saya+ingin+daftar+${process.env.NEXT_PUBLIC_APP_URL_FRONTEND}`}>
        <Button
          type="button"
          className="w-full lg:!px-5"
          variant="outline">
          <UserPlus /> Daftar
        </Button>
      </Link>
    </FormLandingPage>
  );
}

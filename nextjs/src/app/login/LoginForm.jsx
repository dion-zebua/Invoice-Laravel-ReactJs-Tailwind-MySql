"use client";
import React from "react";
import FormContainer from "@/components/other/FormContainer";
import Link from "next/link";
import { UserPlus } from "@deemlol/next-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputPassword from "@/components/other/InputPassword";
import { Button } from "@/components/ui/button";
import LinkLabel from "@/components/other/LinkLabel";

export default function LoginForm({ pageTitle }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <FormContainer
      page={pageTitle}
      onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="email">Email</Label>
          <LinkLabel
            href="/verify-email"
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
    </FormContainer>
  );
}

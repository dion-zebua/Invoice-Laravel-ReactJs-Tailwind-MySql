"use client";
import FormDasboard from "@/components/other/FormDasboard";
import InputPassword from "@/components/other/InputPassword";
import { Label } from "@/components/ui/label";
import React from "react";

export default function ResetPasswordForm({ pageTitle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <FormDasboard
      pageTitle={pageTitle}
      onSubmit={handleSubmit}>
      <div className="">
        <Label htmlFor="password">Password</Label>
        <InputPassword id="password" />
      </div>
      <div className="">
        <Label htmlFor="password-confirmation">Konfirmasi Password</Label>
        <InputPassword id="password-confirmation" />
      </div>
    </FormDasboard>
  );
}

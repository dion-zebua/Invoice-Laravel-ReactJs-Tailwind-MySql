import React from "react";
import FormContainer from "@/components/other/FormContainer";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LinkLabel from "@/components/other/LinkLabel";
import InputPassword from "@/components/other/InputPassword";

export default function ResetPasswordForm({pageTitle}) {
  return (
    <FormContainer page={pageTitle}>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <InputPassword />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Konfirmasi Password</Label>
        </div>
        <InputPassword />
      </div>
      <Button
        type="submit"
        className="w-full">
        {pageTitle}
      </Button>
      <LinkLabel
        href="/login"
        text="Sudah reset?"
      />
    </FormContainer>
  );
}

import React from "react";
import FormContainer from "@/components/other/FormContainer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LinkLabel from "@/components/other/LinkLabel";

export default function VerifyEmailForm({ pageTitle }) {
  return (
    <FormContainer page={pageTitle}>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="email">Email</Label>
        </div>
        <Input
          id="email"
          type="email"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full">
        {pageTitle}
      </Button>
      <LinkLabel
        href="/login"
        text="Sudah verifikasi?"
      />
    </FormContainer>
  );
}

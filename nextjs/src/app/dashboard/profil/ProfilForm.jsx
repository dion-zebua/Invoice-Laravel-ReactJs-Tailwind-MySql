"use client";
import FormDasboard from "@/components/other/FormDasboard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function ProfilForm({ pageTitle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <FormDasboard
      pageTitle={pageTitle}
      onSubmit={handleSubmit}>
      <div className="">
        <Label htmlFor="nama">Nama</Label>
        <Input id="nama" />
      </div>
    </FormDasboard>
  );
}

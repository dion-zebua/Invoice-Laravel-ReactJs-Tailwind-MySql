"use client";
import FormDasboard from "@/components/other/FormDasboard";
import PreviewImage from "@/components/other/PreviewImage";
import UploadImage from "@/components/other/UploadImage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import fetch from "@/lib/fetch";
import React, { useState } from "react";

export default function ProfilForm(props) {
  const { pageTitle, initialData } = props;

  const [data, setData] = useState({
    name: initialData.name ?? "",
    email: initialData.email ?? "",
    sales: initialData.sales ?? "",
    logo: initialData.logo ?? "",
    telephone: initialData.telephone ?? "",
    address: initialData.address ?? "",
    payment_methode: initialData.payment_methode ?? "",
    payment_name: initialData.payment_name ?? "",
    payment_number: initialData.payment_number ?? "",
  });
  const [image, setImage] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageUpload = (file, blob) => {
    setImage(blob);
    setData((prevData) => ({
      ...prevData,
      thumbnail: file,
    }));
  };

  return (
    <FormDasboard
      pageTitle={pageTitle}
      loadingSubmit={loadingSubmit}
      className="sm:[&>div]:col-span-6"
      onSubmit={handleSubmit}>
      <RadioGroup
        className="sm:!col-span-full"
        defaultValue={initialData.role}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={initialData.role}
            id="role"
          />
          <Label htmlFor="role">{initialData.role}</Label>
        </div>
      </RadioGroup>

      <div>
        <Label htmlFor="name">Nama</Label>
        <Input
          id="name"
          onChange={handleChange}
          required
          value={data.name}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          onChange={handleChange}
          required
          value={data.email}
        />
      </div>

      <div>
        <Label htmlFor="sales">Sales</Label>
        <Input
          id="sales"
          onChange={handleChange}
          required
          value={data.sales}
        />
      </div>

      <div>
        <Label htmlFor="telephone">Nomor Telepon</Label>
        <Input
          id="telephone"
          onChange={handleChange}
          required
          value={data.telephone}
        />
      </div>

      <div>
        <Label htmlFor="payment_methode">Metode Pembayaran</Label>
        <Input
          id="payment_methode"
          onChange={handleChange}
          required
          value={data.payment_methode}
        />
      </div>

      <div>
        <Label htmlFor="payment_number">Nomor Pembayaran</Label>
        <Input
          type="number"
          id="payment_number"
          onChange={handleChange}
          required
          value={data.payment_number}
        />
      </div>

      <div className="sm:!col-span-full">
        <Label htmlFor="payment_name">Nama Penerima</Label>
        <Input
          id="payment_name"
          onChange={handleChange}
          required
          value={data.payment_name}
        />
      </div>

      <div>
        <Label htmlFor="logo">Unggah Logo</Label>
        <UploadImage
          onUpload={handleImageUpload}
          image={data.logo}
        />
      </div>

      <div>
        <Label
          className="cursor-none"
          htmlFor="logo">
          Pratinjau Logo
        </Label>
        <PreviewImage image={data.logo} />
      </div>

      <div className="sm:!col-span-full">
        <Label htmlFor="address">Alamat</Label>
        <Textarea
          id="address"
          onChange={handleChange}
          required
          value={data.address}
        />
      </div>
    </FormDasboard>
  );
}

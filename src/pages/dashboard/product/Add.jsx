import React, { useState } from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";
import FormField from "../../../components/FormField";
import Label from "../../../components/Label";
import { InputText } from "primereact/inputtext";
import ButtonRight from "../../../components/ButtonRight";
import InputPassword from "../../../components/InputPassword";
import UploadImage from "../../../components/UploadImage";
import PreviewImage from "../../../components/PreviewImage";

export default function Add() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    alert("Test Form Profil");
  };
  return (
    <Layout title="Tambah Perusahaan">
      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-3 grid-cols-6"
        title="Buat Profil"
        onSubmit={(e) => handleSubmitProfile(e)}>
        <FormField>
          <Label
            text="Nama"
            htmlFor="nama"
          />
          <InputText
            required
            id="nama"
            name="name"
          />
        </FormField>

        <FormField>
          <Label
            text="Email"
            htmlFor="email"
          />
          <InputText
            id="email"
            required
            type="email"
            name="email"
          />
        </FormField>

        <FormField>
          <Label
            text="Telepon"
            htmlFor="telepon"
          />
          <InputText
            id="telepon"
            required
            type="number"
            name="telephon"
          />
        </FormField>

        <FormField>
          <Label
            text="Alamat"
            htmlFor="alamat"
          />
          <InputText
            required
            id="alamat"
            name="address"
          />
        </FormField>

        <FormField className="md:!col-span-2">
          <Label
            text="Metode Pembayaran"
            htmlFor="payment_methode"
          />
          <InputText
            required
            id="payment_methode"
            name="payment_methode"
          />
        </FormField>

        <FormField className="md:!col-span-2">
          <Label
            text="Nomor Akun"
            htmlFor="payment_name"
          />
          <InputText
            required
            id="payment_name"
            name="payment_name"
          />
        </FormField>

        <FormField className="sm:!col-span-full md:!col-span-2">
          <Label
            text="Nama Akun"
            htmlFor="payment_name"
          />
          <InputText
            required
            id="payment_name"
            name="payment_name"
          />
        </FormField>

        <FormField className="min-h-52 [&>div]:h-full flex flex-col">
          <Label
            text="Logo Perusahaan"
            htmlFor="logo"
          />
          <UploadImage onUpload={handleImageUpload} />
        </FormField>

        <FormField className="min-h-52 [&>div]:h-full flex flex-col">
          <Label
            className="!cursor-auto"
            text="Preview Logo Perusahaan"
            htmlFor="logo-preview"
          />
          <PreviewImage image={image} />
        </FormField>

        <ButtonRight />
      </Container>
    </Layout>
  );
}

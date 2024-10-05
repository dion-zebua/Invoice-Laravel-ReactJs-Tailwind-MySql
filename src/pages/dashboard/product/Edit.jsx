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

export default function Edit() {
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    alert("Test Form Profil");
  };
  return (
    <Layout title="Edit Produk">
      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-3 grid-cols-6"
        title="Edit Produk"
        onSubmit={(e) => handleSubmitProfile(e)}>
        <FormField className="!col-span-full">
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
            text="Unit"
            htmlFor="unit"
          />
          <InputText
            id="unit"
            required
            name="unit"
          />
        </FormField>

        <FormField>
          <Label
            text="Harga"
            htmlFor="price"
          />
          <InputText
            id="price"
            required
            type="number"
            name="price"
          />
        </FormField>

        <ButtonRight />
      </Container>
    </Layout>
  );
}

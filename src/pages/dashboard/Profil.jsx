import React from "react";
import Layout from "../../layouts/dashboards/Layout";
import Container from "../../layouts/dashboards/Container";
import Label from "../../components/Label";
import { InputText } from "primereact/inputtext";
import FormField from "../../components/FormField";
import ButtonRight from "../../components/ButtonRight";
import InputPassword from "../../components/InputPassword";

export default function Profil() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asas");
  };
  return (
    <Layout title="Profil">
      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-1 grid-cols-2"
        title="Ubah Profil"
        onSubmit={(e) => handleSubmit(e)}>
        <FormField>
          <Label
            text="Nama"
            htmlFor="nama"
          />

          <InputText
            className="p-inputtext-sm"
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
            type="email"
            className="p-inputtext-sm"
            required
            id="email"
            name="email"
          />
        </FormField>
        <ButtonRight />
      </Container>

      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-1 grid-cols-2"
        title="Ubah Password">
        <FormField>
          <Label
            text="Password Lama"
            htmlFor="password"
          />

          <InputPassword />
        </FormField>

        <FormField>
          <Label
            text="password Baru"
            htmlFor="confirmation-password"
          />

          <InputPassword name="confirmation-password" />
        </FormField>
        <ButtonRight />
      </Container>
    </Layout>
  );
}

import React from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";
import FormField from "../../../components/FormField";
import Label from "../../../components/Label";
import { InputText } from "primereact/inputtext";
import ButtonRight from "../../../components/ButtonRight";
import InputPassword from "../../../components/InputPassword";

export default function Edit() {
  return (
    <Layout title="Edit Perusahaan">
      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-1 grid-cols-2"
        title="Edit Profil">
        <FormField>
          <Label
            text="Nama"
            htmlFor="nama"></Label>
          <InputText
            required
            id="nama"
            name="name"
          />
        </FormField>
        <FormField>
          <Label
            text="Email"
            htmlFor="email"></Label>
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
            htmlFor="telepon"></Label>
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
            htmlFor="alamat"></Label>
          <InputText
            required
            id="alamat"
            name="address"
          />
        </FormField>
        <ButtonRight />
      </Container>
    </Layout>
  );
}

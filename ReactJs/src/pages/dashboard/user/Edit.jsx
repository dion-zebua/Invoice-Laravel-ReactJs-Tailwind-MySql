import React from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";
import FormField from "../../../components/FormField";
import Label from "../../../components/Label";
import { InputText } from "primereact/inputtext";
import ButtonRight from "../../../components/ButtonRight";
import InputPassword from "../../../components/InputPassword";

export default function Edit() {
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    alert("Test Form Profil");
  };
  return (
    <Layout title="Edit Pengguna">
      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-1 grid-cols-2"
        title="Edit Profil"
        onSubmit={(e) => handleSubmitProfile(e)}>
        <FormField>
          <Label
            text="Nama"
            htmlFor="nama"></Label>
          <InputText
            id="nama"
            name="name"></InputText>
        </FormField>
        <FormField>
          <Label
            text="Email"
            htmlFor="email"></Label>
          <InputText
            id="email"
            type="email"
            name="email"></InputText>
        </FormField>
        <FormField className="!col-span-full">
          <Label
            text="Password"
            htmlFor="password"></Label>
          <InputPassword></InputPassword>
        </FormField>
        <ButtonRight />
      </Container>
    </Layout>
  );
}

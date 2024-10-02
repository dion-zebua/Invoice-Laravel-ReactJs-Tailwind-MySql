import React from "react";
import Layout from "../../layouts/dashboards/Layout";
import Container from "../../layouts/dashboards/Container";
import Label from "../../components/Label";
import { InputText } from "primereact/inputtext";
import FormField from "../../components/FormField";

export default function Profil() {
  return (
    <Layout title="Profil">
      <Container
        className=""
        title="Ubah Profil">
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

        <FormField>
          <Label
            text="Telepon"
            htmlFor="phone"
          />

          <InputText
            type="number"
            className="p-inputtext-sm"
            required
            id="phone"
            name="phone"
          />
        </FormField>
      </Container>
    </Layout>
  );
}

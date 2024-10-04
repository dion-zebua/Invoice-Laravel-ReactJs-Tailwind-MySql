import React from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";
import FormField from "../../../components/FormField";
import { InputText } from "primereact/inputtext";


export default function Add() {
  return (
    <Layout title="Tambah Pengguna">
      <Container title="Buat Profil">
        <FormField>
          <InputText></InputText>
        </FormField>
      </Container>
    </Layout>
  );
}

import React from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";
import FormField from "../../../components/FormField";
import Label from "../../../components/Label";
import { InputText } from "primereact/inputtext";
import ButtonRight from "../../../components/ButtonRight";
import InputPassword from "../../../components/InputPassword";

export default function Add() {
  return (
    <Layout title="Tambah Perusahaan">
      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-3 grid-cols-6"
        title="Buat Profil">
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

        <FormField className="md:!col-span-2">
          <Label
            text="Metode Pembayaran"
            htmlFor="payment_methode"></Label>
          <InputText
            required
            id="payment_methode"
            name="payment_methode"
          />
        </FormField>

        <FormField className="md:!col-span-2">
          <Label
            text="Nomor Akun"
            htmlFor="payment_name"></Label>
          <InputText
            required
            id="payment_name"
            name="payment_name"
          />
        </FormField>

        <FormField className="sm:!col-span-full md:!col-span-2">
          <Label
            text="Nama Akun"
            htmlFor="payment_name"></Label>
          <InputText
            required
            id="payment_name"
            name="payment_name"
          />
        </FormField>

        <ButtonRight />
      </Container>
    </Layout>
  );
}

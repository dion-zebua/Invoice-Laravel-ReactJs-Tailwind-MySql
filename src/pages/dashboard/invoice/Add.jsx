import React, { useState } from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";
import FormField from "../../../components/FormField";
import Label from "../../../components/Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import ButtonRight from "../../../components/ButtonRight";

export default function Add() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Belum Lunas", code: "0" },
    { name: "Lunas", code: "1" },
  ];

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    alert("Test Form Profil");
  };
  return (
    <Layout title="Tambah Invoice">
      <Container
        className="[&>*]:col-span-full [&>*]:sm:col-span-3 grid-cols-6"
        title="Buat Invoice"
        onSubmit={(e) => handleSubmitProfile(e)}>
        <FormField>
          <Label
            text="Expired"
            htmlFor="expired"
          />
          <InputText
            required
            id="expired"
            type="date"
            name="expired"
          />
        </FormField>

        <FormField>
          <Label
            text="Status"
            htmlFor="status"
          />
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            id="status"
            required
            name="status"
            options={cities}
            optionLabel="name"
            className="w-full [&_span]:py-[0.56rem] !h-min"
            checkmark={true}
            highlightOnSelect={true}
          />
        </FormField>

        <FormField>
          <Label
            text="Nama"
            htmlFor="nama"
          />
          <InputText
            required
            id="nama"
            name="to_name"
          />
        </FormField>

        <FormField>
          <Label
            text="Perusahaan"
            htmlFor="perusahaan"
          />
          <InputText
            id="perusahaan"
            required
            name="to_company"
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
            name="to_telphone"
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
            name="to_email"
          />
        </FormField>

        <FormField className="!col-span-full">
          <Label
            text="Alamat"
            htmlFor="alamat"
          />
          <InputText
            id="alamat"
            required
            name="to_address"
          />
        </FormField>

        <ButtonRight />
      </Container>
    </Layout>
  );
}

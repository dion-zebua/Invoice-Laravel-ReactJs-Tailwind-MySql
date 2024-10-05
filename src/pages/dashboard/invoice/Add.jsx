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

        <div className="!col-span-full border-t border-slate-300 mt-12 pt-7">
          Table produk ini
        </div>
        <div className="!col-span-full grid grid-cols-8 border-t border-slate-300 mt-12 pt-7 [&>div]:col-span-full md:[&>div]:col-span-3 xl:[&>div]:col-span-2 [&>div]:!col-end-9 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:gap-x-2 [&_label]:!min-w-28 [&_label]:text-right [&_:is(.disabled,.disabled_label)]:!cursor-not-allowed [&_.disabled_input]:bg-gray-200 [&_.disabled_input]:border-gray-500">
          <FormField className="disabled">
            <Label
              className="mb-0"
              text="Sub Total : Rp"
              htmlFor="sub_total"
            />
            <InputText
              disabled
              id="sub_total"
              required
              type="number"
              name="sub_total"
            />
          </FormField>

          <FormField>
            <Label
              className="mb-0"
              text="Diskon : Rp"
              htmlFor="discount"
            />
            <InputText
              id="discount"
              required
              type="number"
              name="discount"
            />
          </FormField>

          <FormField className="disabled">
            <Label
              className="mb-0"
              text="Total : Rp"
              htmlFor="total"
            />
            <InputText
              disabled
              id="total"
              required
              type="number"
              name="total"
            />
          </FormField>

          <FormField className="disabled">
            <Label
              className="mb-0"
              text="PPN : 11%"
              htmlFor="pajak"
            />
            <InputText
              disabled
              id="pajak"
              required
              type="number"
              name="tax"
            />
          </FormField>

          <FormField className="disabled">
            <Label
              className="mb-0"
              text="Grand Total : Rp"
              htmlFor="grand_total"
            />
            <InputText
              disabled
              id="grand_total"
              required
              type="number"
              name="grand_total"
            />
          </FormField>

          <FormField>
            <Label
              className="mb-0"
              text="DP : Rp"
              htmlFor="down_payment"
            />
            <InputText
              id="down_payment"
              required
              type="number"
              name="down_payment"
            />
          </FormField>

          <FormField className="disabled">
            <Label
              className="mb-0"
              text="Sisa : Rp"
              htmlFor="paid_off"
            />
            <InputText
              disabled
              id="paid_off"
              required
              type="number"
              name="paid_off"
            />
          </FormField>
        </div>

        <ButtonRight />
      </Container>
    </Layout>
  );
}

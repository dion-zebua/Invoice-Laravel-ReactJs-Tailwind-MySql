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
        className="[&>*]:col-span-full [&>*]:sm:col-span-3 grid-cols-6"
        title="Edit Profil">
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
          <div className="relative mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center group">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="logo"
                  className="cursor-pointer rounded-md bg-white font-semibold text-mine focus-within:outline-none focus-within:ring-2 focus-within:ring-mine focus-within:ring-offset-2 hover:text-mine">
                  <span>Unggah gambar</span>
                  <input
                    // onChange={displayImage}
                    required
                    id="logo"
                    accept="image/*"
                    name="logo"
                    type="file"
                    className="opacity-0 absolute inset-0 hover:cursor-pointer"
                  />
                </label>
                <p className="pl-1">batas 10mb</p>
              </div>
              <p className="text-xs leading-5 text-gray-600 uppercase">
                jpeg, png, jpg, gif, jfif,&nbsp;
                <span className="lowercase">atau</span> webp
              </p>
            </div>
          </div>
        </FormField>

        <FormField className="min-h-52 [&>div]:h-full flex flex-col">
          <Label
            text="Preview Logo Perusahaan"
            htmlFor="logo-preview"
          />
          <div className="relative mt-1 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center group">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-5 text-gray-600">
                Gambar belum diunggah
              </p>
            </div>
          </div>
        </FormField>

        <ButtonRight />
      </Container>
    </Layout>
  );
}

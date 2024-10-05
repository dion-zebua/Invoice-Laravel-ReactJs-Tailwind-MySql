import React, { useState } from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";
import FormField from "../../../components/FormField";
import Label from "../../../components/Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import ButtonRight from "../../../components/ButtonRight";
import { Button } from "primereact/button";

export default function Add() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [detailPriceInvoice, setDetailPriceInvoice] = useState({
    sub_total: 0,
    discount: 0,
    total: 0,
    tax: 0,
    grand_total: 0,
    down_payment: 0,
    paid_off: 0,
  });
  const [productInvoice, setProductInvoice] = useState([
    {
      idRow: 1,
      name: "",
      quantity: 1,
      unit: "",
      price: "",
      amount: "",
    },
  ]);
  const [productQuantity, setProductQuantity] = useState([1]);
  const status = [
    { name: "Belum Lunas", code: "0" },
    { name: "Lunas", code: "1" },
  ];

  const deleteRow = (idRow) => {
    setProductInvoice(productInvoice.filter((item) => item.idRow !== idRow));
  };

  const addRow = (e) => {
    const newId =
      productInvoice.length > 0
        ? productInvoice[productInvoice.length - 1].idRow + 1
        : 1;

    setProductInvoice([
      ...productInvoice,
      {
        idRow: newId,
        name: "",
        quantity: 1,
        unit: "",
        price: "",
        amount: "",
      },
    ]);
  };

  const updateQuantity = (idRow, change) => {
    setProductInvoice((prev) =>
      prev.map((product) =>
        // const amount = product.price == null ?
        product.idRow === idRow
          ? {
              ...product,
              quantity: Math.max(1, parseInt(product.quantity) + change),
              amount:
                product.price == ""
                  ? ""
                  : Math.max(1, parseInt(product.quantity) + change) *
                    product.price,
            }
          : product
      )
    );
  };

  const handleChangeProduct = (e, idRow) => {
    const { name, value } = e.target;
    setProductInvoice((prev) =>
      prev.map((product) => {
        if (product.idRow === idRow) {
          const updatedProduct = { ...product, [name]: value };
          if (name === "quantity" || name === "price") {
            updatedProduct.amount =
              updatedProduct.quantity * updatedProduct.price;
          }

          return updatedProduct;
        }
        return product;
      })
    );
  };

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
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.value)}
            id="status"
            required
            name="status"
            options={status}
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
          <div className="relative overflow-x-auto">
            <table className="w-full text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr className="[&_th]:px-6 [&_th]:py-3 [&_th]:whitespace-nowrap">
                  <th scope="col">Produk / Jasa</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Satuan</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody className="[&_tr]:bg-white even:[&_tr]:bg-slate-50 hover:[&_tr]:bg-slate-50 [&_td]:border-b [&_td]:px-6 [&_td]:py-3 [&_td]:whitespace-nowrap [&_td]:min-w-44 [&_input]:!text-sm">
                {productInvoice.map((product) => (
                  <tr key={product.idRow}>
                    <td className="!min-w-60 font-medium text-slate-700">
                      <InputText
                        name="name"
                        onChange={(e) => handleChangeProduct(e, product.idRow)}
                        value={product.name}
                      />
                    </td>
                    <td>
                      <div className="flex items-center">
                        <button
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                          onClick={() => updateQuantity(product.idRow, -1)}>
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <InputText
                            name="quantity"
                            onChange={(e) =>
                              handleChangeProduct(e, product.idRow)
                            }
                            min={1}
                            required
                            type="number"
                            value={product.quantity}
                          />
                        </div>
                        <button
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                          onClick={() => updateQuantity(product.idRow, +1)}>
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td>
                      <InputText
                        name="unit"
                        onChange={(e) => handleChangeProduct(e, product.idRow)}
                        value={product.unit}
                      />
                    </td>
                    <td>
                      <InputText
                        type="number"
                        min={0}
                        name="price"
                        onChange={(e) => handleChangeProduct(e, product.idRow)}
                        value={product.price}
                      />
                    </td>
                    <td>
                      <InputText
                        type="number"
                        min={0}
                        className="bg-slate-100 border-slate-600 !text-slate-900"
                        disabled
                        value={product.amount}
                      />
                    </td>
                    <td>
                      <Button
                        type="button"
                        label="hapus"
                        size="small"
                        className="py-1.5"
                        onClick={(e) => deleteRow(product.idRow)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button
            type="button"
            size="small"
            label="tambah produk"
            className="py-1.5 mt-5 ml-6"
            onClick={addRow}
          />
        </div>

        <div className="!col-span-full grid grid-cols-8 border-t border-slate-300 mt-12 pt-7 [&>div]:col-span-full md:[&>div]:col-span-3 [&>div]:!col-end-9 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:gap-x-2 [&_label]:!min-w-28 [&_label]:text-right [&_:is(.disabled,.disabled_label)]:!cursor-not-allowed [&_.disabled_input]:bg-gray-200 [&_.disabled_input]:border-gray-500 [&_input]:!text-sm">
          <FormField className="disabled">
            <Label
              className="mb-0"
              text="Sub Total : Rp"
              htmlFor="sub_total"
            />
            <InputText
              value={detailPriceInvoice.sub_total}
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
              value={detailPriceInvoice.discount}
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
              value={detailPriceInvoice.total}
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
              value={detailPriceInvoice.tax}
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
              value={detailPriceInvoice.grand_total}
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
              value={detailPriceInvoice.down_payment}
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
              value={detailPriceInvoice.paid_off}
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

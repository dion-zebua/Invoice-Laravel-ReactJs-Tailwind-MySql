"use client";
import Box from "@/components/other/Box";
import FormDasboard from "@/components/other/FormDasboard";
import InputPassword from "@/components/other/InputPassword";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import error from "@/lib/error";
import fetch from "@/lib/fetch";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function TambahForm(props) {
  const router = useRouter();
  const { pageTitle } = props;

  const [data, setData] = useState({
    name: "",
    unit: "",
    price: "",
  });

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    fetch
      .post(`product/`, data)
      .then((response) => {
        toast.success(response.data.message);
        router.push(`/dashboard/produk/edit/${response.data.data.id}`);
      })
      .catch((err) => {
        error(err);
      })
      .finally((e) => {
        setLoadingSubmit(false);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <Box
      title={pageTitle}
      className="col-span-full">
      <FormDasboard
        loadingSubmit={loadingSubmit}
        className="sm:[&>div]:col-span-6"
        onSubmit={handleSubmit}>
        {/* nama */}
        <div className="sm:!col-span-full">
          <Label htmlFor="name">Nama</Label>
          <Input
            id="name"
            onChange={handleChange}
            required
            value={data.name}
          />
        </div>

        {/* unit */}
        <div>
          <Label htmlFor="unit">Unit</Label>
          <Input
            id="unit"
            onChange={handleChange}
            required
            value={data.unit}
          />
        </div>

        {/* price */}
        <div>
          <Label htmlFor="price">Harga</Label>
          <Input
            type="number"
            id="price"
            onChange={handleChange}
            required
            value={data.price}
          />
        </div>
      </FormDasboard>
    </Box>
  );
}

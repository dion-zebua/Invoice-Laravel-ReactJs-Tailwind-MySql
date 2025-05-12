"use client";
import Box from "@/components/other/Box";
import FormDasboard from "@/components/other/FormDasboard";
import PreviewImage from "@/components/other/PreviewImage";
import UploadImage from "@/components/other/UploadImage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import error from "@/lib/error";
import fetch from "@/lib/fetch";
import React, { useState } from "react";
import { toast } from "sonner";

export default function EditForm(props) {
  const { pageTitle, initialData } = props;
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [data, setData] = useState({
    name: initialData?.name ?? "",
    unit: initialData?.unit ?? "",
    price: initialData?.price ?? "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    fetch
      .put(`product/${initialData?.id}`, data)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((err) => {
        error(err);
      })
      .finally(() => {
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

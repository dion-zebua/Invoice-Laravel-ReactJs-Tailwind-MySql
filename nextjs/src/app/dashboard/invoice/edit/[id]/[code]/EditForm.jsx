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
    status: initialData?.status ?? "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    fetch
      .put(`invoice/${initialData?.id}/`, data)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((err) => {
        console.log(err);

        error(err);
      })
      .finally(() => {
        setLoadingSubmit(false);
      });
  };

  const handleChangeStatus = (value) => {
    setData((prevData) => ({
      ...prevData,
      status: value,
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
        <RadioGroup
          defaultValue={data.status}
          onValueChange={handleChangeStatus}
          id="status"
          className="sm:!col-span-full">
          <Label htmlFor="name">Status</Label>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="unpaid"
              id="unpaid"
            />
            <Label htmlFor="unpaid">Belum Lunas</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="paid"
              id="paid"
            />
            <Label htmlFor="paid">Lunas</Label>
          </div>
        </RadioGroup>
      </FormDasboard>
    </Box>
  );
}

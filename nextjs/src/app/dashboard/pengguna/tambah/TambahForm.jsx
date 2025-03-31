"use client";
import Box from "@/components/other/Box";
import FormDasboard from "@/components/other/FormDasboard";
import InputPassword from "@/components/other/InputPassword";
import PreviewImage from "@/components/other/PreviewImage";
import UploadImage from "@/components/other/UploadImage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import error from "@/lib/error";
import fetch from "@/lib/fetch";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function TambahForm(props) {
  const { pageTitle } = props;

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    setLoadingSubmit(true);
    // fetch
    //   .post(`user/`, data)
    //   .then((response) => {
    //     toast.success(response.data.message);
    //   })
    //   .catch((err) => {
    //     error(err);
    //   })
    //   .finally((e) => {
    //     setLoadingSubmit(false);
    //   });
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
      title={"Edit " + pageTitle}
      className="col-span-full">
      <FormDasboard
        loadingSubmit={loadingSubmit}
        className="sm:[&>div]:col-span-6"
        onSubmit={handleSubmit}>
        <RadioGroup
          defaultValue="user"
          className="sm:!col-span-full">
          <Label htmlFor="name">Role</Label>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="admin"
              id="admin"
            />
            <Label htmlFor="admin">admin</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="user"
              id="user"
            />
            <Label htmlFor="user">user</Label>
          </div>
        </RadioGroup>

        {/* nama */}
        <div>
          <Label htmlFor="name">Nama</Label>
          <Input
            id="name"
            onChange={handleChange}
            required
            value={data.name}
          />
        </div>

        {/* email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            onChange={handleChange}
            required
            value={data.email}
          />
        </div>

        {/* password */}
        <div className="sm:!col-span-full">
          <Label htmlFor="password">Password</Label>
          <InputPassword
            onChange={handleChange}
            id="password"
          />
        </div>
      </FormDasboard>
    </Box>
  );
}

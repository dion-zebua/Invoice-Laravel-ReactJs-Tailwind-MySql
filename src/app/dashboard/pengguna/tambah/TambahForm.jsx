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
    email: "",
    password: "",
    role: "user",
  });

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    fetch
      .post(`user`, data)
      .then((response) => {
        toast.success(response.data.message);
        router.push(`/dashboard/pengguna/edit/${response.data.data.id}`);
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

  const handleChangeRole = (value) => {
    setData((prevData) => ({
      ...prevData,
      role: value,
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
          defaultValue={data.role}
          onValueChange={handleChangeRole}
          id="role"
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

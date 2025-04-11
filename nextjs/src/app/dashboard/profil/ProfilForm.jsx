"use client";
import Box from "@/components/other/Box";
import FormDasboard from "@/components/other/FormDasboard";
import PreviewImage from "@/components/other/PreviewImage";
import UploadImage from "@/components/other/UploadImage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@/context/SessionContext";
import error from "@/lib/error";
import fetch from "@/lib/fetch";
import { updateSession } from "@/lib/session";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProfilForm(props) {
  const { pageTitle } = props;

  const id = useSession()?.id;

  const [initialData, setInitialData] = useState({ id: id });

  const [data, setData] = useState({
    name: initialData?.name ?? "",
    email: initialData?.email ?? "",
    sales: initialData?.sales ?? "",
    logo: null,
    telephone: initialData?.telephone ?? "",
    address: initialData?.address ?? "",
    payment_methode: initialData?.payment_methode ?? "",
    payment_name: initialData?.payment_name ?? "",
    payment_number: initialData?.payment_number ?? "",
    _method: "PUT",
  });

  const [image, setImage] = useState(
    initialData?.logo?.path ? initialData?.logo?.result : null
  );

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch
      .get(`user/${initialData?.id}`)
      .then((response) => {
        let newData = response.data.data;
        setInitialData(newData);
        setData((prevData) => ({
          ...prevData,
          // ...newData,
          ...Object.fromEntries(
            Object.entries(newData).filter(([key, value]) => value != null)
          ),
          logo: null,
        }));
        setImage(newData?.logo?.path ? newData?.logo?.result : null);
      })
      .catch((err) => {
        error(err);
      })
      .finally((e) => {
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    fetch
      .post(`user/${initialData?.id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        updateSession(response.data.data);
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

  const handleImageUpload = (file, blob) => {
    setImage(blob);
    setData((prevData) => ({
      ...prevData,
      logo: file,
    }));
  };

  return (
    <Box
      isLoading={isLoading}
      title={"Edit " + pageTitle}
      className="col-span-full">
      <FormDasboard
        loadingSubmit={loadingSubmit}
        className="sm:[&>div]:col-span-6"
        onSubmit={handleSubmit}>
        <RadioGroup
          className="sm:!col-span-full"
          required
          defaultValue={data?.role ?? "role"}>
          <Label htmlFor="name">Role</Label>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value={data?.role ?? "role"}
              id="role"
            />
            <Label htmlFor="role">{data?.role ?? "role"}</Label>
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

        {/* sales */}
        <div>
          <Label htmlFor="sales">Sales</Label>
          <Input
            id="sales"
            onChange={handleChange}
            required
            value={data.sales}
          />
        </div>

        {/* telp */}
        <div>
          <Label htmlFor="telephone">Nomor Telepon</Label>
          <Input
            id="telephone"
            onChange={handleChange}
            required
            value={data.telephone}
          />
        </div>

        {/* metode pembayaran */}
        <div>
          <Label htmlFor="payment_methode">Metode Pembayaran</Label>
          <Input
            id="payment_methode"
            onChange={handleChange}
            required
            value={data.payment_methode}
          />
        </div>

        {/* nomor pembayaran */}
        <div>
          <Label htmlFor="payment_number">Nomor Pembayaran</Label>
          <Input
            id="payment_number"
            onChange={handleChange}
            required
            value={data.payment_number}
          />
        </div>

        {/* nama penerima */}
        <div className="sm:!col-span-full">
          <Label htmlFor="payment_name">Nama Penerima</Label>
          <Input
            id="payment_name"
            onChange={handleChange}
            required
            value={data.payment_name}
          />
        </div>

        {/* unggah logo */}
        <div>
          <Label htmlFor="logo">Unggah Logo</Label>
          <UploadImage
            required={!initialData?.logo?.path}
            onUpload={handleImageUpload}
            image={data.logo}
          />
        </div>

        {/* preview logo */}
        <div>
          <Label className="cursor-default">Pratinjau Logo</Label>
          <PreviewImage image={image} />
        </div>

        {/* alamat */}
        <div className="sm:!col-span-full">
          <Label htmlFor="address">Alamat</Label>
          <Textarea
            id="address"
            onChange={handleChange}
            required
            value={data.address}
          />
        </div>
      </FormDasboard>
    </Box>
  );
}

import React, { useState } from "react";
import Auth from "../../layouts/auths/Auth";
import Label from "../../components/Label";
import globalFunction from "../../helpers/GLobalFunction";
import { InputText } from "primereact/inputtext";
import FormField from "../../components/FormField";
import InputPassword from "../../components/InputPassword";
import AxiosConfig from "../../apis/AxiosConfig";
import { json } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const footer = () => {
    return (
      <p className="col-span-full text-right text-[13px]">
        Tidak punya akun?&nbsp;
        <a
          className="underline"
          href={globalFunction.whatsapp}
          target="_blank">
          Daftar
        </a>
      </p>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await AxiosConfig.post("login", data);
      console.log(res);
    } catch (err) {
      Swal.fire({
        text: err.response.data.message,
        icon: "error",
        backdrop: true,
      });
    }
  };

  return (
    <>
      <Auth
        loadingSubmit={loadingSubmit}
        title="Login"
        onSubmit={handleLogin}
        footer={footer()}>
        <FormField className="!mb-0">
          <Label
            text="Email"
            htmlFor="email"
          />

          <InputText
            onChange={handleChange}
            type="email"
            className="p-inputtext-sm"
            required
            id="email"
            name="email"
          />
        </FormField>
        <FormField className="!mb-0">
          <Label
            text="Password"
            htmlFor="password"
          />
          <InputPassword onChange={handleChange} />
        </FormField>
      </Auth>
    </>
  );
};

export default Login;

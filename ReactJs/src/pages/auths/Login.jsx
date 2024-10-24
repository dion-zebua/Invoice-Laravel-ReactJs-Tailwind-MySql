import Reac, { useState } from "react";
import Auth from "../../layouts/auths/Auth";
import Label from "../../components/Label";
import globalFunction from "../../helpers/GLobalFunction";
import { InputText } from "primereact/inputtext";
import FormField from "../../components/FormField";
import InputPassword from "../../components/InputPassword";
import AxiosConfig from "../../apis/AxiosConfig";

const Login = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false)
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

  const handleLogin = async (e) => {
    e.preventDefault();

    setData({
      email: e.target[0].value,
      password: e.target[1].value,
    });

    try {
      const response = await AxiosConfig.post("login/", data);
      console.log("Logged in:", response);
    } catch (err) {
      console.log(err);
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
          <InputPassword />
        </FormField>
      </Auth>
    </>
  );
};

export default Login;

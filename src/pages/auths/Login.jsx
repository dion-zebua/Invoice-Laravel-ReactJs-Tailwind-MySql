import Reac from "react";
import Auth from "../../layouts/auths/Auth";
import Label from "../../components/Label";
import globalFunction from "../../helpers/GLobalFunction";
import { InputText } from "primereact/inputtext";
import FormField from "../../components/FormField";
import InputPassword from "../../components/InputPassword";

const Login = () => {

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
  return (
    <>
      <Auth
        title="Login"
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

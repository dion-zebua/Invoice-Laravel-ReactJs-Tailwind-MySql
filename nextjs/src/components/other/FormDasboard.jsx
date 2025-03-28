import React from "react";
import { Button } from "../ui/button";
import Spin from "./Spin";
import ButtonSubmit from "./ButtonSubmit";

export default function FormDasboard(props) {
  const { children, onSubmit, label, loadingSubmit, className } = props;
  return (
    <form
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className={`grid gap-6 [&>div]:grid [&>div]:gap-2 sm:grid-cols-12 grid-cols-2 [&>*]:col-span-full ${className}`}>
      {children}
      <ButtonSubmit
        label={label}
        loadingSubmit={loadingSubmit}
      />
    </form>
  );
}

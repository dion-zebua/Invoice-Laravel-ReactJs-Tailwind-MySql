import React from "react";
import { Button } from "../ui/button";
import Spin from "./Spin";
import ButtonSubmit from "./ButtonSubmit";

export default function FormDasboard(props) {
  const { children, onSubmit, label, loadingSubmit } = props;
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 [&>div]:grid [&>div]:gap-2 sm:grid-cols-12 grid-cols-2 [&>*]:col-span-full">
      {children}
      <ButtonSubmit
        label={label}
        loadingSubmit={loadingSubmit}
      />
    </form>
  );
}

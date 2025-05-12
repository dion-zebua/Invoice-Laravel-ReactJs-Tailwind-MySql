import React from "react";
import { Button } from "../ui/button";
import Spin from "./Spin";

export default function ButtonSubmit(props) {
  const { loadingSubmit, label, className } = props;
  return (
    <Button
      disabled={loadingSubmit}
      type="submit"
      className={`${className} w-fit ml-auto`}>
      {loadingSubmit && <Spin />}
      {label || "Submit"}
    </Button>
  );
}

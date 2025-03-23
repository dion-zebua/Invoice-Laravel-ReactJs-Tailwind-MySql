import React from "react";
import { Button } from "../ui/button";
import Spin from "./Spin";

export default function FormDasboard(props) {
  const { children, onSubmit } = props;
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 [&>div]:grid [&>div]:gap-2 sm:grid-cols-12 grid-cols-2 [&>*]:col-span-full">
      {children}
      <Button
        type="submit"
        className="!w-fit ml-auto !col-span-full">
        <Spin />
        Submit
      </Button>
    </form>
  );
}

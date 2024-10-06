import { Button } from "primereact/button";
import React from "react";

export default function ButtonRight(props) {
  const { label } = props;
  return (
    <div className="text-right !col-span-full">
      <Button
        type="submit"
        className="mt-3  bg-blue-600 hover:bg-blue-700"
        size="small"
        label={label ?? "Simpan"}
      />
    </div>
  );
}

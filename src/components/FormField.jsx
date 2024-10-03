import React from "react";

export default function FormField(props) {
  const { children, className } = props;
  return <div className={`${className ?? ""} formField mb-3`}>{children}</div>;
}

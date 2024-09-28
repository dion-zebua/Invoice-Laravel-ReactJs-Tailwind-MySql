import React from "react";

export default function Label(props) {
  const { htmlFor, text, className } = props;

  return (
    <label
      className={`mb-1 block text-sm font-medium leading-6 text-slate-600 ${
        className || ""
      }`}
      htmlFor={htmlFor ?? ""}>
      {text}
    </label>
  );
}

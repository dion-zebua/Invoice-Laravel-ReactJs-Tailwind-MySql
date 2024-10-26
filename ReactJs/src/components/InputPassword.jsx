import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function InputPassword(props) {
  const { name, onChange } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <InputText
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        className="p-inputtext-sm"
        required
        id={name ?? "password"}
        name={name ?? "password"}
      />
      <svg
        onClick={(e) => setShowPassword((prev) => !prev)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`cursor-pointer ${
          showPassword ? "bg-slate-300 border-2 border-blue-400" : ""
        } hover:bg-slate-300 hover:border-2 hover:border-blue-400 bg-slate-200 p-1.5 text-slate-500 h-full aspect-square absolute right-0 rounded-e-md top-1/2 -translate-y-1/2`}
        id="openPassword">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "@deemlol/next-icons";
import { Button } from "../ui/button";

export default function InputPassword() {
  const [seePassword, setSeePassword] = useState(false);

  const handleInputPassword = () => {
    setSeePassword((e) => !e);
  };
  return (
    <div className="relative">
      <Input
        id="password"
        type={seePassword ? "text" : "password"}
        required
        className="pr-10"
      />
      <div className="absolute !py-5 top-1/2 -translate-y-1/2 right-1">
        <Button
          onClick={handleInputPassword}
          type="button"
          size="sm"
          className="border  border-slate-300"
          variant="secondary">
          {seePassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </Button>
      </div>
    </div>
  );
}

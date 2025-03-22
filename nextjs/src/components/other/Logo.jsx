import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="w-36">
        <Image
          className="min-w-[100px] md:w-32 xl:w-36"
          src="/image/invoice.png"
          width={100}
          height={25}
          alt="Logo"
        />
    </div>
  );
}

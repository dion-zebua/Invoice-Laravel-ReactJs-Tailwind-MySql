import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="max-w-36">
        <Image
          className="min-w-[96px] md:w-28 xl:w-32"
          src="/image/invoice.png"
          width={100}
          height={25}
          alt="Logo"
        />
    </div>
  );
}

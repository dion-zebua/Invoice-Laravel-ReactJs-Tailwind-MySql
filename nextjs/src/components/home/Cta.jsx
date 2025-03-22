import React from "react";
import { Button } from "../ui/button";
import { CheckCircle, UserPlus } from "@deemlol/next-icons";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="custom-container mt-20">
      <div className="bg-gradient-to-tr from-primary to-blue-400 rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28 shadow-xl">
        <div className="bg-[url(/image/star.svg)] bg-right-bottom bg-[size:160%]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl text-white font-bold leading-8 md:leading-9 lg:leading-10">
              Apakah anda sedang membutuhkan sistem pembuatan invoice yang
              cepat?
            </h2>
            <p className="max-w-lg text-indigo-100 mx-auto mt-4">
              Hubungi kami dan konsultasikan kebutuhan anda, kami siap membantu
              anda 24 jam.
            </p>
          </div>
          <div className="mt-8">
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=6288289317870&text=Saya+ingin+daftar+https://invoices.my.id">
              <Button
                className="w-auto lg:!px-5"
                variant={"outline"}>
                <UserPlus /> Daftar
              </Button>
            </Link>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8 [&_li]:inline-flex [&_li]:items-center [&_li]:gap-2 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0 [&_svg]:text-white">
            <li>
              <CheckCircle />
              Harga murah
            </li>
            <li className="">
              <CheckCircle />
              Akses mudah
            </li>
            <li className="">
              <CheckCircle />
              Support 24 jam
            </li>
            <li className="">
              <CheckCircle />
              Tampilan Profesional
            </li>
            <li className="">
              <CheckCircle />
              CS Amanah
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

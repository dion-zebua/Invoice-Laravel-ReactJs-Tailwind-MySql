import React from "react";
import Link from "next/link";
import { LogIn, UserPlus } from "@deemlol/next-icons";
import { Button } from "../ui/button";
import helper from "@/lib/helper";

export default function Baner() {
  return (
    <div className="">
      <div className="custom-container pt-20 pb-16 text-center">
        <h1 className="title">
          Invoice Generator <br /> by INVOICES
        </h1>
        <p className="mt-5 text-slate-600 max-w-[500px] mx-auto">
          Buat invoice dengan cepat, mudah, tanpa ribet menggunakan alat
          otomatis yang efisien, lebih simpel & rapi.
        </p>

        <div className="flex justify-center items-center mt-5 gap-x-5">
          <Link href="/login">
            <Button className="w-full lg:!px-5">
              <LogIn /> Masuk
            </Button>
          </Link>
          <Link
            target="_blank"
            href={helper.whatsapp()}>
            <Button
              className="w-full lg:!px-5"
              variant="outline">
              <UserPlus /> Daftar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

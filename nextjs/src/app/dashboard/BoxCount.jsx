"use client";
import Box from "@/components/other/Box";
import { useSession } from "@/context/SessionContext";
import fetch from "@/lib/fetch";
import { Box as Box2, ArrowRight, Users, FileText } from "@deemlol/next-icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BoxCount() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const user = useSession();

  useEffect(() => {
    fetch
      .get("all-data/count/")
      .then((res) => setData(res.data.data))
      .catch((err) => {
        return false;
      })
      .finally(() => setIsLoading(false));
  });

  const className =
    "flex items-center flex-nowrap gap-x-1 text-primary hover:[&_svg]:scale-125 hover:[&_svg]:w-8 [&_svg]:transition-all [&_svg]:stroke-primary text-sm";
  return (
    <div
      className={`[&_.total_svg]:shadow-lg [&_.total_svg]:stroke-secondary [&_.total_svg]:bg-primary [&_.total_svg]:rounded-md [&_.total_svg]:p-2 !col-span-full grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-10 ${
        user?.role == "admin" ? "lg:grid-cols-3" : "lg:grid-cols-2"
      }`}>
      {user?.role == "admin" && (
        <Box
          loadingBox={isLoading}
          side={<Users size={40} />}
          title={`${data?.user ?? 0} Pengguna`}>
          <div className="">
            <Link
              className={className}
              href="/dashboard/pengguna">
              Semua pengguna <ArrowRight size={15} />
            </Link>
          </div>
        </Box>
      )}
      <Box
        className={user?.role == "user" ? "col-span-1" : ""}
        loadingBox={isLoading}
        side={<Box2 size={40} />}
        title={`${data?.product ?? 0} Produk`}>
        <Link
          className={className}
          href="/dashboard/produk">
          Semua produk <ArrowRight size={15} />
        </Link>
      </Box>
      <Box
        className={
          user?.role == "admin" ? "sm:col-span-full lg:!col-span-1" : ""
        }
        loadingBox={isLoading}
        side={<FileText size={40} />}
        title={`${data?.invoice ?? 0} Invoice`}>
        <Link
          className={className}
          href="/dashboard/invoice">
          Semua invoice <ArrowRight size={15} />
        </Link>
      </Box>
    </div>
  );
}

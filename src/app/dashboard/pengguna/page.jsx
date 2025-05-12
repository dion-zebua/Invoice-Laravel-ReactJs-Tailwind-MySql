import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import Box from "@/components/other/Box";
import IndexTable from "./IndexTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "@deemlol/next-icons";

const pageTitle = "Semua Pengguna";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
});

const Side = () => {
  return (
    <Link href="./pengguna/tambah">
      <Button
        className="w-full lg:!px-5"
        variant="outline">
        <Plus /> Tambah
      </Button>
    </Link>
  );
};

export default async function page() {
  return (
    <Main page={pageTitle}>
      <Box
        className="col-span-full"
        title={pageTitle}
        side={<Side />}>
        <IndexTable />
      </Box>
    </Main>
  );
}

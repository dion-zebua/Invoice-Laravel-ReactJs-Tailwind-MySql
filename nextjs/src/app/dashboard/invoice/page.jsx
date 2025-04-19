import Main from "@/components/dashboard/Main";
import Box from "@/components/other/Box";
import { Button } from "@/components/ui/button";
import updateMetadata from "@/lib/meta";
import { Plus } from "@deemlol/next-icons";
import Link from "next/link";
import React from "react";
import IndexTable from "./IndexTable";

const pageTitle = "Semua Invoice";

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
    <Link href="./invoice/tambah">
      <Button
        className="w-full lg:!px-5"
        variant="outline">
        <Plus /> Invoice
      </Button>
    </Link>
  );
};

export default function page() {
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

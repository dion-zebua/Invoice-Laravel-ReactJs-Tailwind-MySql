import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import Box from "@/components/other/Box";
import IndexTable from "./IndexTable";

const pageTitle = "Semua Pengguna";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
});

export default async function page() {
  return (
    <Main page={pageTitle}>
      <Box
        className="col-span-full"
        title={pageTitle}>
        <IndexTable />
      </Box>
    </Main>
  );
}

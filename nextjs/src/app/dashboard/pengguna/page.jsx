import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import { getSession } from "@/lib/session";
import Box from "@/components/other/Box";

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
  const session = await getSession();

  return (
    <Main page={pageTitle}>
      <Box
        className="col-span-full"
        title={pageTitle}>
        <table></table>
      </Box>
    </Main>
  );
}

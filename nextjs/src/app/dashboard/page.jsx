import Main from "@/components/dashboard/Main";
import Box from "@/components/other/Box";
import updateMetadata from "@/lib/meta";
import { getSession } from "@/lib/session";
import React from "react";

const pageTitle = "Dashboard";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
});

export default async function page() {
  return (
    <Main page={pageTitle}>
      <Box
        loadingBox
        title="Total Invoice"></Box>
      <Box
        loadingBox
        title="Total Pengguna"></Box>
      <Box loadingBox>Test</Box>
      <Box
        loadingBox={true}
        className="col-span-full h-80">
        Test
      </Box>
    </Main>
  );
}

import Main from "@/components/dashboard/Main";
import Box from "@/components/other/Box";
import updateMetadata from "@/lib/meta";
import React from "react";
import ProfilForm from "./ProfilForm";

const pageTitle = "Profil";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
});

export default function page() {
  return (
    <Main page={pageTitle}>
      <Box
        title="Ubah Password"
        className="col-span-full">
        <ProfilForm pageTitle={pageTitle} />
      </Box>
    </Main>
  );
}

import React from "react";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import updateMetadata from "@/lib/meta";
import Footer from "@/components/footer/Footer";
import VerifyEmailForm from "./VerifyEmailForm";

const pageTitle = "Verifikasi Email";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
});
export default function page() {
  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner page={pageTitle} />
      <VerifyEmailForm pageTitle={pageTitle} />
      <Footer />
    </>
  );
}

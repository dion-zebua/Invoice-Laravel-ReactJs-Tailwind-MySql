import React from "react";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import updateMetadata from "@/lib/meta";
import Footer from "@/components/footer/Footer";
import ResetPasswordForm from "./ResetPasswordForm";

const pageTitle = "Reset Password";

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
      <DefaultBaner pageTitle={pageTitle} />
      <ResetPasswordForm pageTitle={pageTitle} />
      <Footer />
    </>
  );
}

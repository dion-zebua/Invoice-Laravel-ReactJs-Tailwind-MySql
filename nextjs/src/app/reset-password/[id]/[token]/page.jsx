import NotFound from "@/app/not-found";
import Footer from "@/components/footer/Footer";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import fetch from "@/lib/fetch";
import updateMetadata from "@/lib/meta";
import React from "react";
import { toast } from "sonner";
import ResetPasswordForm from "./ResetPasswordForm";

const pageTitle = "Verifikasi Email";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
  robots: {
    index: false,
  },
});

export default async function page({ params }) {
  const { id, token } = await params;
  let message = "";

  try {
    const response = await fetch.get(`check-reset-password/${id}/${token}/`);
    if (response.status != 200) {
      return <NotFound />;
    }
    message = response.data.message;
  } catch (err) {
    return <NotFound />;
  }

  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner pageTitle={pageTitle} />
      <ResetPasswordForm pageTitle={pageTitle} />
      <Footer />
    </>
  );
}

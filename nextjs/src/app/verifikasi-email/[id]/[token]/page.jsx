import NotFound from "@/app/not-found";
import Footer from "@/components/footer/Footer";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import FormLandingPage from "@/components/other/FormLandingPage";
import error from "@/lib/error";
import fetch from "@/lib/fetch";
import updateMetadata from "@/lib/meta";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

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
    const response = await fetch.post(`check-verification/${id}/${token}/`);
    if (response.status != 200) {
      return <NotFound />;
    }
    message = response.data.message;
    toast.success(
      response.data.message +
        " Redirect otomatis ke halaman login dalam 5 detik!"
    );
    const timeout = setTimeout(() => {
      redirect("/login");
    }, 5000);
  } catch (err) {
    return <NotFound />;
  }

  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner pageTitle={pageTitle} />
      <FormLandingPage pageTitle={pageTitle}>
        <p>{message}</p>
      </FormLandingPage>
      <Footer />
    </>
  );
}

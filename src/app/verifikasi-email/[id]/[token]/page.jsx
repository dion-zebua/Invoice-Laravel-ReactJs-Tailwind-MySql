import NotFound from "@/app/not-found";
import Footer from "@/components/footer/Footer";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import FormLandingPage from "@/components/other/FormLandingPage";
import LinkLabel from "@/components/other/LinkLabel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import fetch from "@/lib/fetch";
import updateMetadata from "@/lib/meta";
import React from "react";

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
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
});

export default async function page({ params }) {
  const { id, token } = await params;
  let message = "";

  try {
    const response = await fetch.post(`check-verification/${id}/${token}`);
    message = response.data.message;
  } catch (err) {
    message = err.response.data.message ?? err.message;
  }

  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner pageTitle={pageTitle} />
      <FormLandingPage pageTitle={pageTitle}>
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
        <div className="text-right [&>*]:ml-0 text-sm opacity-80">
          <LinkLabel
            href="/login"
            text="Sudah verifikasi?"
          />
          <span>&nbsp;atau&nbsp;</span>
          <LinkLabel
            href="/verifikasi-email"
            text="Kirim ulang?"
          />
        </div>
      </FormLandingPage>
      <Footer />
    </>
  );
}

import NotFound from "@/app/not-found";
import Footer from "@/components/footer/Footer";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import fetch from "@/lib/fetch";
import updateMetadata from "@/lib/meta";
import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import FormLandingPage from "@/components/other/FormLandingPage";
import LinkLabel from "@/components/other/LinkLabel";
import { Alert, AlertDescription } from "@/components/ui/alert";

const pageTitle = "Reset Password";

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
  let found = false;

  try {
    const response = await fetch.get(`check-reset-password/${id}/${token}/`);

    if (response.status == 200) found = true;

    message = response.data.message;
  } catch (err) {
    message = err.response.data.message ?? err.message;
  }

  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner pageTitle={pageTitle} />
      {found ? (
        <ResetPasswordForm pageTitle={pageTitle} />
      ) : (
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
      )}
      <Footer />
    </>
  );
}

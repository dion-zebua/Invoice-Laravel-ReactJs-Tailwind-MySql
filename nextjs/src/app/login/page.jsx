import React from "react";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import Footer from "@/components/footer/Footer";
import updateMetadata from "@/lib/meta";
import LoginForm from "./LoginForm";

const pageTitle = "Login";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  description: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    description: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
});

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner page={pageTitle} />
      <LoginForm pageTitle={pageTitle} />
      <Footer />
    </>
  );
}

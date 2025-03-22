import React from "react";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import FormContainer from "@/components/other/FormContainer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LinkLabel from "@/components/other/LinkLabel";
import updateMetadata from "@/lib/meta";
import Footer from "@/components/footer/Footer";

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
      <FormContainer page={pageTitle}>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="email">Email</Label>
          </div>
          <Input
            id="email"
            type="email"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full">
          {pageTitle}
        </Button>
        <LinkLabel
          href="/login"
          text="Sudah verifikasi?"
        />
      </FormContainer>
      <Footer />
    </>
  );
}

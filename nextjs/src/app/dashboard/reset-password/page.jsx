import Main from "@/components/dashboard/Main";
import Box from "@/components/other/Box";
import updateMetadata from "@/lib/meta";
import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import { getSession } from "@/lib/session";

const pageTitle = "Reset Password";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
});

export default async function page() {
  // const user = await getSession();
  // console.log(user);

  return (
    <Main page={pageTitle}>
      <ResetPasswordForm pageTitle={pageTitle} />
    </Main>
  );
}

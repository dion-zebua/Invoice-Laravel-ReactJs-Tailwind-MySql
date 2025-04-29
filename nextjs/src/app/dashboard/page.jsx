import Main from "@/components/dashboard/Main";
import Box from "@/components/other/Box";
import updateMetadata from "@/lib/meta";
import { getSession } from "@/lib/session";
import React from "react";
import User from "./User";
import Invoice from "./Invoice";
import BoxCount from "./BoxCount";

const pageTitle = "Dashboard";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
});

export default async function page() {
  const user = await getSession();
  return (
    <Main page={pageTitle}>
      <BoxCount />
      {user?.role == "admin" && <User />}
      <Invoice />
    </Main>
  );
}

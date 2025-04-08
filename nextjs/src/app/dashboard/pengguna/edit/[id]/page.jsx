import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import { getSession } from "@/lib/session";
import fetch from "@/lib/fetch";
// import EditForm from "./EditForm";
// import fetch from "@/lib/fetch";

const pageTitle = "Edit Pengguna";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
});

export default async function page({ params }) {
  const user = await getSession();

  const { id } = await params;

  try {
    const res = await fetch.get("check-login");
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }

  return (
    <Main page={pageTitle}>{/* <EditForm pageTitle={pageTitle} /> */}</Main>
  );
}

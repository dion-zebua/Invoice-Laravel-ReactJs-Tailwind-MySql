import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import EditForm from "../pengguna/edit/[id]/EditForm";
import { redirect } from "next/navigation";
import fetch from "@/lib/fetch";

const pageTitle = "Profil";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
});

export default async function page() {
  let data = {};

  try {
    const res = await fetch.get(`check-login/`);
    data = res.data.data;
  } catch (err) {
    redirect("/dashboard/pengguna");
  }

  return (
    <Main page={pageTitle}>
      <EditForm
        pageTitle={pageTitle}
        initialData={data}
      />
    </Main>
  );
}

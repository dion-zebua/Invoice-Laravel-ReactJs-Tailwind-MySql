import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import fetch from "@/lib/fetch";
import { redirect } from "next/navigation";
import EditForm from "./EditForm";

const pageTitle = "Edit Produk";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
});

export default async function page({ params }) {
  const { id } = await params;
  let data = {};

  try {
    const res = await fetch.get(`product/${id}`);
    data = res.data.data;
  } catch (err) {
    redirect("/dashboard/produk");
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

"use server";

import fetch from "@/lib/fetch";
import { redirect } from "next/navigation";

export default async function PDFPreview({ params }) {
  const { id, code } = await params;
  const invoice = `invoice/${id}/${code}/`;

  try {
    const response = await fetch.get(invoice);
  } catch (err) {
    // redirect("/");
    console.log(err);
  }
  return (
    <div className="h-dvh w-dvw">
      <iframe
        src={`${process.env.APP_URL_BACKEND}invoice/${id}/${code}/stream/`}
        className="w-full h-full"></iframe>
    </div>
  );
}

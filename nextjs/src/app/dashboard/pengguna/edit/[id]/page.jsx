import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import { getSession } from "@/lib/session";
import axios from "axios";
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

  console.log(user.token);

  try {
    const res = await axios.get("http://127.0.0.1:8000/api/check-login", {
      headers: {
        Authorization:
          "Bearer 2|rQiQ7tAXtKsew9hqSqI8M3V24VtVvGcP5t6fVSkE1c906f33",
      },
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }

  return (
    <Main page={pageTitle}>{/* <EditForm pageTitle={pageTitle} /> */}</Main>
  );
}

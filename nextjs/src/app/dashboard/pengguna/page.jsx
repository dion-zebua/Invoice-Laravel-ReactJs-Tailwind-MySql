import Main from "@/components/dashboard/Main";
import updateMetadata from "@/lib/meta";
import React from "react";
import Box from "@/components/other/Box";
import fetch from "@/lib/fetch";
import IndexTable from "./IndexTable";

const pageTitle = "Semua Pengguna";

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
  let message = null;

  const params = {
    perPage: 5,
    verified: null,
    search: null,
    role: null,
    orderBy: "id",
    orderDirection: "desc",
  };

  try {
    const res = await fetch.get(`user/`, { params: params });
    data = res.data.data;
  } catch (err) {
    message = err.response.data.message ?? err.message;
  }

  return (
    <Main page={pageTitle}>
      <Box
        className="col-span-full"
        title={pageTitle}>
        <IndexTable
          params={params}
          data={data}
          message={message}
          path="pengguna"
          model="user"
        />
      </Box>
    </Main>
  );
}

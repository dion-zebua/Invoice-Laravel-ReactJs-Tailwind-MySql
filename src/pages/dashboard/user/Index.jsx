import React from "react";
import Layout from "../../../layouts/dashboards/Layout";
import Container from "../../../layouts/dashboards/Container";

export default function Index() {
  return (
    <>
      <Layout title="Dashboard">
        <Container
          className="sm:!col-span-6"
          title="Semua Pengguna">
          a
        </Container>
      </Layout>
    </>
  );
}

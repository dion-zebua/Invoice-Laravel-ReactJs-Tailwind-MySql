import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import Footer from "@/components/footer/Footer";
import fetch from "@/lib/fetch";
import updateMetadata from "@/lib/meta";
import FormLandingPage from "@/components/other/FormLandingPage";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Iframe from "./Iframe";

const pageTitle = "Invoice";

async function getInvoice(id, code) {
  try {
    const response = await fetch.get(`invoice/${id}/${code}/`);
    return response;
  } catch (err) {
    return err;
  }
}

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  description: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    description: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
});

export default async function Page({ params }) {
  const { id, code } = await params;
  const invoice = await getInvoice(id, code);

  let titleInvoice;
  if (invoice.status == 200) {
    titleInvoice = `Invoice #${invoice.data.data.code}`;
  } else {
    titleInvoice = "Invoice";
  }

  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner pageTitle={titleInvoice} />
      {invoice.status == 200 ? (
        <Iframe
          id={id}
          code={code}
        />
      ) : (
        <>
          <FormLandingPage pageTitle={pageTitle}>
            <Alert>
              <AlertDescription>
                {invoice?.response?.data?.message ?? invoice?.message}
              </AlertDescription>
            </Alert>
          </FormLandingPage>
        </>
      )}
      <Footer />
    </>
  );
}

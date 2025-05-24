import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import Footer from "@/components/footer/Footer";
import updateMetadata from "@/lib/meta";
import FormLandingPage from "@/components/other/FormLandingPage";
import { Alert, AlertDescription } from "@/components/ui/alert";
import DetailInvoice from "./DetailInvoice";
import Link from "next/link";
import { Download } from "@deemlol/next-icons";

const pageTitle = "Invoice";
const notFound = "Tidak Ditemukan";

async function getInvoice(id, code) {
  try {
    const response = await fetch(
      `${process.env.APP_URL_BACKEND}invoice/${id}/${code}`,
      {
        cache: "no-store",
      }
    );
    return await response.json();
  } catch (err) {
    return err;
  }
}

export async function generateMetadata({ params }) {
  const { id, code } = await params;
  let title = notFound;

  try {
    const invoice = await getInvoice(id, code);
    if (invoice.status) {
      title = "#" + invoice.data.code;
    }
  } catch (error) {}
  return updateMetadata({
    title: `Halaman ${pageTitle} ${title} - ${process.env.APP_NAME}`,
    description: `Halaman ${pageTitle} ${title} - ${process.env.APP_NAME}`,
    openGraph: {
      title: `Halaman ${pageTitle} ${title} - ${process.env.APP_NAME}`,
      description: `Halaman ${pageTitle} ${title} - ${process.env.APP_NAME}`,
    },
  });
}

export default async function Page({ params }) {
  const { id, code } = await params;
  const invoice = await getInvoice(id, code);

  const titleInvoice = invoice.status ? "#" + invoice.data.code : notFound;

  return (
    <>
      <NavbarLandingPage />
      <DefaultBaner pageTitle={pageTitle + " " + titleInvoice} />
      {invoice.status ? (
        <div className="">
          <Link
            target="_blank"
            download
            href={`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}invoice/${invoice.data.id}/${invoice.data.code}/download/`}
            className="mb-5 w-max p-2.5 mx-auto rounded-xs shadow grid place-items-center hover:bg-blue-300 bg-blue-500">
            <Download
              className="stroke-slate-100 mb-2"
              size={30}
            />
            <span className="text-slate-200 text-xs text-center">download <br />file asli</span>
          </Link>
          <DetailInvoice data={invoice.data} />
        </div>
      ) : (
        <>
          <FormLandingPage pageTitle={pageTitle}>
            <Alert>
              <AlertDescription>{invoice?.message}</AlertDescription>
            </Alert>
          </FormLandingPage>
        </>
      )}
      <Footer />
    </>
  );
}

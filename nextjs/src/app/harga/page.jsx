import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import Image from "next/image";
import updateMetadata from "@/lib/meta";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus } from "@deemlol/next-icons";
import helper from "@/lib/helper";

const pageTitle = "Harga";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
});

const List = ({ item }) => {
  return (
    <li className="flex items-center py-2">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8 flex-none mr-5">
        <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
      </svg>
      <p className="text-[15px]">{item}</p>
    </li>
  );
};

export default function page() {
  return (
    <>
      <NavbarLandingPage pageTitle={pageTitle} />
      <DefaultBaner pageTitle={`${pageTitle} Kami`} />
      <div className="custom-container mt-20">
        <div className="mx-auto mt-16 max-w-[800px]">
          <div className="bg-slate-50 grid gap-0 grid-cols-1 sm:grid-cols-2 py-10 sm:px-5 md:px-14 rounded-3xl">
            <div className="col-span-full max-w-2xl mx-auto mb-10">
              <h2 className="text-center subtitle text-2xl font-bold leading-8 md:leading-9 lg:leading-10">
                Langganan sekarang juga!
              </h2>
            </div>
            <div className="rounded-3xl py-10 px-5 sm:px-7 md:px-10 text-slate-800">
              <div className="">
                <div className="flex items-start mb-5">
                  <span className="text-xl text-slate-700">Rp</span>
                  <span className="text-8xl">0</span>
                </div>
                <h3 className="text-xl font-semibold">Premium</h3>
                <p className="mb-5">Coba secara gratis</p>
                <Link
                  href={helper.whatsapp(
                    `Saya ingin coba trial ${process.env.NEXT_PUBLIC_APP_URL_FRONTEND}`
                  )}>
                  <Button
                    target="_blank"
                    className="w-full lg:!px-5">
                    <UserPlus /> Daftar Sekarang
                  </Button>
                </Link>
                <ul
                  role="list"
                  className="mt-5 tracking-tight text-base divide-y divide-slate-900/10 text-slate-900 [&_svg]:fill-slate-900">
                  <List item="1 Tahun" />
                  <List item="Produk Tanpa Batas" />
                  <List item="Invoice Tanpa Batas" />
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-tr from-primary to-blue-400 rounded-3xl py-10 px-5 sm:px-7 md:px-10 text-slate-50">
              <div className="bg-[url(/image/star.svg)] bg-right-bottom bg-[size:200%]">
                <div className="flex items-start mb-5">
                  <span className="text-xl text-slate-300">Rp</span>
                  <span className="text-8xl">0</span>
                </div>
                <h3 className="text-xl font-semibold">Premium</h3>
                <p className="mb-5">Coba secara gratis</p>
                <Link
                  href={helper.whatsapp(
                    `Saya ingin coba 1 tahun ${process.env.NEXT_PUBLIC_APP_URL_FRONTEND}`
                  )}>
                  <Button
                    variant="secondary"
                    className="w-full lg:!px-5">
                    <UserPlus /> Daftar Sekarang
                  </Button>
                </Link>
                <ul
                  role="list"
                  className="mt-5 tracking-tight text-base divide-y divide-slate-50/10 text-slate-50 [&_svg]:fill-slate-50">
                  <List item="1 Tahun" />
                  <List item="Produk Tanpa Batas" />
                  <List item="Invoice Tanpa Batas" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

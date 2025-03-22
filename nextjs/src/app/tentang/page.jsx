import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import DefaultBaner from "@/components/other/DefaultBaner";
import Image from "next/image";
import updateMetadata from "@/lib/meta";
import Footer from "@/components/footer/Footer";

const pageTitle = "Tentang";

export const metadata = updateMetadata({
  title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  openGraph: {
    title: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.APP_NAME}`,
  },
});

export default function page() {
  return (
    <>
      <NavbarLandingPage page={pageTitle} />
      <DefaultBaner page={`${pageTitle} Kami`} />
      <div className="custom-container">
        <div className="-z-1 lg:z-1 relative flex flex-col items-center mx-auto lg:flex-row lg:mt-12">
          <div className="w-full h-72 sm:h-80 lg:h-[580px] lg:w-1/2 rounded-t-lg shadow-md sm:rounded-lg overflow-hidden">
            <Image
              className="h-full lg:max-h-[700px] w-full object-cover -scale-x-100 object-right"
              src="/image/tentang.jpg"
              alt="tentang kami"
              width={1500}
              height={700}
            />
          </div>
          <div className="max-w-full mt-0 sm:-mt-10 lg:mt-0 sm:!mx-5 lg:!mr-0 bg-white sm:max-w-2xl lg:max-w-full z-10 shadow-lg lg:absolute lg:w-3/5 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 rounded-b-lg sm:rounded-lg">
            <div className="flex flex-col p-8 md:p-16">
              <h2 className="subtitle">Buat & Cetak Invoice dengan Mudah</h2>
              <p className="mt-4">
                {process.env.NEXT_APP_PUBLIC_NAME} adalah solusi praktis untuk
                membuat dan mencetak invoice dengan cepat. Dirancang untuk
                bisnis dari skala kecil hingga besar, platform ini memudahkan
                pengguna dalam menghasilkan faktur profesional tanpa kesulitan.
                Dengan fitur otomatisasi, Anda dapat menginput detail pelanggan,
                menyesuaikan produk, dan mencetak atau mengunduh invoice hanya
                dalam beberapa klik.
              </p>
              <p className="mt-4">
                Selain kemudahan penggunaan, {process.env.NEXT_APP_PUBLIC_NAME}{" "}
                juga menawarkan fleksibilitas dalam menyesuaikan desain faktur
                sesuai kebutuhan bisnis Anda. Dengan sistem yang responsif dan
                user-friendly, Anda dapat mengelola transaksi lebih efisien,
                menghemat waktu, dan meningkatkan profesionalisme dalam setiap
                pembayaran yang Anda proses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

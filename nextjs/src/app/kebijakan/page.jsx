import NavbarLandingPage from "../../components/navbar/NavbarLandingPage";
import DefaultBaner from "../../components/other/DefaultBaner";
import Image from "next/image";
import updateMetadata from "../../lib/meta";
import Footer from "@/components/footer/Footer";
import helper from "@/lib/helper";

const pageTitle = "Kebijakan";

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
      <NavbarLandingPage pageTitle={pageTitle} />
      <DefaultBaner pageTitle={pageTitle} />
      <div className="custom-container">
        <div className="-z-1 lg:z-1 relative flex flex-col items-center lg:items-start mx-auto lg:flex-row lg:mt-12">
          <div className="w-full h-72 sm:h-80 lg:h-[580px] lg:w-1/2 rounded-t-lg shadow-md sm:rounded-lg overflow-hidden">
            <Image
              className="h-full lg:max-h-[700px] w-full object-cover -scale-x-100 object-right"
              src="/image/tentang.jpg"
              alt="tentang kami"
              width={1500}
              height={700}
            />
          </div>
          <div className="max-w-full mt-0 sm:-mt-10 lg:mt-0 sm:!mx-5 lg:!mr-0 bg-white sm:max-w-2xl lg:max-w-full z-10 shadow-lg lg:absolute lg:w-3/5 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 rounded-b-lg sm:rounded-lg lg:max-h-[500px] p-8 md:p-16 lg:pr-0">
            <div className="flex flex-col lg:pr-16 lg:overflow-y-auto lg:max-h-[calc(500px-128px)]">
              <h2 className="subtitle">Kebijakan Privasi</h2>
              <p className="mt-4">
                Selamat datang di {process.env.NEXT_APP_PUBLIC_NAME}! Kami
                berkomitmen untuk melindungi privasi dan keamanan data pengguna
                kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan,
                menggunakan, dan melindungi informasi Anda saat menggunakan
                layanan kami.
              </p>
              <h3 className="my-3 font-bold">
                1. Informasi yang Kami Kumpulkan
              </h3>
              <p>
                Kami dapat mengumpulkan informasi berikut saat Anda menggunakan
                layanan kami:
              </p>
              <ul className="list-disc ml-5">
                <li>
                  <strong>Informasi Pribadi:</strong> Nama, alamat email, dan
                  informasi kontak lainnya yang Anda berikan saat mendaftar atau
                  menghubungi kami.
                </li>
                <li>
                  <strong>Data Invoice:</strong> Informasi terkait faktur
                  seperti nama pelanggan, rincian transaksi, dan jumlah
                  pembayaran.
                </li>
                <li>
                  <strong>Informasi Teknis:</strong> Alamat IP, jenis perangkat,
                  dan aktivitas penggunaan di situs kami
                </li>
              </ul>

              <h3 className="my-3 font-bold">2. Penggunaan Informasi</h3>
              <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul>
                <li>
                  Memproses dan membuat invoice sesuai permintaan pengguna.
                </li>
                <li>Mengelola akun dan memberikan dukungan pelanggan.</li>
                <li>Meningkatkan pengalaman pengguna dan keamanan sistem.</li>
                <li>
                  Mengirimkan pembaruan atau penawaran yang relevan (opsional).
                </li>
              </ul>

              <h3 className="my-3 font-bold">3. Perlindungan Data</h3>
              <p>
                Kami menerapkan langkah-langkah keamanan untuk melindungi
                informasi Anda dari akses, penggunaan, atau pengungkapan yang
                tidak sah. Data sensitif seperti informasi pembayaran dienkripsi
                untuk memastikan keamanannya.
              </p>

              <h3 className="my-3 font-bold">4. Berbagi Informasi</h3>
              <p>
                Kami tidak menjual, menyewakan, atau membagikan data pribadi
                Anda kepada pihak ketiga tanpa izin, kecuali diperlukan oleh
                hukum atau untuk keperluan operasional layanan (misalnya
                penyedia pembayaran).
              </p>

              <h3 className="my-3 font-bold">5. Hak Pengguna</h3>
              <p>
                Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
                informasi pribadi Anda kapan saja. Silakan hubungi kami jika
                Anda ingin melakukan perubahan pada data Anda.
              </p>

              <h3 className="my-3 font-bold">6. Perubahan Kebijakan</h3>
              <p>
                Kami dapat memperbarui kebijakan ini sewaktu-waktu untuk
                mencerminkan perubahan layanan atau peraturan hukum. Kami akan
                memberi tahu pengguna tentang pembaruan signifikan melalui email
                atau pemberitahuan di situs web.
              </p>

              <h3 className="my-3 font-bold">7. Hubungi Kami</h3>
              <p>
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini,
                silakan hubungi kami di:
              </p>
              <p>
                <strong>Whatsapp:</strong> {helper.telephone()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Cta from "@/components/home/Cta";
import Baner from "@/components/home/Baner";
import NavbarLandingPage from "@/components/navbar/NavbarLandingPage";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <NavbarLandingPage page="Beranda" />
      <Baner />
      <Cta />
      <Footer />
    </>
  );
}

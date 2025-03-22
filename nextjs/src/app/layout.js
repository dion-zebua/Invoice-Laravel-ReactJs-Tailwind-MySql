import { Poppins } from "next/font/google";
import "./globals.css";
import updateMetadata from "@/lib/meta";
import { Toaster } from "@/components/ui/sonner";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata = updateMetadata


export default function RootLayout({ children }) {

  return (
    <html lang="id">
      <body className={`${poppins.className} md:overflow-y-auto text-slate-800 overflow-x-visible`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

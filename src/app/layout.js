import { Poppins } from "next/font/google";
import "./globals.css";
import updateMetadata from "@/lib/meta";
import { Toaster } from "sonner";
import { SessionProvider } from "@/context/SessionContext";
import { getSession } from "@/lib/session";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata = updateMetadata

export default async function RootLayout({ children }) {
  const session = await getSession()

  return (
    <html lang="id">
      <body className={`${poppins.className} md:overflow-y-auto text-slate-800 overflow-x-visible`}>
        <SessionProvider initialData={session}>
          {children}
        </SessionProvider>
        <Toaster position="bottom-right" richColors offset={{ bottom: '16px', left: "16px" }} closeButton />
      </body>
    </html>
  );
}

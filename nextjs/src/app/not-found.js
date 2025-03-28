import NotFound from "@/components/other/NotFound";
import updateMetadata from "@/lib/meta";

const pageTitle = "Tidak Ditemukan";

export const metadata = updateMetadata({
    title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    openGraph: {
        title: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
        desc: `Halaman ${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    },
});

export default async function PageNotFound() {
    return <>
        <NotFound />
    </>
}

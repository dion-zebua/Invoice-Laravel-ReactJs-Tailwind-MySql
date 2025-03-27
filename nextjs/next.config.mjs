// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // devIndicators: true,
//     // experimental: {
//     //     turboMode: false,
//     // },
// };

// export default nextConfig;

import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true, // Menggunakan SWC untuk mempercepat build
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production', // Hapus console.log di production
    },
});

export default withBundleAnalyzer({
    reactStrictMode: true,
});

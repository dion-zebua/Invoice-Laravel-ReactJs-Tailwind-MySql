/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    compiler: {
        removeConsole: process.env.NODE_ENV == 'production',
    },
};

export default nextConfig;



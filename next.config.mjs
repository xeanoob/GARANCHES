/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.sumup.com',
            },
            {
                protocol: 'https',
                hostname: '**.sumupusercontent.com',
            }
        ],
    },
};

export default nextConfig;

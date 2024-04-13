/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3-alpha-sig',
            }
        ]
    }
};

export default nextConfig;

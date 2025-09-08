import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scoutnetworkblog.com',
            },
            {
                protocol: 'https',
                hostname: 'pexels.com',
            },
        ],
    },
};

export default nextConfig;

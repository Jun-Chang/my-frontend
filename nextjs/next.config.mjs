/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //remotePatterns: [{}hh'source.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            }
        ],
    }
};

export default nextConfig;

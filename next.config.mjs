/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
    },
    experimental: {
        optimizePackageImports: ['gsap', 'three'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            // Exclude GSAP plugins from server-side bundle
            config.externals = config.externals || [];
            config.externals.push({
                'gsap/ScrollSmoother': 'commonjs gsap/ScrollSmoother',
                'gsap/SplitText': 'commonjs gsap/SplitText',
            });
        }
        return config;
    },
    // Ensure client-side only code runs only on client
    transpilePackages: ['gsap'],
};

export default nextConfig;

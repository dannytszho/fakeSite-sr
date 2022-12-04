/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        if (!config.experiments) {
            config.experiments = {}
        }
        config.experiments.topLevelAwait = true
        return config
    },
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.vimeocdn.com',
                port: '',
                pathname: '/video/**',
            },
        ],
    },
}

module.exports = nextConfig

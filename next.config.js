/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // 排除子目录中的旧项目，避免构建冲突
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./ai-portfolio/**'],
    },
  },
}

module.exports = nextConfig

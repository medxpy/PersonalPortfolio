/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo   = 'PersonalPortfolio'

const nextConfig = {
  output: 'export',                               
  basePath:    isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
}

module.exports = nextConfig

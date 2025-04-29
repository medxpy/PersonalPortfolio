/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo   = 'PersonalPortfolio'

module.exports = {
  // enables static HTML export
  output:       'export',
  // prefix every route under /PersonalPortfolio
  basePath:     isProd ? `/${repo}`  : '',
  // load CSS/JS/assets from /PersonalPortfolio/_next/
  assetPrefix:  isProd ? `/${repo}/` : '',
  // use folder-based routing so GH-Pages can serve routes
  trailingSlash:true,
  // disable built-in image optimization (won’t work on static export)
  images:       { unoptimized: true },
}

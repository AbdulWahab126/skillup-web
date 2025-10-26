/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  images: {
    domains: ['images.unsplash.com']
  }
}

export default nextConfig

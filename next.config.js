/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:1337", "localhost", "images.ctfassets.net","images.contentstack.io","uicoe.vercel.app","dev-drupal-headless-legal.pantheonsite.io"]
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.rosena.ir','www.mehrdadshirvan.ir','*.*'],
  },
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    }
  }
}

module.exports = nextConfig

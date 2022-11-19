/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["github.com", "img.youtube.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");

/** eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-base",
  "web3",
  "@solana/wallet-adapter-phantom",
  "@solana/wallet-adapter-react",
  "@solana/wallet-adapter-solflare",
  "@solana/wallet-adapter-wallets",
]);

const plugins = [
  [
    withTM,
    {
      webpack5: true,
      reactStrictMode: true,
    },
  ],
];

const env = Object.keys(process.env).reduce(function (o, k) {
  o["process.env." + k] = JSON.stringify(process.env[k]);
  return o;
}, {});

const nextConfig = {
  distDir: "build",
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["i.pravatar.cc"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      // FIX this
      // Disable minimize to make it work with Candy Machine template
      // minimization brakes Public Key names
      config.optimization.minimize = false;
    }
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
};

module.exports = withPlugins(plugins, nextConfig);

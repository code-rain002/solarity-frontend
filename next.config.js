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
  // "@project-serum/sol-wallet-adapter",
  // "@solana/wallet-adapter-slope",
  // "@solana/wallet-adapter-bitkeep",
  // "@solana/wallet-adapter-bitpie",
  // "@solana/wallet-adapter-blocto",
  // "@solana/wallet-adapter-clover",
  // "@solana/wallet-adapter-coin98",
  // "@solana/wallet-adapter-coinhub",
  // "@solana/wallet-adapter-ledger",
  // "@solana/wallet-adapter-mathwallet",
  // "@solana/wallet-adapter-react-ui",
  // "@solana/wallet-adapter-safepal",
  // "@solana/wallet-adapter-sollet",
  // "@solana/wallet-adapter-solong",
  // "@solana/wallet-adapter-tokenpocket",
  // "@solana/wallet-adapter-torus",
  "three",
  "@react-three/drei"
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

const nextConfig = {
  distDir: "build",
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["i.pravatar.cc", "arweave.net", "www.arweave.net", "res.cloudinary.com", "solarity.club", "solarity.mypinata.cloud", "solrarity.club"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.alias = {
        ...config.resolve.alias,
        "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
        "react/jsx-runtime": "react/jsx-runtime.js"
      }
      // FIX this
      // Disable minimize to make it work with Candy Machine template
      // minimization brakes Public Key names
      config.optimization.minimize = false;
    }
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }));
    return config;
  },
};

module.exports = withPlugins(plugins, nextConfig);

// Polyfill: Node.js 25+ has a partial localStorage without getItem/setItem.
// This must run before any SSR code tries to use localStorage.
if (typeof globalThis.localStorage !== 'undefined' && typeof globalThis.localStorage.getItem !== 'function') {
  const _store = {};
  globalThis.localStorage = {
    getItem(key) { return _store[key] ?? null; },
    setItem(key, value) { _store[key] = String(value); },
    removeItem(key) { delete _store[key]; },
    clear() { Object.keys(_store).forEach(k => delete _store[k]); },
    get length() { return Object.keys(_store).length; },
    key(i) { return Object.keys(_store)[i] ?? null; },
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

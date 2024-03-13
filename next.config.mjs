/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
    remotePatterns: [
      { hostname: "chnxuqxmhl1nppan.public.blob.vercel-storage.com" },
      { hostname: "public.blob.vercel-storage.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "abs.twimg.com" },
      { hostname: "pbs.twimg.com" },
      { hostname: "avatar.vercel.sh" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "www.google.com" },
      { hostname: "flag.vercel.app" },
      { hostname: "illustrations.popsy.co" },
      { hostname: "images.unsplash.com" },
      { hostname: "firebasestorage.googleapis.com" },
    ],
  },
};

export default nextConfig;

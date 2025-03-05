/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "i.panelinha.com.br" }, { hostname: "drive.google.com" }],
      },
};

export default nextConfig;
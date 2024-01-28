/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'https://flowbite.s3.amazonaws.com/',
    }, ],
  },
}

module.exports = nextConfig
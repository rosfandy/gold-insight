/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        REACT_APP_HOST: process.env.REACT_APP_HOST,
        FLASK_APP_HOST: process.env.FLASK_APP_HOST,
    }
};

export default nextConfig;

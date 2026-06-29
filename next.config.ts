import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Content Security Policy - Prevent XSS and injection attacks
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://connect.facebook.net
                https://www.googleadservices.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self' data:;
              connect-src 'self'
                https://www.google-analytics.com
                https://region1.google-analytics.com
                https://www.facebook.com
                https://web3forms.com;
              frame-ancestors 'self';
              base-uri 'self';
              form-action 'self' https://web3forms.com;
            `
              .replace(/\s+/g, " ")
              .trim(),
          },
          // Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Prevent MIME sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Enable browser XSS protection
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Control browser features/permissions
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // HSTS - Force HTTPS on Vercel (production-ready)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // CORS headers - Restrict to domain
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.URL_DOMAIN_JMWEB || "https://yourdomain.com",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-Requested-With",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { Metadata } from "next";
import { Inter, Montserrat, Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

// Fuentes optimizadas por Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Metadata para SEO + preview en WhatsApp/redes
export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL_DOMAIN || "https://quantyads.com"),
  title: "Quanty Ads — Escalamos negocios con data",
  description:
    "Agencia de Paid Media en Córdoba. Meta Ads, Google Ads y TikTok Ads orientados a resultados reales.",
  openGraph: {
    title: "Quanty Ads — Escalamos negocios con data",
    description: "Agencia de Paid Media orientada a performance y resultados reales.",
    type: "website",
    locale: "es_AR",
    siteName: "Quanty Ads",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quanty Ads — Agencia de Paid Media",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${bebas.variable} ${dmSans.variable}`}>
      <head>
        {/* 🏷️ Google Tag Manager - Head */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="gtm-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}

        {/* 📊 Google Analytics 4 Script */}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-body bg-white text-dark">
        {/* 🏷️ Google Tag Manager - Noscript */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}

        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
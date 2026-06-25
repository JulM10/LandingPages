import type { Metadata } from "next";
import { Inter, Montserrat, Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import { seoMetadata } from "@/config/client.config";

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
  metadataBase: new URL(process.env.URL_DOMAIN_JMWEB || "https://maderowebs.com.ar"),
  title: seoMetadata.title,
  description: seoMetadata.description,
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    type: "website",
    locale: seoMetadata.locale,
    siteName: seoMetadata.siteName,
    images: [
      {
        url: seoMetadata.ogImage,
        width: seoMetadata.ogImageWidth,
        height: seoMetadata.ogImageHeight,
        alt: seoMetadata.alt,
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
    <html lang="es_AR" className={`${inter.variable} ${montserrat.variable} ${bebas.variable} ${dmSans.variable}`}>
      <head>
        {/* 🏷️ Google Tag Manager - Head */}
        {process.env.NEXT_PUBLIC_GTM_ID_JMWEB && (
          <Script
            id="gtm-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID_JMWEB}');`,
            }}
          />
        )}

        {/* 📊 Google Analytics 4 Script */}
        {process.env.NEXT_PUBLIC_GA4_ID_JMWEB && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID_JMWEB}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID_JMWEB}');
                `,
              }}
            />
          </>
        )}

        {/* 📱 Meta Pixel Script */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID_JMWEB && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID_JMWEB}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body className="font-body bg-white text-dark">
        {/* 🏷️ Google Tag Manager - Noscript */}
        {process.env.NEXT_PUBLIC_GTM_ID_JMWEB && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID_JMWEB}`}
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
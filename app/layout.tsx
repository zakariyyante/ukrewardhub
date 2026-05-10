import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UK Reward Hub | Best UK Casino Reviews & Bonuses",
  description: "Expert reviews of the best UK casino sites. Find exclusive bonuses, rapid payouts, and licensed platforms. Your premier casino review hub.",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/ukrewardhub.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const GA_MEASUREMENT_ID = "AW-18125330729";
const CONVERSION_LABEL = "XbQgCNqJyqUcEKmy6sJD";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        {/* Google Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            // Page view conversion
            gtag('event', 'conversion', {
                'send_to': '${GA_MEASUREMENT_ID}/${CONVERSION_LABEL}',
                'value': 1.0,
                'currency': 'USD'
            });
            
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  // window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${GA_MEASUREMENT_ID}/${CONVERSION_LABEL}',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

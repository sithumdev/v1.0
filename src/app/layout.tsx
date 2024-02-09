import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { PERSONAL_DETAILS } from "./data/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: PERSONAL_DETAILS.name,
  description: "Made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CKNLK5RPTZ"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-CKNLK5RPTZ');`}
      </Script>
    </html>
  );
}

import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "xdcoderz | Aditya Sharma",
  description:
    "I am Aditya Sharma, aka xdcoder. I build intelligent backend systems, secure APIs, automation workflows, and production-ready AI products.",
  metadataBase: new URL("https://xdcoderz.dev"),
  openGraph: {
    title: "xdcoderz | Aditya Sharma",
    description:
      "I build intelligent systems, secure APIs, automation workflows, and production-ready AI products.",
    type: "website",
  },
};

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("xdcoder-theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
      document.documentElement.dataset.theme = savedTheme || systemTheme;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} ${barlowCondensed.variable}`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}

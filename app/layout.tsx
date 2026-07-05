import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
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
    "AI and backend engineering by Aditya Sharma: computer vision, secure APIs, automation, and systems designed beyond the happy path.",
  metadataBase: new URL("https://xdcoderz.dev"),
  openGraph: {
    title: "xdcoderz | Aditya Sharma",
    description:
      "Computer vision, backend architecture, automation, and product engineering designed for real operational constraints.",
    type: "website",
  },
};

const themeScript = `
  (() => {
    const themeKey = "xdcoder-theme";

    const getTheme = () => {
      const savedTheme = localStorage.getItem(themeKey);
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }

      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    };

    const applyTheme = (theme, persist = false) => {
      const root = document.documentElement;
      root.classList.add("theme-switching");
      root.dataset.theme = theme;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.remove("theme-switching");
        });
      });

      if (persist) {
        try {
          localStorage.setItem(themeKey, theme);
        } catch {
          // Theme switching should still work when storage is unavailable.
        }
      }

    };

    try {
      applyTheme(getTheme());
    } catch {
      document.documentElement.dataset.theme = "dark";
    }

    document.addEventListener("DOMContentLoaded", () => {
      applyTheme(document.documentElement.dataset.theme || "dark");
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const themeToggle = target.closest("[data-theme-toggle]");
      if (themeToggle) {
        const currentTheme =
          document.documentElement.dataset.theme === "light" ? "light" : "dark";
        applyTheme(currentTheme === "dark" ? "light" : "dark", true);
      }

      const mobileMenu = document.querySelector("[data-mobile-menu]");
      if (!(mobileMenu instanceof HTMLDetailsElement) || !mobileMenu.open) {
        return;
      }

      const mobileMenuLink = target.closest("[data-mobile-menu-link]");
      if (mobileMenuLink) {
        const href = mobileMenuLink.getAttribute("href");
        event.preventDefault();
        mobileMenu.open = false;

        if (href?.startsWith("#")) {
          requestAnimationFrame(() => {
            const section = document.querySelector(href);
            if (section) {
              window.history.pushState(null, "", href);
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          });
        }

        return;
      }

      if (!mobileMenu.contains(target)) {
        mobileMenu.open = false;
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      const mobileMenu = document.querySelector("[data-mobile-menu]");
      if (mobileMenu instanceof HTMLDetailsElement) {
        mobileMenu.open = false;
      }
    });
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} ${barlowCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

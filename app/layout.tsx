import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "H&H Construction | Commercial Concrete, Asphalt & Metal Buildings",
    template: "%s | H&H Construction",
  },
  description:
    "H&H Construction delivers commercial concrete construction, asphalt paving, and metal building solutions across Oklahoma for contractors, developers, and municipalities.",
  metadataBase: new URL("https://hhbuildok.com"),
  openGraph: {
    title: "H&H Construction | Building Oklahoma's Commercial Infrastructure",
    description:
      "Commercial concrete, asphalt paving, and metal buildings & roofing across Oklahoma.",
    url: "https://hhbuildok.com",
    siteName: "H&H Construction",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-surface"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

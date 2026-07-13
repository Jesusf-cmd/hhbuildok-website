import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { nap, siteConfig, services, serviceAreaCities } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "H&H Construction | Commercial Concrete, Asphalt & Metal Buildings",
    template: "%s | H&H Construction",
  },
  description:
    "H&H Construction delivers commercial concrete construction, asphalt paving, and metal building solutions across Oklahoma for contractors, developers, and municipalities.",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "H&H Construction | Building Oklahoma's Commercial Infrastructure",
    description:
      "Commercial concrete, asphalt paving, and metal buildings & roofing across Oklahoma.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H&H Construction | Building Oklahoma's Commercial Infrastructure",
    description:
      "Commercial concrete, asphalt paving, and metal buildings & roofing across Oklahoma.",
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: nap.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hh-construction-logo.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street} ${siteConfig.address.suite}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Oklahoma" },
      ...serviceAreaCities.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${siteConfig.url}${service.href}`,
        },
      })),
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
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

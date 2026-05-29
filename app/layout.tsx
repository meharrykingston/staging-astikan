import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "aos/dist/aos.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://astikan.com"),
  title: {
    default: "Astikan Health | Complete Digital Healthcare & Wellness",
    template: "%s | Astikan Health",
  },
  description:
    "Astikan Health provides online doctor consultations, lab tests, medicine delivery, surgery support, insurance guidance, medical finance, healthcare memberships and preventive health packages in India.",
  keywords: [
    "Astikan Health",
    "online doctor consultation India",
    "lab tests Delhi NCR",
    "medicine delivery India",
    "medical finance India",
    "health packages India",
    "surgery support India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Astikan Health | Complete Digital Healthcare & Wellness",
    description:
      "Complete digital healthcare support for doctors, lab tests, medicines, surgeries, insurance, medical finance and preventive health packages.",
    url: "https://astikan.com",
    siteName: "Astikan Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astikan Health | Complete Digital Healthcare & Wellness",
    description: "Complete digital healthcare support for every Indian family.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#171550",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

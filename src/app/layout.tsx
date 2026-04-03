import type { Metadata } from "next";
import { nunito, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sdk.4everforward.net"),
  title: {
    default: "Sunny Kids Dental | Pediatric Dentist in Pomona & Compton, CA",
    template: "%s | Sunny Kids Dental",
  },
  description:
    "5-star rated kids dentist in Pomona and Compton, CA. Fun, gentle dental care for children. Medi-Cal accepted. Se habla español. Call 909-417-5369 today!",
  keywords: [
    "kids dentist Pomona",
    "pediatric dentist Compton CA",
    "children's dentist near me",
    "Medi-Cal dentist Pomona",
    "kids dentist Compton",
    "pediatric dental care",
    "Sunny Kids Dental",
    "Pomona kids dentist",
    "Compton kids dentist",
    "dental exams for children",
    "cavity treatment kids",
    "pediatric sedation dentistry",
    "orthodontic evaluations Pomona"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sunny Kids Dental | Pediatric Dentist in Pomona & Compton, CA",
    description:
      "5-star rated kids dentist. Fun, gentle dental care for children. Medi-Cal accepted. Se habla español.",
    url: "https://sdk.4everforward.net",
    siteName: "Sunny Kids Dental",
    images: [
      {
        url: "https://sdk.4everforward.net/sunnykidsdental.jpg",
        width: 1200,
        height: 630,
        alt: "Sunny Kids Dental",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Kids Dental | Kids Dentist in Pomona & Compton, CA",
    description:
      "5-star rated kids dentist. Fun, gentle dental care for children.",
    images: ["https://sdk.4everforward.net/sunnykidsdental.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] bg-bg-cream text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}

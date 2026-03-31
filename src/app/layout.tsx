import type { Metadata } from "next";
import { nunito, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunny Kids Dental | Pediatric Dentist in Pomona & Compton, CA",
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
  ],
  openGraph: {
    title: "Sunny Kids Dental | Pediatric Dentist in Pomona & Compton, CA",
    description:
      "5-star rated kids dentist. Fun, gentle dental care for children. Medi-Cal accepted. Se habla español.",
    images: ["/sunnykidsdental.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Kids Dental | Kids Dentist in Pomona & Compton, CA",
    description:
      "5-star rated kids dentist. Fun, gentle dental care for children.",
    images: ["/sunnykidsdental.jpg"],
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
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] bg-bg-cream text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}

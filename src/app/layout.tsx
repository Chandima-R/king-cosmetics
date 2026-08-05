import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import AppProviders from "@/components/providers/AppProviders";


import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Green Blue Nature",
    template: "%s | Green Blue Nature",
  },
  description:
    "Natural beauty and wellness products from Green Blue Nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} min-h-screen bg-background font-sans text-body antialiased`}
      >
        <AppProviders>
          <Header />

          <main>{children}</main>

          <Footer />
        </AppProviders>

      </body>
    </html>
  );
}

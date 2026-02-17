import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CO2 Sparhalt - Professionelle Förderberatung für Heizungen",
  description: "Sichern Sie sich bis zu 70% Förderung für Ihre neue Heizung. Professionelle Beratung zu BEG, KfW und KWK-Förderungen von Fuchs Heizungen.",
  keywords: "Heizungsförderung, BEG, KfW, BAFA, Wärmepumpe, Förderberatung, Energieeffizienz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

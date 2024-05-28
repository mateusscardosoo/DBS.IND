import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/page";
import { Media } from "./components/media/page";
import { Band } from "./components/band/page";
import { StreetView } from "./components/street-view/page";
import { Production } from "./components/production/page";
import { AboutUs } from "./components/about-us/page";
import { Customers } from "./components/customers/page";
import FAQ from "./components/faq/page";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['100', '200', '300','400', '500', '600','700', '800', '900',]

});

export const metadata: Metadata = {
  title: "DBS Industria do Amazonas",
  description: "Landind page da DBS Ind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <section className="bg-hero-background bg-cover bg-fixed bg-center h-[900px]" >
        <Header/>
        <Hero/>
        </section>
        <Media/>
        <Band/>
        <StreetView/>
        <Production/>
        <AboutUs/>
        <Customers/>
        <FAQ/>
      

        {children}</body>
    </html>
  );
}

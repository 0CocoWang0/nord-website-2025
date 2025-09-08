import { Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "NORD Consulting",
  description: "Empowering Non-Profits through Data-Driven Consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "animate.css";
import { Poppins, Archivo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: '--font-archivo',
});

export const metadata = {
  title: "KBMH",
  description: "Best In Quality, Best In Service",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${archivo.variable}`}>
        {children}
      </body>
      <Footer />
    </html>
  );
}

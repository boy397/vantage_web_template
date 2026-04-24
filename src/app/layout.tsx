
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Playfair_Display,
  Poppins,
  Space_Grotesk,
  Teko,
  Unbounded,
} from "next/font/google";
import "./globals.scss";
import "swiper/css/bundle";
import { ToastContainer } from "react-toastify";

// Initialize Google Fonts
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-bricolage-grotesque",
  display: "swap",
  axes: ["opsz"],
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Acjon - Digital Agency & Creative Portfolio",
  description: "Next.js template for agencies and portfolios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`
          ${bricolageGrotesque.variable} 
          ${playfairDisplay.variable} 
          ${poppins.variable} 
          ${spaceGrotesk.variable} 
          ${teko.variable} 
          ${unbounded.variable}
        `}
    >
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}


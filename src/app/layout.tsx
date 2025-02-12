import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const PoppinsSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Teman Coding",
  icons: {
    icon: "/Icon.png",
    apple: "/Icon.png",
  },
  description:
    "Kami membuat situs web dan aplikasi web kustom menggunakan teknologi modern seperti Next.js dan React. Solusi kami dirancang untuk ramah pengguna, cepat, dan dioptimalkan untuk SEO.",
  keywords: [
    "Next.js",
    "React",
    "SEO",
    "Web Development",
    "App Creation",
    "JavaScript",
    "Front-End Development",
    "Next.js Tutorial",
    "Responsive Web Design",
    "Website Optimization",
    "Modern Web Technologies",
    "Full Stack Development",
    "User Interface Design",
    "Progressive Web App",
    "SEO Optimization",
    "Web Performance",
    "Web Design Trends",
    "React Components",
    "Web App Development",
    "Next.js Features",
    "Teman",
    "Coding",
    "koding",
    "teman coding",
    "seo",
  ],
  authors: [
    { name: "Teman" },
    { name: "Coding", url: "https://nextjs.org" },
  ],
  robots: "index, follow",
  openGraph: {
    title: "TemanCoding",
    description: "Kami membuat situs web dan aplikasi web kustom menggunakan teknologi modern seperti Next.js dan React. Solusi kami dirancang untuk ramah pengguna, cepat, dan dioptimalkan untuk SEO.",
    url: "https://temancoding.vercel.app/", 
    siteName: "Teman Coding",
    images: [
      {
        url: "/Icon.png",
        width: 1200,
        height: 630,
        alt: "Preview Image for Next App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

export const themeColor = "#000000";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsSans.variable} antialiased`}>
      <Analytics />
      <SpeedInsights/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

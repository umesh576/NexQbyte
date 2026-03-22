import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NexQbyte | Web, App, Marketing & Design Solutions",
    template: "%s | NexQbyte",
  },
  description:
    "NexQbyte helps businesses grow with web design, app design, digital marketing, and graphic design services.",
  keywords: [
    "NexQbyte",
    "web design",
    "app design",
    "digital marketing",
    "graphic design",
    "IT solutions Nepal",
  ],
  openGraph: {
    title: "NexQbyte | Web, App, Marketing & Design Solutions",
    description:
      "Business-focused digital services to improve visibility, engagement, and conversion.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexQbyte | Web, App, Marketing & Design Solutions",
    description:
      "Grow your brand with conversion-driven web, app, marketing, and design services.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

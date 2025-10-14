import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import SimpleLoaderProvider from "@/components/SimpleLoaderProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taha Neffai | Full Stack Developer",
  description: "Portfolio website showcasing my projects, skills, and experience as a Full Stack Developer",
  keywords: ["developer", "portfolio", "full stack", "web development", "react", "next.js"],
  authors: [{ name: "Taha Neffai" }],
  creator: "Taha Neffai",
  openGraph: {
    title: "Taha Neffai | Full Stack Developer",
    description: "Portfolio website showcasing my projects, skills, and experience as a Full Stack Developer",
    url: "https://tahaneffai.com",
    siteName: "Taha Neffai Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Neffai | Full Stack Developer",
    description: "Portfolio website showcasing my projects, skills, and experience",
    creator: "@tahaneffai",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <SimpleLoaderProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </SimpleLoaderProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Taha Neffati | Full Stack Developer",
  description: "Portfolio website showcasing my projects, skills, and experience as a Full Stack Developer",
  keywords: ["developer", "portfolio", "full stack", "web development", "react", "next.js"],
  authors: [{ name: "Taha Neffati" }],
  creator: "Taha Neffati",
  openGraph: {
    title: "Taha Neffati | Full Stack Developer",
    description: "Portfolio website showcasing my projects, skills, and experience as a Full Stack Developer",
    url: "https://tahaneffati.com",
    siteName: "Taha Neffati Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Neffati | Full Stack Developer",
    description: "Portfolio website showcasing my projects, skills, and experience",
    creator: "@tahaneffati",
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
        className={`${poppins.variable} font-sans antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

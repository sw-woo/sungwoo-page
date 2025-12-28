import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sungwoo - AI/ML Developer & Tech Blogger",
  description: "Portfolio and technical blog of Sungwoo, specializing in LangChain, AI/ML, and full-stack development.",
  keywords: ["LangChain", "AI", "Machine Learning", "Next.js", "React", "Portfolio", "Blog"],
  authors: [{ name: "Sungwoo" }],
  openGraph: {
    title: "Sungwoo - AI/ML Developer",
    description: "Portfolio and technical blog",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans antialiased bg-white dark:bg-gray-900">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reda Chmouk - Software Engineer",
  description: "Welcome to my professional portfolio showcasing my work in software engineering and system architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ThemeProvider>
        <body className={inter.className} style={{ backgroundColor: '#EDF4F2' }}>
          <Header />
          <main className="pt-20">
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}

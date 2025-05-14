import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import ThemeWrapper from "@/components/ThemeWrapper";

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
      <body className={inter.className}>
        <ClientThemeProvider>
          <ThemeWrapper>
            <Header />
            <main className="pt-20">
              {children}
            </main>
          </ThemeWrapper>
        </ClientThemeProvider>
      </body>
    </html>
  );
}

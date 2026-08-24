import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitor Luiz.dev",
  description: "Portfólio.dev de Vitor Luiz",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-Br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="flex min-h-full flex-col gap-4 rounded-lg bg-surface px-4 sm:px-6 md:px-8">
          <Header />
          <main className="flex flex-col flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

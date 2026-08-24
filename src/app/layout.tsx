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
  metadataBase: new URL("https://vitorluiz.dev/"),
  title:{ 
    default:"Vitor Luiz | Desenvolvedor Full Stack",
    template: "%s | Vitor Luiz"},
  description: "Portfólio de Vitor Luiz - desenvolvedor Full Stack",

  openGraph: {
    title: "Vitor Luiz | Desenvolvedor Full Stack",
    description: "Portifólio com projetos, stack e contato",
    url: "/",
    siteName: "Vitor Luiz.dev",
    locale: "pt_BR",
    images: [{url: "/public/OG-img.png", width: 1200, height: 630}]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitor Luiz | Desenvolvedor Full Stack",
    description: "Portfólio de Vitor Luiz",
  },
  robots: {index: true, follow: true},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
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

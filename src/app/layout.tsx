import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { FooterHope } from "@/components/FooterHope";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mapleworld.example.com"),
  title: {
    default: "MapleWorld · 温暖开启 · 探险风格",
    template: "%s · MapleWorld",
  },
  description: "MapleWorld · 温柔安全的跨国旅程陪伴，提供留学、志愿者、互惠生、出国工作与移民规划。",
  keywords: [
    "MapleWorld",
    "留学",
    "国际志愿者",
    "互惠生",
    "移民",
    "出国工作",
  ],
  openGraph: {
    title: "MapleWorld · 大世界 · 小探险",
    description:
      "See The World · Live Your Story · MapleWorld 以温柔与安全感陪伴你的全球冒险。",
    url: "https://mapleworld.example.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MapleWorld · 温暖出国",
      },
    ],
  },
  authors: [{ name: "MapleWorld Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      data-theme="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body
        className={`${nunito.variable} bg-transparent text-brand-ink antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1 pt-6">{children}</div>
          <FooterHope />
        </div>
      </body>
    </html>
  );
}

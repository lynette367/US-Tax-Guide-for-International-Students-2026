import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.mapleworld.online"),
  alternates: {
    canonical: "/tools/opt-tax",
  },
  title: {
    default: "MapleWorld - 2026 留学生 OPT 报税与 Form 8843 填写指南",
    template: "%s · MapleWorld",
  },
  description: "MapleWorld · 跨国旅程从我开始，提供留学、志愿者、互惠生、出国工作与移民规划。",
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
      "See The World · Live Your Story · MapleWorld 你的故事，从探索世界开始。",
    url: "https://mapleworld.example.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MapleWorld · 出国探索",
      },
    ],
  },
  authors: [{ name: "MapleWorld Team" }],
  icons:
  {
    icon: '/favicon.ico', // 简单地指向 /public 根目录下的文件
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5JK5TTVP1J"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5JK5TTVP1J');
        `}
      </Script>
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

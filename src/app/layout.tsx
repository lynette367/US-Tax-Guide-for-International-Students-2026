import type { Metadata } from "next";
import Script from "next/script";
import { Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mapleworld.online"),
  title: {
    default: "MapleWorld - 2026 留学生 OPT 报税与 Form 8843 填写指南",
    template: "%s · MapleWorld",
  },
  description: "MapleWorld 为 2026 报税季留学生提供专业的 Form 8843 填写指南及税务工具。",
  keywords: [
    "MapleWorld",
    "2026 报税",
    "Form 8843",
    "留学生",
  ],
  openGraph: {
    title: "MapleWorld - 2026 留学生报税指南",
    description:
      "一站式解决留学生报税难题：Form 8843、W-2 缺失补救及身份自测。",
    url: "https://www.mapleworld.online/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MapleWorld · opt 留学生报税",
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
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/archive/", // 明确禁止抓取存档内容
      },
    ],
    sitemap: "https://www.mapleworld.online/sitemap.xml",
  };
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OPT 报税路径判断工具（8 问）",
  description:
    "面向在美 F1/OPT 的 8 问判断器：给出推荐报税路径与下一步清单。",
  alternates: {
    canonical: "https://www.mapleworld.online/tools/opt-tax",
  },
};

export default function OptTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

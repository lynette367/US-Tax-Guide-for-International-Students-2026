import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OPT 可以用 TurboTax 吗？先判断身份再决定",
  description:
    "决策型页面：先判断你是 Nonresident 还是 Resident，再决定 TurboTax 是否适用。提供 60 秒判断与下一步路径。",
  alternates: {
    canonical: "https://www.mapleworld.online/tools/opt-turbotax",
  },
};

export default function OptTurboTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

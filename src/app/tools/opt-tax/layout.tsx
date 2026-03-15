import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Substantial Presence Test (SPT) 计算器：3分钟判定报税身份 - MapleWorld",
  description:
    "不确定是 NRA 还是 Resident？使用我们的 SPT 自动计算器。专为留学生设计，涵盖 F1 签证 5 年豁免规则，助你精准判定报税身份，避免漏报或报错。",
  keywords: [
    "F1 报税身份自测",
    "OPT 报税路径",
    "1040-NR 判定",
    "Substantial Presence Test 工具",
    "留学生退税",
    "Form 8843 教程",
    "W-2 没收到怎么办",
  ],
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

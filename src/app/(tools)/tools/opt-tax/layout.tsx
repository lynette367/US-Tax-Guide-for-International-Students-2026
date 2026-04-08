import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Substantial Presence Test (SPT) 计算器：3分钟判定报税身份 - MapleWorld",
  description:
    "不确定是 NRA 还是 Resident？使用我们的 SPT 自动计算器。提示：90% 的 OPT 同学都是 Non-Resident，请务必确认你不需要填 1040-NR 再继续。专为留学生设计，助你精准判定报税身份。",
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

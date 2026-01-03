import type { Metadata } from "next";
import { JourneyPageTemplate } from "@/components/JourneyPageTemplate";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImmigrationPage() {
  return (
    <JourneyPageTemplate
      title="移民 · Immigration"
      subtitle="MapleWorld Immigration"
      description="利用多国移民项目经验，为家庭、投资人或技术人才提供透明、安全的身份方案。我们把艰深法律信息转译成手绘步骤，帮助你稳稳落地新家。"
      highlights={["律师顾问", "家庭规划", "资产合规"]}
      steps={[
        {
          title: "资格体检与方向选择",
          detail:
            "梳理资产、职业、语言等情况，输出对比清晰的国家方案与排期推演。",
        },
        {
          title: "资料筹备工作坊",
          detail:
            "线上工作坊形式指导文件准备、翻译认证以及资金路径设计，确保一次通过。",
        },
        {
          title: "官方流程追踪",
          detail:
            "律师团队代为递交并随时同步状态，出现补件需求即时提醒与协助。",
        },
        {
          title: "安家与后续规划",
          detail:
            "落地学校、医疗、租房、税务顾问一站整合，延伸到入籍或身份维持策略。",
        },
      ]}
      contactNote="家庭移民不必焦虑，约见 MapleWorld 移民顾问，听懂每一个时间点应做什么。"
      illustrationPath="/images/immigration/illustration.jpg"
    />
  );
}

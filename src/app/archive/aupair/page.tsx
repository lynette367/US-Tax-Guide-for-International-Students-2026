import type { Metadata } from "next";
import { JourneyPageTemplate } from "@/components/JourneyPageTemplate";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuPairPage() {
  return (
    <JourneyPageTemplate
      title="互惠生 · Au Pair"
      subtitle="MapleWorld Au Pair"
      description="把语言学习、亲子陪伴与文化沉浸揉合在一起。我们筛选温暖家庭并提供法律合规支持，让互惠生旅程成为最美的成长记忆。"
      highlights={["匹配家庭", "语言课堂", "法律支持"]}
      steps={[
        {
          title: "温度匹配问卷",
          detail:
            "了解你的兴趣、饮食、照护经验，搭配家庭背景，确保生活节奏契合。",
        },
        {
          title: "培训与签证打包",
          detail:
            "照护技能课程、文化沟通训练、心理建设，再由律师团队协助签证流程。",
        },
        {
          title: "落地守护",
          detail:
            "抵达后连线顾问，建立支持群组，安排行程体验、语言学校等资源。",
        },
        {
          title: "未来延伸",
          detail:
            "帮助你把互惠经历转化为留学或海外工作加分素材，延伸更多可能性。",
        },
      ]}
      contactNote="写下你梦想陪伴的家庭模样，我们将帮你找到。立即联系 MapleWorld 互惠生顾问。"
      illustrationPath="/images/aupair/illustration.jpg"
    />
  );
}

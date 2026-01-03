import type { Metadata } from "next";
import { JourneyPageTemplate } from "@/components/JourneyPageTemplate";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function VolunteerPage() {
  return (
    <JourneyPageTemplate
      title="国际志愿者 · Global Volunteer"
      subtitle="MapleWorld Volunteer"
      description="跨越大陆的人道、教育、海洋守护任务，用温柔力量回应世界。我们负责安全审核、营地培训与文化融入，陪你在异地完成更好版本的自己。"
      highlights={["主题营地", "多语导师", "安全守护"]}
      steps={[
        {
          title: "选择属于你的使命",
          detail:
            "教育、环境、女性赋权、海洋保护等 20+ 项目，结合时长与技能推荐最合适的目的地。",
        },
        {
          title: "文化与安全培训",
          detail:
            "行前线上课堂 + 文化礼仪手册 + 紧急应对训练，确保每一步都安心。",
        },
        {
          title: "到营地的第一天",
          detail:
            "接机、安置、结伴同伴介绍，一起把日程写进手绘地图，明确每日 Impact。",
        },
        {
          title: "旅程故事回放",
          detail:
            "返回后完成成果展与证书归档，为未来申请或职业发展留下亮眼证据。",
        },
      ]}
      contactNote="想用行动抱拥世界？与 MapleWorld 志愿者顾问聊聊，让热情落地为真实的改变。"
      illustrationPath="/images/volunteer/illustration.jpg"
    />
  );
}

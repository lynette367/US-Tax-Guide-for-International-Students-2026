import type { Metadata } from "next";
import { JourneyPageTemplate } from "@/components/JourneyPageTemplate";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudyPage() {
  return (
    <JourneyPageTemplate
      title="留学 · Study Abroad"
      subtitle="MapleWorld Study"
      description="结合院校洞察与个人故事，打造手绘风申请旅程。从初步评估、选校规划到签证行前，我们陪伴你把梦想学校放进现实行程。"
      highlights={["作品集辅导", "奖学金策略", "行前家长课堂"]}
      steps={[
        {
          title: "梦想地图绘制",
          detail:
            "深度访谈 + 学术背景诊断，产出 3 条进阶方案，包括备选国家与课程结构。",
        },
        {
          title: "作品集与文书共创",
          detail:
            "联合导师与编辑团队，建立创意板、故事线以及视觉呈现手册，形成独特声音。",
        },
        {
          title: "申请与面试陪伴",
          detail:
            "教你用插画笔记搞定繁琐表格，模拟面试表达，并同步发出状态提醒。",
        },
        {
          title: "签证与行前守护",
          detail:
            "提供签证资料校对、住宿衔接、接机安排与抵达后的生活手册。",
        },
      ]}
      contactNote="把成绩单、作品、故事交给我们，你负责全力向往。现在就联系 MapleWorld 顾问，获得专属留学手绘攻略。"
      illustrationPath="/images/study/illustration.jpg"
    />
  );
}

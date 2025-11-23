import { JourneyPageTemplate } from "@/components/JourneyPageTemplate";

export default function WorkPage() {
  return (
    <JourneyPageTemplate
      title="出国工作 · Work Abroad"
      subtitle="MapleWorld Career"
      description="面向创意、科技、服务与教育行业，MapleWorld 提供工作匹配、签证策略与落地支持，让职业移动变得柔软而笃定。"
      highlights={["雇主资源", "签证通道", "落地安家"]}
      steps={[
        {
          title: "职业画像与目标国家",
          detail:
            "评估技能、语言与期望，推荐最适签证类型并规划时间线，以插画路线展示全局。",
        },
        {
          title: "雇主与面试指导",
          detail:
            "对接合作企业与猎头，重塑履历与作品集，进行跨文化面试彩排。",
        },
        {
          title: "签证与合规协办",
          detail:
            "与律所协作准备材料，审阅劳动合同、福利条款与保险方案，确保合法权益。",
        },
        {
          title: "落地与社群",
          detail:
            "安排临时住宿、银行开户、社保注册，并邀请加入 MapleWorld 城市社群。",
        },
      ]}
      contactNote="分享你的职业梦想，我们将提供透明的路径图与贴身顾问陪伴。"
      illustrationPath="/images/work/illustration.jpg"
    />
  );
}

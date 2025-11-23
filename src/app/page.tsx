import Link from "next/link";
import { ServiceCardHope } from "@/components/ServiceCardHope";
import { WhyUsHope } from "@/components/WhyUsHope";
import { BrandStoryHope } from "@/components/BrandStoryHope";
import Traveler from "@/components/illustrations/Traveler";
import Airplane from "@/components/illustrations/Airplane";
import Cloud from "@/components/illustrations/Cloud";
import WorldMap from "@/components/illustrations/WorldMap";

const hopeServices = [
  {
    title: "留学",
    subtitle: "用温柔的方式，把梦想学校变成现实。",
    href: "/study",
  },
  {
    title: "国际志愿者",
    subtitle: "在远方留下善意，也让世界在你心里留下光。",
    href: "/volunteer",
  },
  {
    title: "互惠生",
    subtitle: "在陪伴孩子长大的过程中，让自己也慢慢长大。",
    href: "/aupair",
  },
  {
    title: "出国工作",
    subtitle: "工作不是逃离，而是走向更好的自己。",
    href: "/work",
  },
  {
    title: "移民",
    subtitle: "把家的方向，重新定义成你想要的未来。",
    href: "/immigration",
  },
];

export default function Home() {
  return (
    <main className="pb-0">
      {/* Hero 第一屏 */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#F7C6D9] bg-paper px-4 py-8 sm:py-12 text-brand-ink">
        <WorldMap />
        <div className="pointer-events-none absolute inset-0 bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-brand-pink/60" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-4 sm:gap-6 text-center px-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-ink/70">
            MapleWorld
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-brand-ink">
            See The World · Live Your Story
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-brand-ink/70">
            <span className="block">世界很大，你值得被温柔地迎接。</span>
            <span className="mt-2 block">
              MapleWorld · 让每一段出发都带着故事与希望。
            </span>
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4 text-sm font-semibold mt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-brand-pinkdeep px-8 py-3 text-white shadow-[0_25px_60px_rgba(200,127,155,0.45)] transition hover:bg-brand-pinkhover"
            >
              和顾问聊聊你的未来
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto rounded-full border border-brand-ink/30 bg-white/70 px-8 py-3 text-brand-ink transition hover:bg-white"
            >
              看看我可以从哪里开始
            </Link>
          </div>
        </div>

        {/* 插画 - 移动端缩小 */}
        <div className="pointer-events-none absolute bottom-0 left-[5%] w-[40%] max-w-[130px] sm:w-auto sm:max-w-[220px]">
          <Traveler />
        </div>

        <div className="pointer-events-none absolute right-[10%] top-[10%] hidden sm:block">
          <div className="airplane-glide">
            <Airplane />
          </div>
        </div>

        <div className="pointer-events-none absolute right-[12%] top-1/2 hidden sm:block">
          <div className="cloud-float-fast">
            <Cloud />
          </div>
        </div>
        <div className="pointer-events-none absolute left-[12%] top-[15%] hidden sm:block">
          <div className="cloud-float-slow">
            <Cloud />
          </div>
        </div>
      </section>

      {/* 第二屏：服务卡片 */}
      <section className="px-4 py-12 sm:py-16 lg:py-20 mt-8 sm:mt-12" id="services">
        <div className="mx-auto flex max-w-[68.75rem] flex-col items-center gap-2 sm:gap-3 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
            Our Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
            从这里开始你的故事
          </h2>
        </div>
        <div className="mx-auto mt-6 sm:mt-8 grid w-full max-w-[68.75rem] gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {hopeServices.map((service) => (
            <ServiceCardHope key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* 第三屏：Why MapleWorld */}
      <div className="mt-8 sm:mt-12">
        <WhyUsHope />
      </div>

      {/* 第四屏：品牌故事 */}
      <div className="mt-8 sm:mt-12">
        <BrandStoryHope />
      </div>

      {/* 第五屏：联系我们 */}
      <section className="px-4 pt-12 sm:pt-16 lg:pt-20 pb-0 mt-8 sm:mt-12">
        <div className="mx-auto max-w-4xl rounded-[24px] sm:rounded-[32px] border border-brand-pink/30 bg-white/90 p-6 sm:p-10 md:p-12 text-center text-brand-ink shadow-[0_15px_60px_rgba(244,185,200,0.35)]">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/60">
            联系我们
          </p>
          <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-semibold">
            想被理解的故事，就写信给 MapleWorld
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-brand-ink/75">
            分享你的出发梦想或正在犹豫的选择，我们会用一封温柔的回信告诉你接下来的每一步。
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col w-full items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 text-sm font-semibold">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-brand-pinkdeep px-8 py-3 text-white shadow-[0_20px_60px_rgba(200,127,155,0.45)] transition hover:bg-brand-pinkhover"
            >
              和顾问聊聊你的未来
            </Link>
            <Link
              href="/study"
              className="w-full sm:w-auto rounded-full border border-brand-ink/20 bg-white/80 px-8 py-3 text-brand-ink transition hover:bg-white"
            >
              看看我可以从哪里开始
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

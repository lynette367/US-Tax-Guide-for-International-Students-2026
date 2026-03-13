import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "1042-S 攻略", href: "/1042-vs-1042-s" },
  { label: "报税倒计时", href: "/tax-deadlines-2026" },
  { label: "NRA 身份自测", href: "/tools/opt-tax" },
];

const seoKeywords = [
  "IRS Form 8843",
  "Non-Resident Alien Tax",
  "F1 OPT Tax Return",
  "International Student Tax Guide",
  "1040-NR filing",
  "Tax Treaty USA China",
];

export function Footer() {
  return (
    <footer id="footer" className="relative mt-20 px-4 pb-12">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-brand-pink/20 bg-brand-pink/10 p-8 shadow-[0_25px_60px_rgba(247,198,217,0.2)] backdrop-blur-xl sm:p-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-ink/50">
                MapleWorld
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                专业、精准、合规、守护
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                专注为全球梦想家提供专业的美国税务合规工具。由留学生为留学生打造，致力于消除跨境税务信息差，守护每一份在美身份。
              </p>
            </div>
            
            <div className="flex">
              <div className="flex flex-col items-start gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-pinkdeep">
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-brand-pinkdeep" />
                  扫码进行 2026 留学生报税咨询
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 p-2 shadow-sm transition hover:scale-[1.02]">
                  <Image
                    src="/images/2026-us-tax-help-qr.webp"
                    alt="2026 留学生报税互助群二维码 - MapleWorld"
                    width={100}
                    height={100}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-ink/40">
              快速入口 / Quick Links
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[480px]">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-center rounded-full border border-white/80 bg-white/60 px-6 py-4 text-sm font-bold text-brand-ink shadow-sm transition hover:scale-[1.05] hover:bg-white hover:text-brand-pinkdeep hover:shadow-lg active:scale-95"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8 border-t border-brand-ink/5 pt-10">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-widest text-brand-ink/30">
            {seoKeywords.map((keyword) => (
              <span key={keyword} className="transition-colors hover:text-brand-pinkdeep cursor-default">
                {keyword}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="max-w-2xl text-center text-[10px] font-medium leading-relaxed tracking-wide text-brand-ink/40">
              免责声明：本站非 CPA/EA 执业服务，不提供代报代填或法律建议。内容仅供参考，具体以 IRS 及各州税务局官方说明为准。
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-ink/30">
              © {new Date().getFullYear()} MapleWorld Compliance Engineering. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

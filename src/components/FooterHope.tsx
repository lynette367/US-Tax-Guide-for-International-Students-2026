import Link from "next/link";

const links = [
  { label: "留学 Study", href: "/study" },
  { label: "国际志愿者 Volunteer", href: "/volunteer" },
  { label: "互惠生 Au Pair", href: "/aupair" },
  { label: "出国工作 Work Abroad", href: "/work" },
  { label: "移民 Immigration", href: "/immigration" },
  { label: "联系我们 Contact", href: "/contact" },
];

export function FooterHope() {
  return (
    <footer className="mt-24 bg-brand-warmwhite px-4 pt-16 pb-10">
      <div className="mx-auto flex max-w-[68.75rem] flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-ink/50">
            MAPLEWORLD
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-brand-ink">
            温柔 · 安全 · 希望 · 陪伴
          </h3>
          <p className="mt-4 text-sm text-brand-ink/70 leading-relaxed">
            MapleWorld 相信，每一段走向世界的旅程，都值得被认真对待。
            我们用温柔的方式陪你走过那些不确定的时刻。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
          {links.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-xl border border-brand-pink/20 bg-white/80 px-4 py-3 text-brand-ink transition hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(244,185,200,0.3)]"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[68.75rem] border-t border-brand-ink/10 pt-6 text-center text-xs text-brand-ink/50">
        © {new Date().getFullYear()} MapleWorld · All rights reserved.
      </div>
    </footer>
  );
}

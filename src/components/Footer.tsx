import Link from "next/link";

const quickLinks = [
  { label: "指南 Guides", href: "/guides" },
  { label: "工具 Tools", href: "/tools/opt-tax" },
];

export function Footer() {
  return (
    <footer className="mt-4 bg-white/80">
      <div className="page-shell flex flex-col gap-8 py-12 text-brand-ink/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-ink/60">
            MapleWorld
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-brand-ink">
            温柔、安全、希望、陪伴
          </h3>
          <p className="mt-2 max-w-md text-sm">
            MapleWorld · 温暖出国团队陪你走向世界。我们相信，每一段旅程都值得被手绘记录，
            以柔软的态度守护每一位梦想家的故事。
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3 text-sm md:max-w-md">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/70 bg-brand-warmwhite px-4 py-3 text-brand-ink transition hover:scale-[1.02]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/70 bg-white/70 py-4 text-center text-xs text-brand-ink/60">
        © {new Date().getFullYear()} MapleWorld. All rights reserved.
      </div>
    </footer>
  );
}

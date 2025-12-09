import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "留学", href: "/study" },
  { label: "国际志愿者", href: "/volunteer" },
  { label: "互惠生", href: "/aupair" },
  { label: "出国工作", href: "/work" },
  { label: "移民", href: "/immigration" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center px-4 pt-4">
      <div className="glass-panel relative flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-ink/70">
            MapleWorld
          </span>
          <p className="hidden text-sm text-brand-ink/80 sm:block">
            只要准备一张机票，就可以飞往世界各地
          </p>
        </div>

        <nav className="hidden flex-1 justify-center gap-4 text-sm font-semibold text-brand-ink/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-brand-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-pink px-4 py-2 text-sm font-semibold text-brand-ink shadow-[0_15px_40px_rgba(247,198,217,0.55)] transition hover:scale-105 hover:bg-brand-pink/90"
          >
            免费咨询
          </Link>
        </div>
      </div>

      <div className="fixed inset-x-0 top-0 z-[-1] h-32 bg-white/80 backdrop-blur-lg" />

      <nav className="mt-4 flex w-full snap-x gap-3 overflow-x-auto px-2 text-xs font-semibold text-brand-ink/70 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="snap-start rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-sm"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

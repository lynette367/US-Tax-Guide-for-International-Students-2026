import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "30 秒判断", href: "/#fit" },
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
            美国 F1 + OPT 报税，把不该亏的税拿回来
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
            href="/#footer"
            className="inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-brand-pinkhover"
          >
            扫码咨询
          </Link>
        </div>

      </div>



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

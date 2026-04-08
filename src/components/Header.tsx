
import Link from "next/link";


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 bg-[#f9f5f0] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-ink/70">
            MapleWorld
          </span>
          <p className="hidden text-sm text-brand-ink/80 sm:block">
            美国 F1 + OPT 报税，把不该亏的税拿回来
          </p>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/#footer"
            className="inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-brand-pinkhover"
          >
            扫码咨询
          </Link>
        </div>
      </div>
    </header>
  );
}

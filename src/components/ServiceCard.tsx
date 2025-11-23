import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  icon: string;
};

export function ServiceCard({
  title,
  description,
  highlights,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(228,153,179,0.35)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(200,127,155,0.45)]"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-brand-ink">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-brand-ink/80">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-brand-ink/70">
        {highlights.map((item) => (
          <li
            key={item}
            className="rounded-full bg-pink-50/70 px-3 py-1"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="placeholder-illustration mt-6 h-32 text-[0.7rem] tracking-[0.4em] text-brand-ink/50">
        插画占位
      </div>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink">
        了解更多
        <span className="text-lg transition group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

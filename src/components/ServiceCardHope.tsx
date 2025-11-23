import Link from "next/link";

type ServiceCardHopeProps = {
  title: string;
  subtitle: string;
  href: string;
};

const IconCircle = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-brand-ink/40 w-9 h-9 sm:w-14 sm:h-14"
  >
    <circle
      cx="28"
      cy="28"
      r="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="6 6"
    />
  </svg>
);

export function ServiceCardHope({ title, subtitle, href }: ServiceCardHopeProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-[20px] sm:rounded-[28px] border border-brand-pink/50 bg-white/90 p-6 sm:p-8 shadow-[0_12px_40px_rgba(244,185,200,0.45)] transition duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_55px_rgba(228,153,179,0.5)]"
    >
      <div className="absolute inset-0 rounded-[20px] sm:rounded-[28px] bg-[url('/textures/paper-texture.png')] opacity-5 pointer-events-none" />
      <div className="relative flex flex-col gap-3 sm:gap-4">
        <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-brand-pink/20 p-1.5 sm:p-2">
          <IconCircle />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-brand-ink">{title}</h3>
          <p className="mt-1.5 sm:mt-2 text-sm leading-relaxed text-brand-ink/70">{subtitle}</p>
        </div>
        <span className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-pinkhover">
          Learn more
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

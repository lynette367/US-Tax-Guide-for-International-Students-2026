import Link from "next/link";
import Image from "next/image";

type JourneyPageTemplateProps = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  steps: { title: string; detail: string }[];
  contactNote: string;
  illustrationPath?: string;
};

export function JourneyPageTemplate({
  title,
  subtitle,
  description,
  highlights,
  steps,
  contactNote,
  illustrationPath,
}: JourneyPageTemplateProps) {
  return (
    <main className="page-shell space-y-12 py-16">
      <section className="rounded-[32px] border border-white/80 bg-white/90 p-10 shadow-[0_25px_80px_rgba(247,198,217,0.35)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-ink/60">
          {subtitle}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-brand-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-brand-ink/80">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-brand-ink/80">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/80 bg-white/70 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>

        {illustrationPath ? (
          <div className="mt-10 relative w-full h-64 sm:h-80 md:h-96 rounded-[24px] overflow-hidden">
            <Image
              src={illustrationPath}
              alt={`${title} 手绘插画`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="placeholder-illustration mt-10">
            手绘风插画占位 · {title}
          </div>
        )}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step.title} className="soft-card">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-ink/50">
              STEP {index + 1}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-brand-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-brand-ink/80">{step.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 text-center shadow-[0_15px_60px_rgba(184,217,255,0.35)]">
        <h2 className="text-2xl font-semibold text-brand-ink">
          需要更多灵感吗？
        </h2>
        <p className="mt-3 text-sm text-brand-ink/80">{contactNote}</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-brand-sky px-8 py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_50px_rgba(184,217,255,0.6)] transition hover:scale-105"
        >
          预约暖心顾问
        </Link>
      </section>
    </main>
  );
}

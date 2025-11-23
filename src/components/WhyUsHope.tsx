export function WhyUsHope() {
  const items = [
    {
      title: "20+ 国家旅程选择",
      text: "每一条路都是把故事带得更远的可能性。",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-ink opacity-70"
        >
          <circle cx="24" cy="24" r="20" stroke="#4E4A4C" strokeWidth="3" />
          <path
            d="M12 24 H36"
            stroke="#4E4A4C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 12 V36"
            stroke="#4E4A4C"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "100+ 用户温柔陪伴经验",
      text: "我们陪伴过许多人，也愿意陪伴你。",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-ink opacity-70"
        >
          <path
            d="M16 20 C16 14 20 10 24 10 C28 10 32 14 32 20 C32 26 28 30 24 30 C20 30 16 26 16 20 Z"
            stroke="#4E4A4C"
            strokeWidth="3"
          />
          <path
            d="M10 38 C10 30 18 26 24 26 C30 26 38 30 38 38"
            stroke="#4E4A4C"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "一对一顾问随时可联系",
      text: "出国流程不必自己扛，我们会一起面对。",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-ink opacity-70"
        >
          <path
            d="M16 14 H32 V30 H16 Z"
            stroke="#4E4A4C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="24" cy="22" r="3" fill="#4E4A4C" />
          <path
            d="M12 34 H36"
            stroke="#4E4A4C"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full px-4 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[68.75rem] text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
          Why MapleWorld
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
          为什么选择我们
        </h2>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 grid max-w-[68.75rem] gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[20px] sm:rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(244,185,200,0.35)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(228,153,179,0.5)]"
          >
            <div className="flex justify-center scale-75 sm:scale-100">{item.icon}</div>
            <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-brand-ink">
              {item.title}
            </h3>
            <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-brand-ink/70">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

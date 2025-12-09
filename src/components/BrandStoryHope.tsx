export function BrandStoryHope() {
  return (
    <section className="w-full bg-brand-warmwhite px-4 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl rounded-[24px] sm:rounded-[32px] bg-white/80 p-6 sm:p-10 md:p-12 shadow-[0_12px_50px_rgba(244,185,200,0.35)] relative overflow-hidden">
        
        {/* 纸纹淡层 */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('/textures/paper-texture.png')]" />

        <div className="relative z-10 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
            WHY WE CARE
          </p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-brand-ink">
            品牌故事
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-brand-ink/70 leading-relaxed max-w-[90%] mx-auto">
            每一个想走出去的人，都值得被温柔对待。
            我们相信，世界不是比你更大，而是一直在等你走近它。
            <br /><br />
            无论你正在计划留学、志愿者、互惠生、
            还是为未来寻找新的国家和可能性，
            <br />
            MapleWorld 都会陪你，一步一步，
            把未来变得不再可怕，而是一次真正的故事出发。
          </p>
        </div>
      </div>
    </section>
  );
}

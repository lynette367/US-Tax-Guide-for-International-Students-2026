const contactItems = [
  { label: "微信 MapleWorldCare", detail: "工作日 10:00-22:00 (GMT+8)" },
  { label: "邮箱 hello@mapleworld.com", detail: "24 小时内回复" },
  { label: "北美热线 +1 (236) 888-0000", detail: "周一至周日" },
];

export default function ContactPage() {
  return (
    <main className="page-shell space-y-12 py-16">
      <section className="rounded-[40px] border border-white/80 bg-white/90 p-10 shadow-[0_30px_90px_rgba(184,217,255,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-ink/60">
          Contact MapleWorld
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-ink md:text-5xl">
          联系我们 · 与温柔顾问聊聊未来
        </h1>
        <p className="mt-4 max-w-3xl text-brand-ink/80">
          写下你想去的国家、想体验的身份或需要被解决的担忧。MapleWorld
          顾问将在 24 小时内与你连线，提供透明流程与专属插画式规划。
        </p>
        <div className="placeholder-illustration mt-8">
          联系插画占位 · 电话 · 地球仪 · 小人物
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-[0_20px_70px_rgba(247,198,217,0.35)]">
          <h2 className="text-2xl font-semibold text-brand-ink">暖心连线</h2>
          <p className="mt-3 text-brand-ink/80">
            无论你身处哪个时区，都可以用喜欢的方式连接 MapleWorld 顾问。
          </p>
          <div className="mt-6 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/70 bg-brand-warmwhite px-4 py-4"
              >
                <p className="text-sm font-semibold text-brand-ink">
                  {item.label}
                </p>
                <p className="text-xs text-brand-ink/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-[0_25px_80px_rgba(184,217,255,0.4)]">
          <h2 className="text-2xl font-semibold text-brand-ink">写封信给我们</h2>
          <p className="mt-3 text-sm text-brand-ink/70">
            表单提交后，顾问将与你确认时间并准备初步方案。
          </p>
          <div className="mt-6 space-y-4">
            <label className="block text-sm font-semibold text-brand-ink">
              姓名
              <input
                type="text"
                placeholder="你的中文 / 英文名"
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </label>
            <label className="block text-sm font-semibold text-brand-ink">
              联系方式
              <input
                type="text"
                placeholder="邮箱 / 微信 / 电话"
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </label>
            <label className="block text-sm font-semibold text-brand-ink">
              想聊的话题
              <select
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
                defaultValue="study"
              >
                <option value="study">留学</option>
                <option value="volunteer">国际志愿者</option>
                <option value="aupair">互惠生</option>
                <option value="work">出国工作</option>
                <option value="immigration">移民规划</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-brand-ink">
              你的故事 / 需求
              <textarea
                rows={4}
                placeholder="告诉我们你的期望、时间表或目前的困难..."
                className="mt-2 w-full rounded-2xl border border-brand-ink/10 bg-white/70 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </label>
          </div>
          <button
            type="button"
            className="mt-6 w-full rounded-full bg-brand-pink py-3 text-sm font-semibold text-brand-ink shadow-[0_20px_60px_rgba(247,198,217,0.6)] transition hover:scale-[1.02]"
          >
            发送给 MapleWorld
          </button>
        </form>
      </section>
    </main>
  );
}

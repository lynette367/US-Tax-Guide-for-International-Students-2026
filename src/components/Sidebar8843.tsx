import Link from 'next/link';

export default function Sidebar8843() {
    return (
        <div className="rounded-2xl border border-brand-pink/30 bg-brand-pink/5 p-6 shadow-[0_4px_20px_rgba(244,185,200,0.15)]">
            <h3 className="font-bold text-brand-ink mb-4 text-lg border-b border-brand-pink/20 pb-2">
                推荐阅读 / 实用工具
            </h3>
            <ul className="space-y-4">
                <li>
                    <Link
                        href="/tools/form-8843-tutorial-2026"
                        className="block mt-8 text-center bg-brand-pink hover:bg-brand-pinkdeep/90 text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-[0_4px_15px_rgba(224,64,106,0.2)] hover:shadow-[0_6px_20px_rgba(224,64,106,0.3)] hover:-translate-y-0.5 active:scale-[0.98] text-sm leading-snug"
                    >
                        已确认必须申报？<br />
                        点击进入 8843 手把手填表教学 →
                    </Link>
                    <Link
                        href="/guides/1042-vs-1042-s"
                        className="block mt-4 text-center bg-[#d4a373] hover:bg-[#c6915b] text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-[0_4px_15px_rgba(212,163,115,0.2)] hover:shadow-[0_6px_20px_rgba(212,163,115,0.3)] hover:-translate-y-0.5 active:scale-[0.98] text-sm leading-snug"
                    >
                        1042-S 还没收到？<br />
                        点此查看详细说明 →
                    </Link>
                    <Link href="/tools/fica-refund-calculator" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            💡 填完 8843 了？别忘了检查你的 FICA 税是否被误扣
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/tools/opt-turbotax" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            ⚠️ OPT 报税避坑：到底能不能用 TurboTax？
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/guides/w2-missing-guide" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            📄 留学生 W-2 没收到或寄丢了怎么办？
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

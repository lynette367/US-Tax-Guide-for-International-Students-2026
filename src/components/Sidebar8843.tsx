import Link from 'next/link';

export default function Sidebar8843() {
    return (
        <div className="rounded-2xl border border-brand-pink/30 bg-brand-pink/5 p-6 shadow-[0_4px_20px_rgba(244,185,200,0.15)]">
            <h3 className="font-bold text-brand-ink mb-4 text-lg border-b border-brand-pink/20 pb-2">
                推荐阅读 / 实用工具
            </h3>
            <ul className="space-y-4">
                <li>
                    <Link href="/fica-refund-calculator" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            💡 填完 8843 了？别忘了检查你的 FICA 税是否被误扣
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/opt-turbotax" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            ⚠️ OPT 报税避坑：到底能不能用 TurboTax？
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/w2-missing-guide" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            📄 留学生 W-2 没收到或寄丢了怎么办？
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

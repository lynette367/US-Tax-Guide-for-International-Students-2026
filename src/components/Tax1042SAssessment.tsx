'use client'

import { useState } from 'react'

export function Tax1042SAssessment() {
    const [scholarship, setScholarship] = useState<string | null>(null)
    const [treaty, setTreaty] = useState<string | null>(null)
    const [visa, setVisa] = useState<string | null>(null)

    const getResult = () => {
        if (!scholarship || !treaty || !visa) return null
        if ((scholarship === 'yes' || treaty === 'yes') && visa === 'f1') {
            return {
                type: 'warning',
                text: '判定结论： 你大概率会收到一张 1042-S，请务必等它到手再点提交，否则你要额外补 1040-X（修改税表）！'
            }
        }
        return {
            type: 'info',
            text: '判定结论： 根据你的情况，你可能不需要等待 1042-S。但建议咨询专业会计师或确认你的收入来源。'
        }
    }

    const result = getResult()

    return (
        <div className="my-10 rounded-[28px] border border-brand-pink/30 bg-brand-pink/5 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-brand-ink">“这张表我到底有没有？” 判定器</h3>
            <div className="space-y-6">
                <div>
                    <p className="text-sm font-medium mb-3 text-brand-ink/80">1. 你今年有学校发的奖学金/助研费吗？ (Yes/No)</p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setScholarship('yes')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${scholarship === 'yes' ? 'bg-brand-pinkdeep text-white' : 'bg-white border border-brand-pink/30 text-brand-ink/70 hover:bg-brand-pink/10'}`}
                        >
                            Yes
                        </button>
                        <button 
                            onClick={() => setScholarship('no')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${scholarship === 'no' ? 'bg-brand-pinkdeep text-white' : 'bg-white border border-brand-pink/30 text-brand-ink/70 hover:bg-brand-pink/10'}`}
                        >
                            No
                        </button>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-medium mb-3 text-brand-ink/80">2. 你今年用了 $5000 的中美税收协定免税额吗？ (Yes/No)</p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setTreaty('yes')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${treaty === 'yes' ? 'bg-brand-pinkdeep text-white' : 'bg-white border border-brand-pink/30 text-brand-ink/70 hover:bg-brand-pink/10'}`}
                        >
                            Yes
                        </button>
                        <button 
                            onClick={() => setTreaty('no')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${treaty === 'no' ? 'bg-brand-pinkdeep text-white' : 'bg-white border border-brand-pink/30 text-brand-ink/70 hover:bg-brand-pink/10'}`}
                        >
                            No
                        </button>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-medium mb-3 text-brand-ink/80">3. 你是 F1 还是 H1B？</p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setVisa('f1')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${visa === 'f1' ? 'bg-brand-pinkdeep text-white' : 'bg-white border border-brand-pink/30 text-brand-ink/70 hover:bg-brand-pink/10'}`}
                        >
                            F1 / J1
                        </button>
                        <button 
                            onClick={() => setVisa('h1b')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${visa === 'h1b' ? 'bg-brand-pinkdeep text-white' : 'bg-white border border-brand-pink/30 text-brand-ink/70 hover:bg-brand-pink/10'}`}
                        >
                            H1B / Other
                        </button>
                    </div>
                </div>

                {result && (
                    <div className={`mt-8 p-5 rounded-2xl border ${result.type === 'warning' ? 'bg-brand-pink/10 border-brand-pink/40 text-brand-pinkdeep' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
                        <p className="text-sm font-bold leading-relaxed">{result.text}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

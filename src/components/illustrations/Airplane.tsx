export default function Airplane() {
  return (
    <svg
      width="210"
      height="130"
      viewBox="0 0 210 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90 drop-shadow-[0_18px_35px_rgba(43,31,45,0.1)]"
    >
      {/* 机身 */}
      <path
        d="M22 82 Q82 38 188 56 Q202 58 194 84 Q100 122 36 106 Q16 100 22 82 Z"
        fill="#FFFFFF"
        stroke="#2B1F2D"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 鼻头 */}
      <path
        d="M18 80 Q6 82 10 96 Q14 110 32 110 L32 78 Z"
        fill="#F59BB8"
        stroke="#2B1F2D"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* 尾翼 */}
      <path
        d="M178 56 L206 40 L206 96 L178 86 Z"
        fill="#7AB8E0"
        stroke="#2B1F2D"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* 蓝色腰线 */}
      <path
        d="M36 86 Q94 56 176 70"
        stroke="#7AB8E0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M32 98 Q90 72 178 88"
        stroke="#4D8DBA"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* 机翼 */}
      <path
        d="M92 84 L148 98 L132 118 L72 102 Z"
        fill="#8FC2E4"
        stroke="#2B1F2D"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* 发动机 & 起落架 */}
      <ellipse cx="120" cy="112" rx="10" ry="8" fill="#2B1F2D" />
      <circle cx="120" cy="118" r="6" fill="#FFFFFF" stroke="#2B1F2D" strokeWidth="2" />

      {/* 窗户 */}
      {[60, 80, 100, 120, 140, 160].map((cx) => (
        <circle
          key={cx}
          cx={cx}
          cy={78}
          r="6"
          fill="#FFFFFF"
          stroke="#2B1F2D"
          strokeWidth="2.5"
        />
      ))}

      {/* 驾驶舱窗口 */}
      <path
        d="M44 72 Q60 60 78 66 Q70 82 48 84 Z"
        fill="#8FC2E4"
        stroke="#2B1F2D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

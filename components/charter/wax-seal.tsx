type WaxSealProps = {
  size?: number;
  label?: string;
  className?: string;
};

/**
 * Decorative wax-seal medallion — pure visual/typographic device used to mark
 * chapter breaks in the parchment-charter layout. Drawn entirely in SVG so no
 * external image assets are required.
 */
export function WaxSeal({ size = 64, label = "T", className = "" }: WaxSealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* irregular wax blob edge */}
      <path
        d="M50 4c8 0 12 5 19 6s16-2 21 5-1 15 3 22 8 12 3 19-14 4-20 10-6 15-14 17-14-5-22-5-15 8-22 4-4-13-10-19-13-9-9-18 8-13 9-21-3-15 4-20 12 0 20-2 10-2 18 2z"
        fill="var(--wax)"
      />
      <path
        d="M50 4c8 0 12 5 19 6s16-2 21 5-1 15 3 22 8 12 3 19-14 4-20 10-6 15-14 17-14-5-22-5-15 8-22 4-4-13-10-19-13-9-9-18 8-13 9-21-3-15 4-20 12 0 20-2 10-2 18 2z"
        fill="url(#waxSheen)"
        opacity="0.55"
      />
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="var(--wax-dim)"
        strokeWidth="1.2"
        strokeDasharray="1.5 3.5"
        opacity="0.6"
      />
      <text
        x="50"
        y="61"
        textAnchor="middle"
        fontFamily="var(--type-display)"
        fontSize="38"
        fontWeight="600"
        fill="var(--card)"
        opacity="0.92"
      >
        {label}
      </text>
      <defs>
        <radialGradient id="waxSheen" cx="35%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function SociovaIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="accent" x1="20" y1="16" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="1" stopColor="#E0D4FF" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="shimmer" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.06" />
        </linearGradient>
        <radialGradient id="sparkGlow" cx="46" cy="19" r="8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Rounded square background */}
      <path
        d="M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H16C7.163 64 0 56.837 0 48V16z"
        fill="url(#bg)"
      />

      {/* Subtle shimmer overlay for depth */}
      <path
        d="M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H16C7.163 64 0 56.837 0 48V16z"
        fill="url(#shimmer)"
      />

      {/* Background S-wave (soft) */}
      <path
        d="M20 18c6 0 10 2 14 6s8 6 14 6c0 0-4 4-14 4s-10-2-14-6-8-6-14-6c0 0 4-4 14-4z"
        fill="url(#accent)"
        opacity="0.3"
      />

      {/* Primary wave — full white */}
      <path
        d="M44 22c-4.5 0-8 1.8-11 4.5-3 2.7-5.5 6-9.5 8-3.2 1.6-6 2-8.5 2v5c4.5 0 8-1.8 11-4.5 3-2.7 5.5-6 9.5-8 3.2-1.6 6-2 8.5-2v-5z"
        fill="#FFFFFF"
      />

      {/* Secondary wave — stronger contrast */}
      <path
        d="M44 32.5c-4.5 0-8 1.8-11 4.5-3 2.7-5.5 6-9.5 8-3.2 1.6-6 2-8.5 2v-5c4.5 0 8-1.8 11-4.5 3-2.7 5.5-6 9.5-8 3.2-1.6 6-2 8.5-2v5z"
        fill="#FFFFFF"
        opacity="0.55"
      />

      {/* Spark glow */}
      <circle cx="46" cy="19" r="8" fill="url(#sparkGlow)" />

      {/* Spark dot — slightly larger */}
      <circle cx="46" cy="19" r="4" fill="#FFFFFF" />
    </svg>
  );
}

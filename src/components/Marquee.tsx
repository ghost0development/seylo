import { Sparkle } from 'lucide-react';

const items = [
  'MMORPG',
  'RECENZJE',
  'PORADNIKI',
  'RANKINGI',
  "LET'S PLAY",
  'WIRTUALNE ŚWİATY',
  'OPEN WORLD',
  'RAIDY',
  'GRIND',
  'EXPLORE',
];

export default function Marquee({
  reverse = false,
  className = '',
}: {
  reverse?: boolean;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={`mask-fade-x relative flex overflow-hidden border-y border-white/5 py-5 ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap ${
          reverse ? 'animate-marquee-rev' : 'animate-marquee'
        }`}
      >
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-medium text-white/30 transition-colors hover:text-ember-400 sm:text-3xl">
              {it}
            </span>
            <Sparkle className="h-4 w-4 shrink-0 text-ember-500/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

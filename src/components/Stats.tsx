import { useCounter, useReveal } from '../hooks';

const stats = [
  { value: 12, suffix: 'K+', label: 'Subskrybentów', sub: 'i rośnie' },
  { value: 480, suffix: 'K', label: 'Wyświetleń', sub: 'łącznie' },
  { value: 180, suffix: '', label: 'Filmów', sub: 'w archiwum' },
  { value: 3, suffix: ' lata', label: 'Na YouTube', sub: 'od 2023' },
];

export default function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-y-12 border-y border-white/5 py-12 sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} active={visible} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  active,
  delay,
}: {
  stat: (typeof stats)[number];
  active: boolean;
  delay: number;
}) {
  const count = useCounter(stat.value, active, 2000);
  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-700 sm:border-r sm:border-white/5 sm:last:border-r-0 ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-5xl font-extrabold text-white sm:text-6xl">
        {count}
        <span className="text-ember-400">{stat.suffix}</span>
      </div>
      <div className="mt-3 label-mono text-white/60">{stat.label}</div>
      <div className="mt-1 label-mono text-white/30">{stat.sub}</div>
    </div>
  );
}

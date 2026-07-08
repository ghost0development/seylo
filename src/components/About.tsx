import { Quote } from 'lucide-react';
import { useReveal } from '../hooks';

const pillars = [
  { k: 'Recenzje', v: 'Szczere, bez uprzedzeń — z naciskiem na rozgrywkę, nie marketing.' },
  { k: 'Poradniki', v: 'Przewodniki, które faktycznie pomagają ruszyć w świat i nie zgubić się.' },
  { k: 'Rankingi', v: 'Top listy oparte na godzinach spędzonych w grze, nie na plotkach.' },
  { k: 'Let’s Play', v: 'Relacje z raidów, grindu i eksploracji — na żywo i bez cięć.' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-flux-500/8 blur-[150px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Section label */}
          <div className="label-mono mb-8 text-ember-400">03 — Manifest</div>

          {/* Oversized statement */}
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Gracz, dla którego MMO to nie gra —
            <span className="text-white/30"> to drugi dom.</span>
          </h2>

          {/* Pull quote */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Quote className="h-8 w-8 text-ember-500/50" />
              <p className="mt-6 font-display text-2xl font-medium leading-snug text-white/80 sm:text-3xl">
                „Dobre MMO to nie grafika ani budżet. To społeczność, przygoda
                i historie, które zostają na długo po wylogowaniu.”
              </p>
              <div className="mt-6 label-mono text-white/40">— seylo, twórca kanału</div>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-px">
                {pillars.map((p, i) => (
                  <div
                    key={p.k}
                    className={`border-t border-white/8 py-5 transition-all duration-700 ${
                      visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                    }`}
                    style={{ transitionDelay: `${200 + i * 120}ms` }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="label-mono w-10 shrink-0 text-ember-500/50">
                        0{i + 1}
                      </span>
                      <div>
                        <div className="font-display text-lg font-semibold text-white">{p.k}</div>
                        <div className="mt-1 text-sm leading-relaxed text-white/50">{p.v}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

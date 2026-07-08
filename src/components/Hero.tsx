import { useEffect, useState } from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { useReveal } from '../hooks';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background */}
      <img
        src="https://images.pexels.com/photos/167077/pexels-photo-167077.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-obsidian-950/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-obsidian-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/90 via-transparent to-obsidian-950/40" />

      {/* Ambient glow */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-ember-600/15 blur-[140px] animate-drift" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pt-28 pb-16 sm:px-10">
        {/* Badge */}
        <div
          className={`mb-8 flex items-center gap-3 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember-500" />
          </span>
          <span className="label-mono text-white/70">Na żywo — nowy materiał w drodze</span>
        </div>

        {/* Headline */}
        <h1
          className={`max-w-4xl font-display text-[3rem] font-extrabold leading-[0.95] tracking-tight text-white transition-all duration-1000 sm:text-7xl lg:text-[5.5rem] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Wirtualne światy.<br />
          <span className="gradient-text text-shadow-ember">Prawdziwe emocje.</span>
        </h1>

        {/* Sub */}
        <p
          className={`mt-8 max-w-xl text-lg leading-relaxed text-white/70 transition-all duration-1000 delay-150 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Recenzje, rankingi i relacje z największych tytułów MMORPG.
          Bez korporacyjnego bełkotu — tylko gry, gracze i światy, które warto poznać.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://www.youtube.com/@seylo-mmo"
            target="_blank"
            rel="noreferrer"
            className="btn-ember"
          >
            Subskrybuj kanał
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#videos" className="btn-ghost">
            <Play className="h-3.5 w-3.5 fill-current" />
            Zobacz filmy
          </a>
        </div>

        {/* Latest episode preview bar */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-16 max-w-2xl transition-all duration-1000 delay-500`}
        >
          <a
            href="https://www.youtube.com/@seylo-mmo/videos"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-5 rounded-2xl border border-white/10 glass-dark p-4 transition-all duration-300 hover:border-ember-500/30"
          >
            {/* Thumb */}
            <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/19368648/pexels-photo-19368648.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Najnowszy odcinek"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-obsidian-950/40">
                <Play className="h-5 w-5 fill-white text-white" />
              </div>
            </div>
            {/* Meta */}
            <div className="min-w-0 flex-1">
              <div className="label-mono mb-1 text-ember-400">Najnowszy odcinek</div>
              <div className="truncate font-display text-base font-semibold text-white">
                Top 10 MMORPG, w które warto zagrać w tym roku
              </div>
              <div className="mt-1 flex items-center gap-3 label-mono text-white/40">
                <span>18:24</span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" /> 42K
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all group-hover:text-ember-400" />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="label-mono text-white/30">Przewiń</span>
          <div className="h-8 w-px animate-pulse-soft bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

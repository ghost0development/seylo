import { useState } from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { useReveal } from '../hooks';

const videos = [
  {
    title: 'Top 10 MMORPG, w które warto zagrać w tym roku',
    category: 'Ranking',
    duration: '18:24',
    views: '42K',
    thumb: 'https://images.pexels.com/photos/19368648/pexels-photo-19368648.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Recenzja: Czy ten nowy MMO zmieni wszystko?',
    category: 'Recenzja',
    duration: '12:05',
    views: '28K',
    thumb: 'https://images.pexels.com/photos/1743365/pexels-photo-1743365.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Pierwsze kroki w świecie grindu — poradnik',
    category: 'Poradnik',
    duration: '25:41',
    views: '15K',
    thumb: 'https://images.pexels.com/photos/7915173/pexels-photo-7915173.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Największe zwiastunki MMO z ostatniego miesiąca',
    category: 'Aktualności',
    duration: '08:12',
    views: '19K',
    thumb: 'https://images.pexels.com/photos/167077/pexels-photo-167077.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Hardcore open world — live z najtrudniejszego bossa',
    category: "Let's Play",
    duration: '47:33',
    views: '33K',
    thumb: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function Videos() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  return (
    <section id="videos" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-ember-600/8 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between`}
        >
          <div>
            <div className="label-mono mb-4 text-ember-400">02 — Archiwum</div>
            <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Ostatnie<br />
              <span className="gradient-text">materiały</span>
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@seylo-mmo/videos"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Wszystkie filmy
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Featured + list */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Featured preview */}
          <div className="lg:col-span-7">
            <a
              href="https://www.youtube.com/@seylo-mmo/videos"
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-video overflow-hidden rounded-2xl border border-white/10"
            >
              {videos.map((v, i) => (
                <img
                  key={v.title}
                  src={v.thumb}
                  alt={v.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

              {/* Play */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full border border-white/20 glass-dark transition-all duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-white text-white" />
                </div>
              </div>

              {/* Active meta */}
              <div className="absolute inset-x-6 bottom-6">
                <span className="rounded-full bg-ember-500 px-3 py-1 label-mono text-obsidian-950">
                  {videos[active].category}
                </span>
                <h3 className="mt-3 max-w-lg font-display text-2xl font-semibold text-white sm:text-3xl">
                  {videos[active].title}
                </h3>
                <div className="mt-2 flex items-center gap-4 label-mono text-white/50">
                  <span>{videos[active].duration}</span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="h-3 w-3" />
                    {videos[active].views}
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Interactive list */}
          <div className="lg:col-span-5">
            <div className="flex flex-col">
              {videos.map((v, i) => (
                <a
                  key={v.title}
                  href="https://www.youtube.com/@seylo-mmo/videos"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setActive(i)}
                  className={`video-row group flex items-center gap-5 border-b border-white/5 py-5 ${
                    i === active ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <span
                    className={`label-mono w-8 shrink-0 transition-colors ${
                      i === active ? 'text-ember-400' : 'text-white/25'
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4
                      className={`truncate font-display text-base font-medium transition-colors ${
                        i === active ? 'text-white' : 'text-white/55'
                      }`}
                    >
                      {v.title}
                    </h4>
                    <div className="mt-1 label-mono text-white/30">
                      {v.category} — {v.duration}
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-all ${
                      i === active
                        ? 'text-ember-400 opacity-100'
                        : 'text-white/30 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

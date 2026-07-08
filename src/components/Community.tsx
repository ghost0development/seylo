import { useState } from 'react';
import { ArrowUpRight, Send, CheckCircle2, Youtube } from 'lucide-react';
import { useReveal } from '../hooks';

export default function Community() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl`}
        >
          {/* Background image */}
          <img
            src="https://images.pexels.com/photos/7915173/pexels-photo-7915173.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian-950/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/80" />

          {/* Glow */}
          <div className="absolute -bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ember-600/20 blur-[120px] animate-pulse-soft" />

          {/* Content */}
          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="label-mono mb-6 text-ember-400">04 — Dołącz</div>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Dołącz do <span className="gradient-text">społeczności</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Bądź na bieżąco z nowymi materiałami i rankingami. Zapisz się na newsletter —
              żadnego spamu, sama przygoda.
            </p>

            {/* Form */}
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="twoj@email.com"
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3.5 font-mono text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-ember-500/50"
              />
              <button type="submit" className="btn-ember shrink-0">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Zapisano
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Zapisz
                  </>
                )}
              </button>
            </form>

            <a
              href="https://www.youtube.com/@seylo-mmo"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost mt-8"
            >
              <Youtube className="h-3.5 w-3.5" />
              Subskrybuj na YouTube
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

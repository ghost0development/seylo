import { ArrowUp, ArrowUpRight } from 'lucide-react';

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@seylo-mmo' },
  { label: 'E-mail', href: 'mailto:kontakt@seylommo.pl' },
];

const navLinks = [
  { label: 'Start', href: '#home' },
  { label: 'Filmy', href: '#videos' },
  { label: 'Manifest', href: '#about' },
  { label: 'Dołącz', href: '#community' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="label-mono mb-4 text-white/40">Kanał</div>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              seyloMMO — recenzje, poradniki i relacje z wirtualnych światów MMORPG.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="label-mono mb-4 text-white/40">Nawigacja</div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-sm text-white/50 transition-colors hover:text-ember-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="label-mono mb-4 text-white/40">Znajdziesz mnie</div>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-20 overflow-hidden">
          <div className="select-none font-display text-[20vw] font-bold leading-none tracking-tighter text-white/[0.04]">
            seyloMMO
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
          <p className="label-mono text-white/30">
            © {new Date().getFullYear()} seyloMMO — Wszelkie prawa zastrzeżone
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 label-mono text-white/30 transition-colors hover:text-white"
          >
            Na górę
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 transition-all group-hover:border-ember-500/50">
              <ArrowUp className="h-3 w-3" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

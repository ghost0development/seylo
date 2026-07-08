import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Start', href: '#home', index: '01' },
  { label: 'Filmy', href: '#videos', index: '02' },
  { label: 'Manifest', href: '#about', index: '03' },
  { label: 'Dołącz', href: '#community', index: '04' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? 'border-b border-white/5 glass-dark' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ember-500 font-display text-base font-bold text-obsidian-950 transition-transform duration-300 group-hover:rotate-12">
              S
            </span>
            <span className="font-mono text-sm font-medium tracking-wide text-white">
              seylo<span className="text-ember-400">.mmo</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white"
              >
                <span className="text-ember-500/60 transition-colors group-hover:text-ember-400">
                  {l.index}
                </span>
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://www.youtube.com/@seylo-mmo"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white/80 transition-all hover:border-ember-500/50 hover:text-white md:flex"
          >
            Subskrybuj
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden glass-dark transition-all duration-500 md:hidden ${
          open ? 'max-h-96 border-b border-white/5' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-3 font-mono text-sm uppercase tracking-widest text-white/70"
            >
              <span className="text-ember-500/60">{l.index}</span>
              {l.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@seylo-mmo"
            target="_blank"
            rel="noreferrer"
            className="btn-ember mt-3 justify-center"
          >
            Subskrybuj <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

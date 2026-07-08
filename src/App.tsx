import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Videos from './components/Videos';
import About from './components/About';
import Community from './components/Community';
import Footer from './components/Footer';
import { useCursorGlow } from './hooks';

export default function App() {
  const cursorRef = useCursorGlow();

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-white">
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />
      {/* Film grain */}
      <div className="grain" />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Videos />
        <Marquee reverse />
        <About />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

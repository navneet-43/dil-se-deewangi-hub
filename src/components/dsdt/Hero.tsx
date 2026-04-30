import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import heroImg from "@/assets/dsdt-hero.jpg";

const PLAY_URL = "https://alrighttv.go.link/bnI1y";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain">
      {/* Background poster */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Dil Se Deewangi Tak — Kabir, Sia and Ananya in an explosive action drama"
          className="h-full w-full object-cover object-center scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
      </div>

      {/* Floating embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/80 animate-ember"
            style={{
              left: `${(i * 7.3) % 100}%`,
              bottom: `${(i * 11) % 80}%`,
              animationDelay: `${(i % 6) * 0.6}s`,
              boxShadow: "0 0 8px hsl(var(--primary))",
            }}
          />
        ))}
      </div>

      {/* Top nav */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="font-display text-2xl font-extrabold tracking-tight text-gradient-gold" style={{ fontFamily: "Cinzel, serif" }}>
          ALRIGHT<span className="text-primary">!</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#watch" className="hover:text-primary transition-colors">Where to Watch</a>
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <Button asChild variant="hero" size="sm">
          <a href={PLAY_URL} target="_blank" rel="noopener">Watch Free</a>
        </Button>
      </nav>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] max-w-7xl items-center px-6 pb-20">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Now Streaming · Alright TV
          </div>

          <h1 className="sr-only">Dil Se Deewangi Tak — Watch free on Alright TV</h1>

          <p className="mb-2 text-lg font-semibold text-primary/90 md:text-xl">
            Naye season har dopahar 12 baje.
          </p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A new vertical episode drops <span className="text-foreground font-medium">every day at 12 PM</span>. Love, vengeance, fire & loyalty — 22 minutes of cinematic drama, only on Alright TV.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl">
              <a href={PLAY_URL} target="_blank" rel="noopener">
                <Play className="fill-current" /> Watch Free Now
              </a>
            </Button>
            <Button asChild variant="outlineGold" size="xl">
              <a href={PLAY_URL} target="_blank" rel="noopener">
                <Download /> Get the App
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Stat label="Daily" value="12 PM" />
            <Stat label="Episode" value="22 min" />
            <Stat label="Format" value="Vertical" />
            <Stat label="Price" value="Free" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-2xl font-bold text-gradient-gold">{value}</span>
    <span className="uppercase tracking-widest text-xs">{label}</span>
  </div>
);

export default Hero;

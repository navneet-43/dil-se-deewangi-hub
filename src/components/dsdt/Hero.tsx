import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PLAY_URL = "https://alrighttv.go.link/bnI1y";

// TODO: paste the YouTube or Vimeo video ID here once provided.
// YouTube: from https://youtu.be/XXXXXXXXXXX  →  "XXXXXXXXXXX"
// Vimeo:   from https://vimeo.com/123456789   →  "123456789"
const VIDEO_PROVIDER: "youtube" | "vimeo" = "youtube";
const VIDEO_ID = ""; // <-- leave empty to show placeholder

const buildEmbedUrl = () => {
  if (!VIDEO_ID) return "";
  if (VIDEO_PROVIDER === "youtube") {
    // mute=1 + playsinline=1 are required for autoplay on mobile
    return `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=1&modestbranding=1&rel=0&playsinline=1`;
  }
  return `https://player.vimeo.com/video/${VIDEO_ID}?autoplay=1&muted=1&loop=1&background=0&playsinline=1`;
};

const Hero = () => {
  const embedUrl = buildEmbedUrl();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden grain flex flex-col">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
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
      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 shrink-0">
        <a
          href="/"
          className="font-display text-2xl font-extrabold tracking-tight text-gradient-gold"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          ALRIGHT<span className="text-primary">!</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#where" className="hover:text-primary transition-colors">Where to Watch</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <Button asChild variant="hero" size="sm">
          <a href={PLAY_URL} target="_blank" rel="noopener">
            <Download /> Get App
          </a>
        </Button>
      </nav>

      {/* Hero content — fills remaining viewport, no scroll */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 min-h-0 flex-col items-center px-4 pb-4 text-center">
        <h1 className="sr-only">Dil Se Deewangi Tak — Watch on Alright TV</h1>

        {/* Top text — compact */}
        <p
          className="text-xl font-bold text-gradient-gold md:text-2xl"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Dil Se Deewangi Tak
        </p>
        <p className="mb-2 text-xs text-muted-foreground md:text-sm">
          Naye season har dopahar <span className="text-primary font-semibold">12 baje</span>
        </p>

        {/* Vertical 9:16 player — auto-sized to fit available height while keeping 9:16 ratio.
            height = 100% of remaining vertical space, width = height * 9/16. */}
        <div className="relative flex-1 min-h-0 w-full flex items-center justify-center py-2">
          <div
            className="relative h-full"
            style={{ aspectRatio: "9 / 16", maxWidth: "100%" }}
          >
            {/* Glow halo */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-gold opacity-25 blur-2xl animate-glow" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border-2 border-primary/40 bg-black shadow-gold">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Dil Se Deewangi Tak — Promo"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder={0}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-card via-background to-card p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold">
                  <Download className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Vertical 9:16 promo will play here
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Paste the YouTube / Vimeo ID in <code className="text-primary">Hero.tsx</code> →{" "}
                  <code className="text-primary">VIDEO_ID</code>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bold CTA below the player */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            asChild
            variant="hero"
            size="xl"
            className="text-lg shadow-gold animate-glow px-12"
          >
            <a href={PLAY_URL} target="_blank" rel="noopener">
              <Download className="h-5 w-5" /> Download App to Watch Full
            </a>
          </Button>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            New episode daily · 12 PM · Only on Alright TV
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

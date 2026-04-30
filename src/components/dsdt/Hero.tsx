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
    <section className="relative min-h-[100svh] w-full overflow-hidden grain">
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
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
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

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Now Streaming · Alright TV
        </div>

        <h1 className="sr-only">Dil Se Deewangi Tak — Watch on Alright TV</h1>

        <p
          className="mb-2 text-3xl font-bold text-gradient-gold md:text-4xl"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Dil Se Deewangi Tak
        </p>
        <p className="mb-8 text-base text-muted-foreground md:text-lg">
          Naye season har dopahar <span className="text-primary font-semibold">12 baje</span>.
        </p>

        {/* Vertical 9:16 player — phone-shaped frame */}
        <div className="relative mx-auto w-full max-w-[340px] md:max-w-[380px]">
          {/* Glow halo */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-gold opacity-30 blur-2xl animate-glow" />
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] border-2 border-primary/40 bg-black shadow-gold">
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

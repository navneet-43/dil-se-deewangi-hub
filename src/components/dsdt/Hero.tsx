import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/dsdt-hero.jpg";

const PLAY_URL = "https://alrighttv.go.link/bnI1y";
// TODO: replace with the final promo video URL (mp4) once provided.
const PROMO_VIDEO_URL = "/promo.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        /* autoplay blocked — poster remains visible */
      }
    };
    tryPlay();
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain">
      {/* Background video / poster */}
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover object-center"
            poster={heroImg}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setHasVideo(false)}
          >
            <source src={PROMO_VIDEO_URL} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroImg}
            alt="Dil Se Deewangi Tak — Kabir, Sia and Ananya in an explosive action drama"
            className="h-full w-full object-cover object-center scale-105"
            loading="eager"
            fetchPriority="high"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
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

      {/* Hero copy — bottom anchored so video stays the star */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] max-w-7xl flex-col justify-end px-6 pb-16">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Now Streaming · Alright TV
          </div>

          <h1 className="sr-only">Dil Se Deewangi Tak — Watch on Alright TV</h1>

          <p className="mb-3 text-2xl font-semibold text-primary md:text-3xl" style={{ fontFamily: "Cinzel, serif" }}>
            Naye season har dopahar 12 baje.
          </p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            A new vertical episode drops <span className="text-foreground font-semibold">every day at 12 PM</span>.
            Download the app to watch the full season.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl" className="text-lg shadow-gold animate-glow">
              <a href={PLAY_URL} target="_blank" rel="noopener">
                <Download className="h-5 w-5" /> Download App to Watch Full
              </a>
            </Button>
            {hasVideo && (
              <Button
                variant="outlineGold"
                size="xl"
                onClick={() => {
                  const v = videoRef.current;
                  if (!v) return;
                  v.muted = !v.muted;
                  setMuted(v.muted);
                }}
              >
                <Play className="fill-current" /> {muted ? "Unmute Promo" : "Mute Promo"}
              </Button>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Stat label="Daily" value="12 PM" />
            <Stat label="Episode" value="22 min" />
            <Stat label="Format" value="Vertical" />
            <Stat label="On" value="Alright TV" />
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

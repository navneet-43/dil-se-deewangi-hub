import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const PLAY_URL = "https://alrighttv.go.link/bnI1y";

const PromoVideo = () => (
  <section id="promo" className="relative py-24 px-6 overflow-hidden">
    <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-glow)" }} />
    <div className="relative mx-auto max-w-5xl">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Official Promo</p>
        <h2 className="text-4xl font-bold md:text-5xl">
          Watch the <span className="text-gradient-fire">Promo</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Get a first look at Kabir, Sia & Ananya's world — then dive into the first few episodes free on Alright TV.
        </p>
      </div>

      <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/30 bg-card/60 shadow-gold backdrop-blur">
        {/* Placeholder until promo video URL is added */}
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-background via-card to-background">
          <div className="text-center px-6">
            <div className="mx-auto mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold">
              <Play className="h-9 w-9 fill-current" />
            </div>
            <p className="text-lg font-semibold text-foreground">Promo video coming soon</p>
            <p className="mt-2 text-sm text-muted-foreground">The official trailer will be embedded here.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button asChild variant="hero" size="xl">
          <a href={PLAY_URL} target="_blank" rel="noopener">
            <Play className="fill-current" /> Watch First Episodes
          </a>
        </Button>
        <Button asChild variant="outlineGold" size="xl">
          <a href={PLAY_URL} target="_blank" rel="noopener">
            <Download /> Download Alright TV
          </a>
        </Button>
      </div>
      <p className="mt-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
        First few episodes free · Subscribe on Alright TV to unlock the full season
      </p>
    </div>
  </section>
);

export default PromoVideo;

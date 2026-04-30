import { Button } from "@/components/ui/button";
import { Play, Gift, Tv, Clock } from "lucide-react";

const PLAY_URL = "https://alrighttv.go.link/bnI1y";

const WhereToWatch = () => (
  <section id="watch" className="relative py-24 px-6">
    <div className="mx-auto max-w-6xl">
      <div className="mb-14 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Streaming Info</p>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Where to watch <span className="text-gradient-gold">Dil Se Deewangi Tak</span>?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          You can watch all episodes of Dil Se Deewangi Tak <span className="text-primary font-semibold">for free</span> exclusively on the Alright TV app.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <WatchCard
          icon={Tv}
          title="Where to watch DSDT?"
          text="Dil Se Deewangi Tak streams exclusively on the Alright TV app — available on Google Play and the App Store."
        />
        <WatchCard
          icon={Gift}
          title="Where to watch DSDT for free?"
          text="Every episode of Dil Se Deewangi Tak is 100% free on Alright TV. No subscription. No paywall. Just download & watch."
          highlight
        />
        <WatchCard
          icon={Clock}
          title="When does new episode drop?"
          text="Naye season har dopahar 12 baje. A brand-new vertical episode drops every day at 12:00 PM IST."
        />
      </div>

      {/* Big CTA */}
      <div className="relative mt-16 overflow-hidden rounded-3xl border border-primary/40 p-10 md:p-14 text-center shadow-gold animate-glow">
        <div className="absolute inset-0 bg-gradient-fire opacity-90" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, hsl(0 0% 0% / 0.3), transparent 70%)" }} />
        <div className="relative">
          <h3 className="mb-4 text-3xl font-black uppercase tracking-wider text-primary-foreground md:text-5xl" style={{ fontFamily: "Cinzel, serif" }}>
            Watch Free Today
          </h3>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/90 md:text-lg">
            Download Alright TV and start streaming Dil Se Deewangi Tak — new episode every day at 12 PM.
          </p>
          <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90 font-bold uppercase tracking-wider">
            <a href={PLAY_URL} target="_blank" rel="noopener">
              <Play className="fill-current" /> Watch on Alright TV
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const WatchCard = ({
  icon: Icon, title, text, highlight,
}: { icon: any; title: string; text: string; highlight?: boolean }) => (
  <div
    className={`relative rounded-2xl border p-7 backdrop-blur transition-all hover:-translate-y-1 ${
      highlight
        ? "border-primary bg-primary/5 shadow-gold"
        : "border-border bg-card/60 hover:border-primary/40"
    }`}
  >
    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${highlight ? "bg-gradient-gold text-primary-foreground" : "bg-muted text-primary"}`}>
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <p className="text-muted-foreground">{text}</p>
  </div>
);

export default WhereToWatch;

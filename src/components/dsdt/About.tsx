import { Clock, Smartphone, Flame, Calendar } from "lucide-react";
import heroImg from "@/assets/dsdt-hero.jpg";

const features = [
  { icon: Calendar, title: "Daily Drops", text: "A brand-new episode every single day at 12 PM sharp." },
  { icon: Clock, title: "22-Min Seasons", text: "Bite-sized cinematic seasons designed to binge in a lunch break." },
  { icon: Smartphone, title: "Vertical First", text: "Shot for your phone. Full-screen, cinematic, swipe-ready." },
  { icon: Flame, title: "Promo + Free Preview", text: "Watch the promo and the first few episodes free on Alright TV." },
];

const About = () => (
  <section id="about" className="relative py-24 px-6">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        {/* Low-key poster */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-fire opacity-15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-card-cinema">
            <img
              src={heroImg}
              alt="Dil Se Deewangi Tak — official poster featuring Kabir, Sia and Ananya"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">The Show</p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What is <span className="text-gradient-gold">Dil Se Deewangi Tak</span>?
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A blockbuster Hindi micro-drama on Alright TV — where a perfect love story collides with vengeance, legacy and bullets. Watch the obsession unfold, one episode a day.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 shadow-card-cinema"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.text}</p>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;

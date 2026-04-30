import heroImg from "@/assets/dsdt-hero.jpg";

const PosterShowcase = () => (
  <section className="relative py-20 px-6 overflow-hidden">
    {/* Ambient glow */}
    <div
      className="absolute inset-0 opacity-40"
      style={{ background: "var(--gradient-radial-glow)" }}
    />

    <div className="relative mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
          Official Poster
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">
          Meet the <span className="text-gradient-fire">Cast</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Kabir, Sia & Ananya — three lives bound by love, loyalty and vengeance.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Glow halo */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-fire opacity-25 blur-3xl" />
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-gold">
          <img
            src={heroImg}
            alt="Dil Se Deewangi Tak — official poster featuring Kabir, Sia and Ananya"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default PosterShowcase;

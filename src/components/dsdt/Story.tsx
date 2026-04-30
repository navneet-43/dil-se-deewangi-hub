const Story = () => (
  <section id="story" className="relative py-24 px-6 overflow-hidden">
    <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-glow)" }} />
    <div className="relative mx-auto max-w-5xl">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Synopsis</p>
        <h2 className="text-4xl font-bold md:text-5xl">
          A love story <span className="text-gradient-fire">forged in fire</span>.
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
        <p>
          <span className="text-foreground font-semibold">Kabir and Sia's</span> perfect love story shatters when his vengeful chacha resurfaces, dragging him into a dark world of power and legacy. As Kabir begins to change, Sia fights to hold onto the man she once knew — but their love starts slipping through her fingers.
        </p>
        <p>
          In the midst of it all, <span className="text-primary font-semibold">Ananya</span> — mysterious, strong, and unwavering — emerges as Kabir's greatest ally… and possibly the biggest threat to Sia's place in his life.
        </p>
        <p>
          As buried truths about his father's death come to light, Kabir is pulled into a relentless path of vengeance — explosive shootouts, brutal hand-to-hand combat, and high-stakes stunts. With his mother and Sia caught in the crossfire, Kabir must fight against time, power, and his own darkness to bring his father's killers to justice.
        </p>
        <p className="text-foreground italic font-medium">
          But as bullets fly and loyalties blur — how will Kabir and Sia find their way back to each other when love itself becomes the biggest battle?
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[
          { name: "Kabir", role: "The Heir of Vengeance" },
          { name: "Sia", role: "The Love He's Losing" },
          { name: "Ananya", role: "The Storm Between Them" },
        ].map((c) => (
          <div key={c.name} className="rounded-xl border border-primary/20 bg-card/40 p-6 text-center backdrop-blur">
            <h3 className="text-2xl font-bold text-gradient-gold mb-1">{c.name}</h3>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{c.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Story;

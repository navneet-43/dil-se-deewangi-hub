const Footer = () => (
  <footer className="relative border-t border-border px-6 py-12">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
      <div>
        <p className="font-display text-xl font-extrabold text-gradient-gold" style={{ fontFamily: "Cinzel, serif" }}>
          ALRIGHT!
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alright TV. All rights reserved.
        </p>
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="https://alright.watch/" className="hover:text-primary transition-colors">Alright TV</a>
        <a href="#watch" className="hover:text-primary transition-colors">Watch DSDT</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </div>
    </div>
  </footer>
);

export default Footer;

import Hero from "@/components/dsdt/Hero";
import About from "@/components/dsdt/About";
import PosterShowcase from "@/components/dsdt/PosterShowcase";

import Story from "@/components/dsdt/Story";
import WhereToWatch from "@/components/dsdt/WhereToWatch";
import FAQ from "@/components/dsdt/FAQ";
import Footer from "@/components/dsdt/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <div className="ember-divider" />
      <PosterShowcase />
      <About />
      <Story />
      <WhereToWatch />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;

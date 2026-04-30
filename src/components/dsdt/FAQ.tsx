import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where can I watch Dil Se Deewangi Tak?",
    a: "Dil Se Deewangi Tak is available exclusively on the Alright TV app, free to download on Google Play and the App Store.",
  },
  {
    q: "How can I start watching Dil Se Deewangi Tak?",
    a: "Download the Alright TV app from Google Play or the App Store. You can watch the official promo and the first few episodes free — subscribe inside the app to unlock the full season.",
  },
  {
    q: "When do new episodes of Dil Se Deewangi Tak release?",
    a: "Naye season har dopahar 12 baje — a new vertical episode drops every single day at 12:00 PM IST on Alright TV.",
  },
  {
    q: "How long is each season of Dil Se Deewangi Tak?",
    a: "Each season runs about 22 minutes, made up of short, cinematic vertical episodes designed to binge in a single sitting.",
  },
  {
    q: "Who are the main characters in Dil Se Deewangi Tak?",
    a: "The story centres on Kabir, his beloved Sia, and the mysterious Ananya — caught between love, vengeance and the legacy of Kabir's late father.",
  },
  {
    q: "Is Dil Se Deewangi Tak in Hindi?",
    a: "Yes, Dil Se Deewangi Tak is a Hindi-language vertical micro-drama produced for Alright TV.",
  },
  {
    q: "What genre is Dil Se Deewangi Tak?",
    a: "It blends romance, action, drama and thriller — explosive shootouts and emotional stakes wrapped around a passionate love story.",
  },
];

const FAQ = () => (
  <section id="faq" className="relative py-24 px-6">
    <div className="mx-auto max-w-3xl">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">FAQ</p>
        <h2 className="text-4xl font-bold md:text-5xl">
          Everything about <span className="text-gradient-gold">DSDT</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  </section>
);

export default FAQ;

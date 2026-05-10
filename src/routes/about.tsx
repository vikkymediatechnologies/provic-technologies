import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, HeartHandshake, Award, Users } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Provic Technologies" },
      {
        name: "description",
        content:
          "We're building a trusted Nigerian tech ecosystem for students, developers and creators — premium gadgets, real support, no shortcuts.",
      },
      { property: "og:title", content: "About Provic Technologies" },
      { property: "og:description", content: "A trusted tech brand for the next generation." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: HeartHandshake, title: "Trust First", text: "Every transaction earns trust. We treat every order like it's our most important." },
  { icon: Award, title: "Premium Quality", text: "Only authentic, tested gadgets — never anything we wouldn't use ourselves." },
  { icon: Users, title: "People Powered", text: "We exist to serve students, developers and creators with real human support." },
  { icon: Sparkles, title: "Modern by Default", text: "Clean experiences, fast service and tech that actually feels premium." },
];

const TIMELINE = [
  { year: "2022", title: "The idea", text: "Founded with a mission to bring trusted, premium tech to Nigerian students and creators." },
  { year: "2023", title: "First 1,000 customers", text: "Crossed our first major milestone with a 4.9-star average rating." },
  { year: "2024", title: "Nationwide expansion", text: "Same-day delivery in Lagos and trusted nationwide logistics." },
  { year: "2025", title: "Tech ecosystem", text: "Expanded into consultation, sourcing and creator workspace setup." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-glow" />
        <div className="container relative mx-auto px-4 py-20 md:py-28 text-center">
          <SectionHeading
            eyebrow="Our story"
            title="Building Nigeria's most trusted tech brand"
            description="Provic Technologies exists to help students, developers and creators access reliable gadgets and modern tech essentials — without the headaches."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid gap-8 md:grid-cols-2">
        {[
          { icon: Target, title: "Our Mission", text: "To make premium, reliable tech accessible to every student, developer and creator in Nigeria — backed by real human service and honest pricing." },
          { icon: Eye, title: "Our Vision", text: "To become the most trusted tech ecosystem on the continent — a brand people instinctively reach for when they need gadgets that just work." },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant transition"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-[var(--gold-foreground)] shadow-gold">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
            <p className="mt-3 text-muted-foreground">{c.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow="Core values" title="What we stand for" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-gold/40 transition"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold/10 text-gold">
                <v.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-semibold">{v.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow="Founder story" title="From a student need to a tech brand" />
        <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-hero p-10 shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-glow" />
          <p className="relative text-foreground/80 leading-relaxed">
            Provic was born out of a simple problem: too many Nigerian students and creators were
            being sold the wrong gadgets at the wrong prices. Our founder, a developer himself,
            set out to build a brand where trust isn't a marketing word — it's the product.
            Today, Provic helps thousands of customers buy with confidence, get real advice and
            unlock the tools they need to do their best work.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow="Timeline" title="Our journey so far" />
        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-4 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <span className="text-3xl font-bold text-gold">{t.year}</span>
                  <h4 className="mt-1 font-semibold">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </div>
                <div />
                <span className="absolute left-4 md:left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-gradient shadow-gold" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

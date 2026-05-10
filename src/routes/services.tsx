import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  PackageSearch,
  MessagesSquare,
  Briefcase,
  GraduationCap,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Provic Technologies" },
      {
        name: "description",
        content:
          "Gadget sales, device sourcing, tech consultation, workspace setup and student tech assistance.",
      },
      { property: "og:title", content: "Services — Provic Technologies" },
      { property: "og:description", content: "More than gadgets — a full tech partner." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: ShoppingBag,
    title: "Gadget Sales",
    text: "Trusted gadgets and accessories for students, developers, and creators — sourced and quality-checked.",
  },
  {
    icon: PackageSearch,
    title: "Device Sourcing",
    text: "We help you source reliable gadgets and devices based on your specific needs and budget.",
  },
  {
    icon: MessagesSquare,
    title: "Tech Consultation",
    text: "Professional guidance for choosing laptops, accessories, and productivity gadgets.",
  },
  {
    icon: Briefcase,
    title: "Workspace Setup Guidance",
    text: "Recommendations for developer setups, creator setups and productivity workspaces.",
  },
  {
    icon: GraduationCap,
    title: "Student Tech Assistance",
    text: "Helping students find affordable and reliable tech devices for learning and productivity.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-glow" />
        <div className="container relative mx-auto px-4 py-20 md:py-24 text-center">
          <SectionHeading
            eyebrow="What we do"
            title="More than a gadget store"
            description="Provic is your full-service tech partner — from sourcing to setup, we handle the details so you can focus on what matters."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-[var(--gold-foreground)] shadow-gold">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <a
                href={waLink(SITE.whatsappSales, `Hi Provic, I'd like to know more about: ${s.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold hover:gap-2 transition-all"
              >
                Inquire <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-hero p-10 md:p-14 relative overflow-hidden shadow-elegant">
          <div className="absolute inset-0 bg-glow" />
          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Not sure what you need?
              </h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                Send us a quick WhatsApp message — our team will respond with a tailored recommendation.
              </p>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <Button asChild variant="hero" size="xl">
                <a
                  href={waLink(SITE.whatsappSales, "Hi Provic, I'd like a tech recommendation.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" /> Get a Recommendation
                </a>
              </Button>
              <Button asChild variant="outlineGold" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

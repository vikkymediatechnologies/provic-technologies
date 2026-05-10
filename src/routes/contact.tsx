import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/site/section-heading";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Provic Technologies" },
      {
        name: "description",
        content:
          "Reach our sales and support team via WhatsApp, phone or email. We respond fast.",
      },
      { property: "og:title", content: "Contact Provic Technologies" },
      { property: "og:description", content: "We're here to help. Get in touch." },
    ],
  }),
  component: ContactPage,
});

const CARDS = [
  {
    icon: Phone,
    title: "Sales, Orders & Support",
    value: SITE.salesPhone,
    href: `tel:${SITE.salesPhone.replace(/\s+/g, "")}`,
    cta: "Call now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: SITE.salesPhone,
    href: waLink(SITE.whatsappSales, "Hi Provic Technologies, I'd like to place an order."),
    cta: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    cta: "Send Email",
  },
];

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent — we'll reply within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 700);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-glow" />
        <div className="container relative mx-auto px-4 py-20 md:py-24 text-center">
          <SectionHeading
            eyebrow="Get in touch"
            title="We're here to help"
            description="Reach our team via WhatsApp, phone or email — we usually respond within minutes."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid gap-6 md:grid-cols-3">
        {CARDS.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-gold hover:border-gold/40 hover:-translate-y-1 transition-all"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-[var(--gold-foreground)] shadow-gold">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-semibold">{c.title}</h3>
            <p className="mt-1 text-lg text-gold">{c.value}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-gold transition">
              {c.cta} →
            </span>
          </motion.a>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-20 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 shadow-card">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form below and we'll get back to you shortly.
          </p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@email.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="How can we help?" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your needs…" />
            </div>
            <Button variant="hero" size="lg" type="submit" disabled={loading}>
              <Send className="h-4 w-4" /> {loading ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gold" />
              <h4 className="font-semibold">Business hours</h4>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.hours}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gold" />
              <h4 className="font-semibold">Location</h4>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.address}</p>
            <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                title="Provic Technologies — Ashi Bodija, Ibadan"
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-xs font-medium text-gold hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}

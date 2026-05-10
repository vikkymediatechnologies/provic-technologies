import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  MessageCircle,
  Laptop,
  Headphones,
  Keyboard,
  BatteryFull,
  Watch,
  Cable,
  ShieldCheck,
  Truck,
  Lock,
  Tag,
  GraduationCap,
  Wrench,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { PRODUCTS } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";
import heroImg from "@/assets/hero-gadgets.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Provic Technologies — Trusted Tech Gadgets for Students, Devs & Creators" },
      {
        name: "description",
        content:
          "Premium laptops, earbuds, keyboards, power banks and smartwatches from a trusted Nigerian tech brand. Fast delivery. Secure transactions.",
      },
      { property: "og:title", content: "Provic Technologies — Premium Tech Gadgets" },
      {
        property: "og:description",
        content: "Trusted tech gadgets for students, developers and creators.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const CATEGORIES = [
  { name: "Laptops", icon: Laptop },
  { name: "Earbuds", icon: Headphones },
  { name: "Keyboards", icon: Keyboard },
  { name: "Power Banks", icon: BatteryFull },
  { name: "Smartwatches", icon: Watch },
  { name: "Accessories", icon: Cable },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Trusted Vendors", text: "Sourced from verified suppliers and tested before shipping." },
  { icon: Truck, title: "Fast Delivery", text: "Same-day in Lagos and 1–4 business days nationwide." },
  { icon: Lock, title: "Secure Transactions", text: "Multiple safe payment options with full receipts." },
  { icon: Tag, title: "Affordable Pricing", text: "Premium gadgets at honest, transparent prices." },
  { icon: GraduationCap, title: "Student-Friendly", text: "Special pricing and budget builds for students." },
  { icon: Wrench, title: "Tech Expert Support", text: "Real human support before and after your purchase." },
];

const TESTIMONIALS = [
  { name: "Adaeze N.", role: "CS Student, UNILAG", text: "I got my laptop in 2 days and it arrived well packaged. Provic were very transparent throughout — I trust them." },
  { name: "Ibrahim T.", role: "Frontend Developer", text: "The Mech 75 keyboard is incredible. They even helped me pick the right switches over WhatsApp." },
  { name: "Chiamaka E.", role: "Content Creator", text: "Premium experience from order to unboxing. The Studio 16 handles my edits like a beast." },
  { name: "David O.", role: "Backend Engineer", text: "Fastest support I've had with any gadget store in Nigeria. Will definitely buy again." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-glow-pulse" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[var(--primary-glow)]/30 blur-3xl" />

      <div className="container relative mx-auto grid gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold">
            <Star className="h-3 w-3" /> Premium Tech Brand
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Trusted Tech Gadgets for{" "}
            <span className="text-gradient-gold">Students, Developers</span> &{" "}
            <span className="text-gradient-gold">Creators</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            {SITE.name} delivers reliable gadgets, accessories and modern tech essentials
            with professionalism, trust and speed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/products"><ShoppingBag className="h-5 w-5" /> Shop Now</Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={waLink(SITE.whatsappSales, "Hi Provic, I'd like to place an order.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Verified Stock</div>
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Nationwide Delivery</div>
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-gold" /> Secure Checkout</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-border bg-muted/40 p-2 shadow-elegant overflow-hidden">
            <img
              src={heroImg}
              alt="Premium tech gadgets — laptop, earbuds, keyboard, smartwatch"
              width={1536}
              height={1024}
              className="rounded-2xl w-full h-auto"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-4 -bottom-4 hidden md:block glass-dark rounded-2xl p-4 shadow-gold"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-[var(--gold-foreground)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Trusted by</p>
                <p className="text-sm font-semibold text-foreground">10,000+ customers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -right-4 -top-4 hidden md:block glass-dark rounded-2xl p-4"
          >
            <p className="text-xs text-muted-foreground">Same-day delivery</p>
            <p className="text-sm font-semibold text-gold">In Lagos</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <SectionHeading
        eyebrow="Categories"
        title="Shop by what you do best"
        description="From study sessions to creator setups, find the right gear for every workflow."
      />
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              to="/products"
              search={{ category: c.name } as any}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-card hover:shadow-gold transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="absolute inset-0 bg-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative grid h-14 w-14 mx-auto place-items-center rounded-xl bg-gold/10 text-gold transition-transform group-hover:scale-110">
                <c.icon className="h-7 w-7" />
              </div>
              <p className="relative mt-4 text-sm font-medium">{c.name}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <SectionHeading
          align="left"
          eyebrow="Featured"
          title="Popular this week"
          description="Hand-picked gadgets our customers love."
        />
        <Button asChild variant="outlineGold">
          <Link to="/products">View all <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-hero py-20 md:py-28">
      <div className="absolute inset-0 bg-glow" />
      <div className="container relative mx-auto px-4">
        <SectionHeading
          eyebrow="Why Provic"
          title="Built on trust, delivered with care"
          description="We're more than a gadget shop — we're a tech partner you can rely on."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass-dark p-7 hover:border-gold/40 transition-all hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-[var(--gold-foreground)] shadow-gold">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by students, devs & creators"
        description="Real reviews from real Provic customers."
      />
      <div className="mt-12 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {loop.map((t, i) => (
            <article
              key={i}
              className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/80">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-[var(--gold-foreground)] font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-hero p-10 md:p-16 shadow-elegant">
        <div className="absolute inset-0 bg-glow" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Need help picking the perfect gadget?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md">
              Tell us your budget and use case — our tech experts will recommend the right setup
              for you, free of charge.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild variant="hero" size="xl">
              <a
                href={waLink(SITE.whatsappSales, "Hi Provic, I'd like a recommendation.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" /> Chat With Us
              </a>
            </Button>
            <Button asChild variant="outlineGold" size="xl">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

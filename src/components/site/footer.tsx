import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card text-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-60" />
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Trusted tech gadgets for students, developers and creators. Premium devices,
            fair prices, real support.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:border-gold hover:text-gold transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold" /> Sales & Support: {SITE.salesPhone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold" /> {SITE.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold" /> {SITE.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Get product drops & exclusive student deals.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="email"
              placeholder="you@email.com"
              className="bg-background"
              required
            />
            <Button variant="hero" type="submit">Join</Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name} · {SITE.hashtag}
      </div>
    </footer>
  );
}

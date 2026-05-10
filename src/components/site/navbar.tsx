import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60 shadow-card py-2"
          : "bg-background/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="default">
            <a
              href={waLink(SITE.whatsappSales, "Hi Provic Technologies, I'd like to chat.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" /> Chat With Us
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass border-t border-border/60"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                  activeProps={{ className: "text-gold bg-gold/10" }}
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild variant="hero" className="mt-2">
                <a
                  href={waLink(SITE.whatsappSales, "Hi Provic Technologies, I'd like to chat.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> Chat With Us
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

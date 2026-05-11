import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string; showText?: boolean }) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`} aria-label="Provic Technologies — Home">
      <img
        src={logoImg}
        alt="Provic Technologies logo"
        width={240}
        height={80}
        decoding="async"
        className="h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_2px_6px_rgba(10,21,48,0.25)] transition-transform group-hover:scale-105"
      />
    </Link>
  );
}

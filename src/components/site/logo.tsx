import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string; showText?: boolean }) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`} aria-label="Provic Technologies — Home">
      <img
        src={logoImg}
        alt="Provic Technologies logo"
        width={180}
        height={56}
        className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, formatNaira } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--gold-foreground)] shadow-gold">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {product.category}
        </span>
        <h3 className="mt-1 text-base font-semibold leading-snug">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-gold">{formatNaira(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs line-through text-muted-foreground">
              {formatNaira(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Button asChild variant="outlineGold" size="sm" className="w-full">
            <Link to="/products/$slug" params={{ slug: product.slug }}>
              <Eye className="h-4 w-4" /> View Details
            </Link>
          </Button>
          <Button asChild variant="whatsapp" size="sm" className="w-full">
            <a
              href={waLink(
                SITE.whatsappSales,
                `Hi Provic, I'd like to order: ${product.name} (${formatNaira(product.price)}).`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

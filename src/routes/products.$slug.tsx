import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  ShieldCheck,
  Truck,
  PackageCheck,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/product-card";
import { ProductReviews } from "@/components/site/product-reviews";
import { CheckoutDialog } from "@/components/site/checkout-dialog";
import { PRODUCTS, formatNaira } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Provic Technologies` },
          { name: "description", content: loaderData.product.shortDescription },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.shortDescription },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <Button asChild variant="hero" className="mt-6">
        <Link to="/products">Back to shop</Link>
      </Button>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductDetails,
});

function ProductDetails() {
  const { product } = Route.useLoaderData();
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 3);

  return (
    <>
      <section className="container mx-auto px-4 pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
      </section>

      <section className="container mx-auto px-4 py-10 grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-elegant border border-border">
            <img
              src={product.image}
              alt={product.name}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl border border-border bg-white overflow-hidden hover:border-gold/60 transition cursor-pointer"
              >
                <img src={product.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:sticky lg:top-28 self-start"
        >
          <span className="text-xs uppercase tracking-widest text-gold">
            {product.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="mt-3 text-muted-foreground">{product.description}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gold">
              {formatNaira(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-base line-through text-muted-foreground">
                {formatNaira(product.oldPrice)}
              </span>
            )}
          </div>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <Check className="h-3 w-3" />
            {product.inStock ? "In stock — ready to ship" : "Out of stock"}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <CheckoutDialog product={product} />
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={waLink(
                  SITE.whatsappSales,
                  `Hi Provic, I'd like to order: ${product.name} (${formatNaira(product.price)}).`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" /> Quick Chat
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 text-sm">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
              <ShieldCheck className="h-5 w-5 text-gold mt-0.5" />
              <div>
                <p className="font-medium">Warranty</p>
                <p className="text-muted-foreground text-xs">{product.warranty}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
              <Truck className="h-5 w-5 text-gold mt-0.5" />
              <div>
                <p className="font-medium">Delivery</p>
                <p className="text-muted-foreground text-xs">{product.delivery}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
              <PackageCheck className="h-5 w-5 text-gold mt-0.5" />
              <div>
                <p className="font-medium">Authentic</p>
                <p className="text-muted-foreground text-xs">100% verified, brand-new sealed.</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Specifications
            </h3>
            <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
              {product.specs.map((s: { label: string; value: string }) => (
                <div key={s.label} className="grid grid-cols-2 gap-4 p-4 text-sm">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <ProductReviews slug={product.slug} />

      {related.length > 0 && (
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-2xl md:text-3xl font-bold">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

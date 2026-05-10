import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

type Search = { category?: string; q?: string; sort?: string };

export const Route = createFileRoute("/products")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    category: typeof s.category === "string" ? s.category : undefined,
    q: typeof s.q === "string" ? s.q : undefined,
    sort: typeof s.sort === "string" ? s.sort : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop Premium Tech Gadgets — Provic Technologies" },
      {
        name: "description",
        content:
          "Browse laptops, earbuds, keyboards, power banks, smartwatches and accessories. Trusted gadgets, fair prices, fast delivery.",
      },
      { property: "og:title", content: "Shop Tech Gadgets — Provic Technologies" },
      { property: "og:description", content: "Premium gadgets for students, devs and creators." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const search = Route.useSearch();
  const [q, setQ] = useState(search.q ?? "");
  const [category, setCategory] = useState<string>(search.category ?? "All");
  const [sort, setSort] = useState<string>(search.sort ?? "featured");

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(needle) ||
          p.shortDescription.toLowerCase().includes(needle) ||
          p.category.toLowerCase().includes(needle),
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [q, category, sort]);

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-glow" />
        <div className="container relative mx-auto px-4 py-16 md:py-20 text-center">
          <SectionHeading
            eyebrow="Shop"
            title="All Products"
            description="Trusted gadgets curated for students, developers and creators."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search gadgets…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["All", ...CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                category === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/40 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-border text-3xl">
              🔍
            </div>
            <p className="mt-4 text-lg font-semibold">No products match your search</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different keyword or category.
            </p>
            <Button variant="outlineGold" className="mt-6" onClick={() => { setQ(""); setCategory("All"); }}>
              Reset filters
            </Button>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

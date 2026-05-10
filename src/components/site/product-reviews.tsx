import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const SEED: Record<string, Review[]> = {
  default: [
    {
      id: "s1",
      name: "Tunde A.",
      rating: 5,
      comment: "Authentic product, super fast delivery to Ibadan. Highly recommend Provic!",
      date: "2025-09-12",
    },
    {
      id: "s2",
      name: "Chika O.",
      rating: 4,
      comment: "Great build quality and the support team responded on WhatsApp instantly.",
      date: "2025-10-04",
    },
  ],
};

function storageKey(slug: string) {
  return `provic_reviews_${slug}`;
}

export function ProductReviews({ slug }: { slug: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(slug));
      if (raw) {
        setReviews(JSON.parse(raw));
      } else {
        setReviews(SEED.default);
      }
    } catch {
      setReviews(SEED.default);
    }
  }, [slug]);

  const persist = (next: Review[]) => {
    setReviews(next);
    try {
      localStorage.setItem(storageKey(slug), JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const avg = useMemo(
    () =>
      reviews.length
        ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
        : 0,
    [reviews],
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      toast.error("Please add your name and review.");
      return;
    }
    const review: Review = {
      id: crypto.randomUUID(),
      name: name.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    persist([review, ...reviews]);
    setName("");
    setComment("");
    setRating(5);
    toast.success("Thanks for your review!");
  };

  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Real feedback from verified Provic customers.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i <= Math.round(avg)
                      ? "fill-gold text-gold"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold">
              {avg.toFixed(1)} <span className="text-muted-foreground font-normal">({reviews.length})</span>
            </span>
          </div>
        </div>

        <form onSubmit={submit} className="mt-6 grid gap-3 rounded-xl border border-border bg-background p-4">
          <p className="text-sm font-semibold">Write a review</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                type="button"
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(i)}
                aria-label={`Rate ${i} stars`}
              >
                <Star
                  className={`h-6 w-6 transition ${
                    i <= (hover || rating)
                      ? "fill-gold text-gold"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="Share your experience with this product…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          />
          <Button type="submit" variant="hero" className="w-fit">
            Submit review
          </Button>
        </form>

        <div className="mt-6 divide-y divide-border">
          {reviews.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Be the first to review this product.
            </p>
          ) : (
            reviews.map((r) => (
              <div key={r.id} className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gold/10 text-gold text-sm font-semibold">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i <= r.rating ? "fill-gold text-gold" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm text-foreground/90">{r.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
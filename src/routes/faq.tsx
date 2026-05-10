import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/section-heading";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Provic Technologies" },
      {
        name: "description",
        content:
          "Answers about delivery, payment, warranty, returns, product authenticity and order tracking.",
      },
      { property: "og:title", content: "FAQ — Provic Technologies" },
      { property: "og:description", content: "Common questions, answered clearly." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "How fast is delivery?", a: "We offer same-day delivery within Lagos and 1–4 business days nationwide via trusted logistics partners." },
  { q: "What payment methods are accepted?", a: "Bank transfer, debit/credit cards, and POS on delivery in select areas. All orders include a digital receipt." },
  { q: "Are your products original?", a: "Yes. We only sell brand-new, sealed and authentic gadgets sourced from verified suppliers." },
  { q: "Do your products come with a warranty?", a: "Most products carry a 6 to 24-month warranty. The exact warranty period is listed on each product page." },
  { q: "What is your return policy?", a: "You can request a return or exchange within 7 days of delivery if the product is faulty or not as described." },
  { q: "How do I track my order?", a: "Once your order ships, we send a tracking link via WhatsApp and SMS so you can follow it in real time." },
  { q: "Do you offer student discounts?", a: "Yes — message us on WhatsApp with your student ID and we'll send you our student-friendly options." },
  { q: "Can you help me pick the right gadget?", a: "Absolutely. Our tech consultation is free — share your needs and budget and we'll recommend the best setup." },
];

function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-glow" />
        <div className="container relative mx-auto px-4 py-20 text-center">
          <SectionHeading
            eyebrow="Help center"
            title="Frequently asked questions"
            description="Everything you need to know before you order."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-card data-[state=open]:border-gold/40 data-[state=open]:shadow-gold transition"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

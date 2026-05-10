import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}

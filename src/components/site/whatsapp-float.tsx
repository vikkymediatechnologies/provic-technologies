import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href={waLink(SITE.whatsappSales, `Hi Provic Technologies, I have a question.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}

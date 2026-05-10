import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-5"
          >
            <motion.img
              src={logoImg}
              alt="Provic Technologies"
              width={120}
              height={120}
              className="h-28 w-28 object-contain drop-shadow-[0_10px_30px_rgba(212,165,40,0.35)]"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="h-1 w-40 overflow-hidden rounded-full bg-gold/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gold-gradient rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
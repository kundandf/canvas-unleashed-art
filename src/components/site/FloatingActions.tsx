import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/918530582317"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        whileHover={{ scale: 1.08 }}
        className="w-12 h-12 rounded-full grid place-items-center text-white shadow-frame"
        style={{ background: "var(--emerald-art)" }}
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>
      <motion.a
        href="tel:+918956740317"
        aria-label="Call"
        whileHover={{ scale: 1.08 }}
        className="w-12 h-12 rounded-full grid place-items-center bg-primary text-primary-foreground shadow-frame"
      >
        <Phone className="w-5 h-5" />
      </motion.a>
    </div>
  );
}

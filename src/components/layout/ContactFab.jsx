import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPhoneCall, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

// Floating action button pinned to the bottom-right of every page. Clicking
// it reveals quick-contact shortcuts (call, WhatsApp) without navigating
// away from wherever the visitor currently is on the page.
const actionVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.5 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  }),
  exit: (index) => ({
    opacity: 0,
    y: 16,
    scale: 0.5,
    transition: { delay: index * 0.04, duration: 0.18, ease: [0.4, 0, 1, 1] },
  }),
};

export default function ContactFab({ contact, social }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const whatsappHref = social?.find((item) => item.platform === "whatsapp")?.href;
  const phoneValue = contact?.phone?.value;

  useEffect(() => {
    if (!open) return;

    function closeOnOutsideClick(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function closeOnEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  if (!phoneValue && !whatsappHref) return null;

  const actions = [
    whatsappHref && {
      key: "whatsapp",
      label: "WhatsApp",
      href: whatsappHref,
      external: true,
      icon: FaWhatsapp,
      className: "bg-[#25D366] hover:bg-[#1fb257]",
    },
    phoneValue && {
      key: "call",
      label: "Call us",
      href: `tel:${phoneValue}`,
      external: false,
      icon: FiPhoneCall,
      className: "bg-primary hover:bg-primary-dark",
    },
  ].filter(Boolean);

  return (
    <div
      ref={containerRef}
      className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-8 sm:bottom-8"
    >
      <AnimatePresence>
        {open &&
          actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.key}
                custom={index}
                variants={actionVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex items-center gap-3"
              >
                <span className="rounded-full bg-dark px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-card">
                  {action.label}
                </span>
                <a
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  aria-label={action.label}
                  onClick={() => setOpen(false)}
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-lg text-white shadow-card-hover transition-colors duration-200 ${action.className}`}
                >
                  <Icon aria-hidden="true" />
                </a>
              </motion.div>
            );
          })}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        whileTap={{ scale: 0.92 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-card-hover transition-colors duration-200 hover:bg-primary-dark"
      >
        {!open && (
          <span
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/60"
            aria-hidden="true"
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "whatsapp"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex"
          >
            {open ? (
              <FiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function TermsModal({ open, onClose, data }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-110 flex items-center justify-center bg-ink/50 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-card-hover"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border-soft px-6 py-5">
              <div>
                <h2
                  id="terms-modal-title"
                  className="font-heading text-xl font-bold text-ink"
                >
                  {data.title}
                </h2>
                <p className="mt-1 text-sm text-ink-faint">
                  Last updated: {data.lastUpdated}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-ink"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5">
              <div className="grid gap-5">
                {data.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="mb-1.5 font-semibold text-ink">
                      {section.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

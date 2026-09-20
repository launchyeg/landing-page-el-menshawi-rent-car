import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMenu, FiPhone, FiUser, FiX } from "react-icons/fi";
import Brand from "./Brand";

export default function Navbar({ brand, links, contactCta }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      className="sticky top-0 z-[100] border-b border-border-soft bg-white/90 backdrop-blur-md"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Brand {...brand} />

        <nav
          className="hidden items-center gap-8 min-[900px]:flex"
          aria-label="Primary"
        >
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <FiChevronDown aria-hidden="true" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.ul
                      className="absolute top-[calc(100%+0.75rem)] left-1/2 min-w-45 -translate-x-1/2 rounded-2xl border border-border-soft bg-white p-2 shadow-card-hover"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap text-ink-soft hover:bg-surface-alt hover:text-ink"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contactCta.href}
            className="btn btn-primary hidden min-[900px]:inline-flex"
          >
            {contactCta.label}
            <FiPhone aria-hidden="true" />
          </a>
          <button
            type="button"
            className="hidden h-10.5 w-10.5 items-center justify-center rounded-full border border-border text-ink min-[900px]:inline-flex"
            aria-label="Account"
          >
            <FiUser aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex h-10.5 w-10.5 items-center justify-center rounded-full border border-border text-lg text-ink min-[900px]:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="overflow-hidden border-t border-border-soft min-[900px]:hidden"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-1 px-5 pt-4 pb-6">
              {links.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-border-soft py-3 text-base font-semibold text-ink"
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <div className="flex flex-col pl-4">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="py-2.5 text-sm text-ink-soft"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={contactCta.href}
                className="btn btn-primary mt-4 w-full"
                onClick={() => setIsOpen(false)}
              >
                {contactCta.label}
                <FiPhone aria-hidden="true" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { LuUserRound } from "react-icons/lu";

const image = {
  src: "https://res.cloudinary.com/dirbnpgsp/image/upload/f_auto,q_auto,w_900/v1789999369/Workspace/elmenshawi/669625551_1386624373483924_1465861422971480067_n_c1fth8.jpg",
  alt: "Woman smiling behind the wheel of a car",
};

export default function Testimonials({ eyebrow, heading, google, items }) {
  const [index, setIndex] = useState(0);
  const active = items[index];

  const goTo = (dir) => {
    setIndex((current) => (current + dir + items.length) % items.length);
  };

  return (
    <section className="section section-alt" id="testimonials">
      <div className="wrap grid items-center gap-8 md:grid-cols-[1fr_0.85fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-heading">{heading}</h2>

          <div className="relative mt-7 overflow-hidden rounded-2xl bg-white p-8 shadow-card">
            <span
              className="absolute top-2 right-6 font-serif text-8xl leading-none text-border"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="mb-4">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-alt text-xl text-ink-faint"
                aria-hidden="true"
              >
                <LuUserRound />
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                className="relative min-h-[6.5em] text-lg leading-relaxed text-ink-soft"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                &ldquo;{active.quote}&rdquo;
              </motion.p>
            </AnimatePresence>
            <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-5">
              <span className="font-bold">{active.name}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  aria-label="Previous testimonial"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FiArrowLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  aria-label="Next testimonial"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-4/3 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>

      {google && (
        <motion.div
          className="wrap mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-card sm:flex-row sm:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="flex items-center gap-4">
            <FcGoogle className="h-10 w-10 shrink-0" aria-hidden="true" />
            <div>
              <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-ink">
                {google.note}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={google.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {google.readCta}
            </a>
            <a
              href={google.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {google.writeCta}
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}

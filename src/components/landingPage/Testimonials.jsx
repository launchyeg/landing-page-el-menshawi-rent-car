import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function Testimonials({ eyebrow, heading, items, video }) {
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
              className="absolute top-2 right-6 font-serif text-6xl leading-none text-border"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="mb-4">
              <img
                src={active.avatar}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />
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
            src={video.src}
            alt={video.alt}
            className="aspect-4/3 h-full w-full object-cover"
          />
          <motion.button
            type="button"
            aria-label="Play testimonial video"
            className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-ink shadow-card-hover"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <FiPlay aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

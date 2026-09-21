import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../lib/motion";

export default function Services({
  id,
  eyebrow,
  heading,
  images,
  items,
  viewAllCta,
}) {
  return (
    <section className="section" id={id}>
      <div className="wrap grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-heading">{heading}</h2>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <video
              src={images.main.src}
              aria-label={images.main.alt}
              className="aspect-4/2 w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>

          <motion.ul
            className="mt-6"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {items.map((item) => (
              <motion.li key={item.label} variants={staggerItem}>
                <p className="flex items-center gap-4 border-b border-border-soft py-4 text-ink">
                  <span className="w-6 text-sm font-bold text-ink-faint">
                    {item.number}
                  </span>
                  <span className="flex-1 font-semibold">{item.label}</span>
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-6 md:items-end md:justify-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
        >
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src={images.secondary.src}
              alt={images.secondary.alt}
              className="aspect-square w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <motion.a
            href={viewAllCta.href}
            className="btn group border-ink bg-transparent text-ink hover:text-primary hover:border-primary self-start"
          >
            {viewAllCta.label}
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

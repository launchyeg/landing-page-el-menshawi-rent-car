import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
            <img
              src={images.main.src}
              alt={images.main.alt}
              className="aspect-4/3 w-full object-cover"
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
                <a
                  href={item.href}
                  className="group flex items-center gap-4 border-b border-border-soft py-4 text-ink transition-colors hover:text-primary"
                >
                  <span className="w-6 text-sm font-bold text-ink-faint">
                    {item.number}
                  </span>
                  <span className="flex-1 font-semibold">{item.label}</span>
                  <FiArrowRight
                    className="text-ink-faint transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
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
            />
          </div>
          <a href={viewAllCta.href} className="btn btn-outline self-start">
            {viewAllCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

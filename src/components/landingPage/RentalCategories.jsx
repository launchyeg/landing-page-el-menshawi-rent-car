import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../lib/motion";

export default function RentalCategories({ heading, items }) {
  return (
    <section className="section">
      <div className="wrap grid gap-8 md:grid-cols-[0.8fr_2.2fr] md:items-center">
        <motion.h2
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {heading}
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="relative aspect-[3.5/4] overflow-hidden rounded-2xl bg-ink"
              variants={staggerItem}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,13,18,0.05)] to-[rgba(11,13,18,0.40)]" />
              <span className="absolute bottom-4.5 left-4.5 text-lg font-bold text-white">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

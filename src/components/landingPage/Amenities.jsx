import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../lib/motion";
import { amenityIcons } from "../../lib/icons";

export default function Amenities({ eyebrow, heading, features, images }) {
  return (
    <section className="section">
      <div className="wrap">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-heading">{heading}</h2>
        </motion.div>

        <div className="mt-8 grid gap-3 md:grid-cols-[0.9fr_1fr_1fr] md:items-stretch">
          <motion.ul
            className="grid gap-3"
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {features.map((feature) => {
              const Icon = amenityIcons[feature.icon];
              return (
                <motion.li
                  key={feature.label}
                  className="flex items-center gap-3 rounded-lg bg-surface-alt px-4 py-3.5 text-sm font-semibold"
                  variants={staggerItem}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
                    <Icon aria-hidden="true" />
                  </span>
                  {feature.label}
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            className="overflow-hidden rounded-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="aspect-4/3 h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="aspect-4/3 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

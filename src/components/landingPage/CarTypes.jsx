import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../lib/motion";

export default function CarTypes({ eyebrow, heading, items }) {
  return (
    <section className="section" id="car-types">
      <div className="wrap">
        <motion.div
          className="mb-10 flex flex-col items-center text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-heading max-w-none">{heading}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-5 md:grid-cols-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {items.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="group relative block aspect-[3.5/4] overflow-hidden rounded-2xl bg-ink"
              variants={staggerItem}
              whileHover="hover"
            >
              <motion.img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 h-full w-full object-cover"
                variants={{ hover: { scale: 1.08 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,13,18,0.05)] to-[rgba(11,13,18,0.40)]" />
              <span className="absolute bottom-4.5 left-4.5 text-lg font-bold text-white">
                {item.label}
              </span>
              <motion.span
                className="absolute right-4 bottom-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"
                variants={{ hover: { rotate: 45 } }}
                transition={{ duration: 0.25 }}
              >
                <FiArrowUpRight aria-hidden="true" />
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

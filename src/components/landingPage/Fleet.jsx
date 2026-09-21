import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../lib/motion";
import { specIcons } from "../../lib/icons";

const specOrder = ["seats", "bags", "transmission", "fuel"];

export default function Fleet({ id, eyebrow, heading, cars }) {
  return (
    <section className="section section-alt" id={id}>
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
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {cars.map((car) => (
            <motion.article
              key={car.id}
              className="overflow-hidden rounded-2xl bg-white shadow-card"
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-3/2 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5 pb-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">{car.name}</h3>
                  <span className="shrink-0 rounded-full bg-tag-bg px-2.5 py-1.5 text-xs font-bold text-primary">
                    {car.category}
                  </span>
                </div>
                <ul className="mb-4 flex flex-wrap gap-3.5 border-b border-border-soft pb-4">
                  {specOrder.map((key) => {
                    const Icon = specIcons[key];
                    return (
                      <li
                        key={key}
                        className="inline-flex items-center gap-1.5 text-sm text-ink-soft"
                      >
                        {Icon && <Icon aria-hidden="true" />}
                        {car.specs[key]}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="m-0">
                    <span className="mb-1 block text-xs font-bold text-primary">
                      Starting Price
                    </span>
                    <span className="font-bold text-ink">
                      {car.price} {car.currency}
                    </span>{" "}
                    <span className="text-sm text-ink-faint">
                      / {car.period}
                    </span>
                  </p>
                  <a
                    href={car.href}
                    aria-label={`View ${car.name}`}
                    className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

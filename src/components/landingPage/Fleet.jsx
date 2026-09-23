import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUp, staggerItem, viewportOnce } from "../../lib/motion";
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <motion.article
              key={car.id}
              className="overflow-hidden rounded-2xl bg-white shadow-card"
              variants={staggerItem}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
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
                <a
                  href={car.href}
                  aria-label={`View ${car.name}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-tag-bg px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Ask for Price
                  <FiArrowUpRight aria-hidden="true" className="text-sm" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

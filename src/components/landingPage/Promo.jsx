import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Promo({ card, experience, landscape }) {
  return (
    <section className="section">
      <div className="wrap grid gap-5 md:grid-cols-[1fr_1.15fr]">
        <div className="grid gap-5">
          <motion.div
            className="relative aspect-4/2 overflow-hidden rounded-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <img
              src={card.image.src}
              alt={card.image.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,13,18,0.1)] to-[rgba(11,13,18,0.55)]" />
            <div className="relative flex h-full flex-col justify-end gap-4 p-6">
              <p className="max-w-[22ch] font-heading text-lg font-bold text-white">
                {card.heading}
              </p>
              <motion.a
                href={card.cta.href}
                className="btn btn-primary group self-start"
              >
                {card.cta.label}
                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-4/2 overflow-hidden rounded-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            <img
              src={experience.image.src}
              alt={experience.image.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,13,18,0.1)] to-[rgba(11,13,18,0.55)]" />
            <div className="relative flex h-full flex-col justify-end gap-4 p-6 text-white">
              <p className="font-heading text-lg font-bold text-white">
                {experience.label}
              </p>
              <span className="font-heading text-4xl font-extrabold">
                {experience.value}
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-4/3 overflow-hidden rounded-2xl md:aspect-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
        >
          <img
            src={landscape.image.src}
            alt={landscape.image.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(11,13,18,0.7)] via-transparent to-transparent" />
          <div className="relative flex h-full flex-col items-center justify-end p-6">
            <p className="max-w-md text-center text-lg font-semibold text-white">
              {landscape.tagline}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

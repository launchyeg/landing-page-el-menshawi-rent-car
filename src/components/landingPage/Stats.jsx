import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function Stats({ experience, tagline }) {
  return (
    <section className="section-alt">
      <div className="wrap grid gap-5 py-10 md:grid-cols-2">
        <motion.div
          className="relative min-h-35 overflow-hidden rounded-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <img
            src={experience.image.src}
            alt={experience.image.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(11,13,18,0.55)]" />
          <div className="relative flex h-full flex-col justify-between gap-2 p-6 text-white">
            <span className="text-sm font-semibold">{experience.label}</span>
            <span className="font-heading text-4xl font-extrabold">
              {experience.value}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center rounded-2xl bg-ink p-6 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
        >
          <p className="text-lg leading-snug font-semibold">{tagline}</p>
        </motion.div>
      </div>
    </section>
  );
}

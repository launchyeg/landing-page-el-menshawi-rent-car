import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function About({
  id,
  heading,
  image,
  panelTitle,
  description,
  stats,
  cta,
}) {
  return (
    <section className="section" id={id}>
      <div className="wrap grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h2 className="section-heading mb-6 max-w-[32ch]">{heading}</h2>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-4/3 h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="self-start rounded-2xl bg-surface-alt p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
        >
          <h3 className="mb-3 font-heading text-xl font-bold sm:text-2xl">
            {panelTitle}
          </h3>
          <p className="mb-7 text-ink-soft">{description}</p>

          <dl className="mb-7 grid grid-cols-2 gap-x-6 gap-y-5">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-border pt-2.5">
                <dt className="mb-1 text-sm font-bold text-ink">
                  {stat.label}
                </dt>
                <dd className="text-sm text-ink-soft">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <a href={cta.href} className="btn btn-primary">
            {cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function Promo({ card, secondaryImages }) {
  const [handoffImage, landscapeImage] = secondaryImages;

  return (
    <section className="section">
      <div className="wrap grid gap-5 md:grid-cols-[1fr_1.15fr]">
        <div className="grid gap-5">
          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-2xl"
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
            <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,13,18,0.1)] to-[rgba(11,13,18,0.75)]" />
            <div className="relative flex h-full flex-col justify-end gap-4 p-6">
              <p className="max-w-[22ch] font-heading text-lg font-bold text-white">
                {card.heading}
              </p>
              <a href={card.cta.href} className="btn btn-light self-start">
                {card.cta.label}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            <img
              src={handoffImage.src}
              alt={handoffImage.alt}
              className="aspect-video w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="overflow-hidden rounded-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
        >
          <img
            src={landscapeImage.src}
            alt={landscapeImage.alt}
            className="aspect-4/3 h-full w-full object-cover md:aspect-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

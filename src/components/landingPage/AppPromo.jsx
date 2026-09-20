import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function AppPromo({
  heading,
  description,
  note,
  phoneImage,
  qrImage,
}) {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <motion.div
          className="grid items-center gap-6 rounded-2xl bg-white p-7 md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="mx-auto w-full max-w-55 overflow-hidden rounded-xl">
            <img
              src={phoneImage.src}
              alt={phoneImage.alt}
              className="block w-full"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-2.5 font-heading text-xl font-bold sm:text-2xl">
              {heading}
            </h2>
            <p className="mb-3 text-ink-soft">{description}</p>
            <p className="text-sm font-bold">{note}</p>
          </div>

          <div className="mx-auto w-35 overflow-hidden rounded-lg border border-border">
            <img src={qrImage.src} alt={qrImage.alt} className="block w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

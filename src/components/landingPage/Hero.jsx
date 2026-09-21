import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { staggerContainer, staggerItem } from "../../lib/motion";

export default function Hero({
  heading,
  subheading,
  subtext,
  primaryCta,
  secondaryCta,
  image,
}) {
  return (
    <section
      className="relative flex min-h-[640px] items-center overflow-hidden text-white md:min-h-[760px]"
      id="top"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,13,18,0.35)] via-[rgba(11,13,18,0.15)] to-[rgba(11,13,18,0.45)]" />
      <motion.div
        className="wrap relative z-1 flex flex-col items-center py-16 text-center"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={staggerItem}
          className="max-w-3xl font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-tight font-bold tracking-tight text-white"
        >
          {heading}
        </motion.h1>
        <motion.h2
          variants={staggerItem}
          className="-mt-1 max-w-3xl font-heading text-[clamp(2.25rem,4vw+1rem,3.25rem)] leading-tight font-semibold tracking-tight text-primary"
        >
          {subheading}
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mt-5 max-w-4xl text-lg text-white/85"
        >
          {subtext}
        </motion.p>
        <motion.div
          variants={staggerItem}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href={primaryCta.href}
            className="btn btn-light group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            {primaryCta.label}
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </motion.a>
          <motion.a
            href={secondaryCta.href}
            className="btn group border-white/50 bg-transparent text-white hover:border-white"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            {secondaryCta.label}
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

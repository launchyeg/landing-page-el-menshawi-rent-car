import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../lib/motion";

export default function Blog({ id, eyebrow, heading, posts, viewAllCta }) {
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
          className="grid grid-cols-1 gap-7 md:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href={post.href}
              className="group block text-ink"
              variants={staggerItem}
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-3/2 w-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3.5 border-b border-border pb-3.5 text-base leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-ink-faint">
                <span>{post.date}</span>
                <span
                  className="h-1 w-1 rounded-full bg-ink-faint"
                  aria-hidden="true"
                />
                <span>{post.category}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a href={viewAllCta.href} className="btn btn-primary">
            {viewAllCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

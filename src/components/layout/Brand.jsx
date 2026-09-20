// Two-line brand lockup — the main name with a smaller line underneath —
// shared by the Navbar and Footer so the logo treatment stays consistent.
export default function Brand({ name, subtitle, href, tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <a href={href} className="inline-flex flex-col leading-none">
      <span
        className={`font-heading text-xl font-extrabold tracking-tight sm:text-2xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {name}
      </span>
      <span
        className={`mt-1 text-xs font-semibold tracking-[0.2em] uppercase ${
          isDark ? "text-white/50" : "text-ink-faint"
        }`}
      >
        {subtitle}
      </span>
    </a>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCalendar,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiTag,
} from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { fadeUp, viewportOnce } from "../../lib/motion";
import TermsModal from "./TermsModal";

const emptyValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pickupDate: "",
  dropoffDate: "",
  carType: "",
  message: "",
};

function Field({ icon: Icon, label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && "*"}
      </span>
      <span className="flex items-center gap-2 rounded-lg border border-border px-3.5 py-2.5 transition-colors focus-within:border-primary">
        <Icon className="shrink-0 text-ink-faint" aria-hidden="true" />
        {children}
      </span>
    </label>
  );
}

export default function Booking({
  id,
  eyebrow,
  heading,
  intro,
  findUsLabel,
  followLabel,
  form,
  contact,
  social,
  carTypeOptions,
  termsAndPrivacy,
}) {
  const [values, setValues] = useState(emptyValues);
  const [termsOpen, setTermsOpen] = useState(false);

  const handleChange = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const digits = contact.phone.value.replace(/\D/g, "");
    const lines = [
      "New booking request:",
      `Name: ${`${values.firstName} ${values.lastName}`.trim()}`,
      values.email && `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.pickupDate && `Pick-up date: ${values.pickupDate}`,
      values.dropoffDate && `Drop-off date: ${values.dropoffDate}`,
      values.carType && `Car type: ${values.carType}`,
      values.message && `Message: ${values.message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${digits}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="section" id={id}>
      <div className="wrap grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="flex flex-col"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-heading">{heading}</h2>

          <div className="mt-10">
            <p className="mb-3 text-sm font-bold text-ink">{findUsLabel}</p>
            <p className="mb-4 max-w-xs text-ink-soft">
              {contact.office.value}
            </p>
            <a
              href={`mailto:${contact.email.value}`}
              className="block font-semibold text-ink underline decoration-border underline-offset-4 transition-colors hover:text-primary"
            >
              {contact.email.value}
            </a>
            <a
              href={`tel:${contact.phone.value}`}
              className="block font-semibold text-ink underline decoration-border underline-offset-4 transition-colors hover:text-primary"
            >
              {contact.phone.value}
            </a>
          </div>

          <div className="mt-10 pt-10 md:mt-auto">
            <p className="mb-3 text-sm font-bold text-ink">{followLabel}</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {social.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-semibold text-ink capitalize transition-colors hover:text-primary"
                >
                  {item.platform}
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
        >
          <p className="mb-6 text-ink-soft">{intro}</p>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field icon={LuUserRound} label={form.firstName.label} required>
                <input
                  type="text"
                  required
                  placeholder={form.firstName.placeholder}
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  className="w-full text-sm outline-none placeholder:text-ink-faint"
                />
              </Field>
              <Field icon={LuUserRound} label={form.lastName.label}>
                <input
                  type="text"
                  placeholder={form.lastName.placeholder}
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  className="w-full text-sm outline-none placeholder:text-ink-faint"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field icon={FiMail} label={form.email.label} required>
                <input
                  type="email"
                  required
                  placeholder={form.email.placeholder}
                  value={values.email}
                  onChange={handleChange("email")}
                  className="w-full text-sm outline-none placeholder:text-ink-faint"
                />
              </Field>
              <Field icon={FiPhone} label={form.phone.label}>
                <input
                  type="tel"
                  placeholder={form.phone.placeholder}
                  value={values.phone}
                  onChange={handleChange("phone")}
                  className="w-full text-sm outline-none placeholder:text-ink-faint"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field icon={FiCalendar} label={form.pickupDate.label} required>
                <input
                  type="date"
                  required
                  value={values.pickupDate}
                  onChange={handleChange("pickupDate")}
                  className="w-full text-sm outline-none placeholder:text-ink-faint"
                />
              </Field>
              <Field
                icon={FiCalendar}
                label={form.dropoffDate.label}
                required
              >
                <input
                  type="date"
                  required
                  value={values.dropoffDate}
                  onChange={handleChange("dropoffDate")}
                  className="w-full text-sm outline-none placeholder:text-ink-faint"
                />
              </Field>
            </div>

            <Field icon={FiTag} label={form.carType.label} required>
              <select
                required
                value={values.carType}
                onChange={handleChange("carType")}
                className="w-full bg-transparent text-sm text-ink outline-none"
              >
                <option value="" disabled>
                  {form.carType.placeholder}
                </option>
                {carTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                {form.message.label}
              </span>
              <span className="flex items-start gap-2 rounded-lg border border-border px-3.5 py-2.5 transition-colors focus-within:border-primary">
                <FiMessageSquare
                  className="mt-0.5 shrink-0 text-ink-faint"
                  aria-hidden="true"
                />
                <textarea
                  rows={4}
                  placeholder={form.message.placeholder}
                  value={values.message}
                  onChange={handleChange("message")}
                  className="w-full resize-none text-sm outline-none placeholder:text-ink-faint"
                />
              </span>
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-border accent-primary"
                />
                {form.consentLabel}{" "}
                <button
                  type="button"
                  onClick={() => setTermsOpen(true)}
                  className="underline hover:text-primary"
                >
                  {form.termsLabel}
                </button>{" "}
                &amp;{" "}
                <button
                  type="button"
                  onClick={() => setTermsOpen(true)}
                  className="underline hover:text-primary"
                >
                  {form.privacyLabel}
                </button>
                .
              </label>

              <motion.button
                type="submit"
                className="btn btn-primary group"
                whileTap={{ scale: 0.97 }}
              >
                {form.submitLabel}
                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      <TermsModal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        data={termsAndPrivacy[0]}
      />
    </section>
  );
}

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Brand from "./Brand";
import { socialIcons } from "../../lib/icons";

export default function Footer({
  id,
  brand,
  copyright,
  developer,
  columns,
  contact,
  social,
}) {
  return (
    <footer className="bg-dark pt-16 text-white/75" id={id}>
      <div className="wrap grid gap-10 pb-10 lg:grid-cols-[0.8fr_1.6fr]">
        <div className="flex flex-col gap-2">
          <Brand {...brand} tone="dark" />
          <p className="text-sm text-white/50">{copyright}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm tracking-[0.08em] text-white/45 uppercase">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap grid gap-6 border-t border-dark-border py-7 md:grid-cols-3">
        <div className="flex items-start gap-3 text-sm">
          <FiMapPin
            className="mt-0.5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-white/45">
              {contact.office.label}
            </span>
            <span className="text-white/85">{contact.office.value}</span>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <FiMail className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-white/45">
              {contact.email.label}
            </span>
            <a
              href={`mailto:${contact.email.value}`}
              className="text-white/85 hover:text-primary"
            >
              {contact.email.value}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <FiPhone
            className="mt-0.5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-white/45">
              {contact.phone.label}
            </span>
            <a
              href={`tel:${contact.phone.value}`}
              className="text-white/85 hover:text-primary"
            >
              {contact.phone.value}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-dark-border py-6 text-sm">
        <div className="text-white/50">
          <span>{copyright}</span> Developed by{" "}
          <a
            href={developer}
            className="text-white hover:text-white/50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launchy
          </a>
        </div>
        <div className="flex gap-3">
          {social.map((item) => {
            const Icon = socialIcons[item.platform];
            return (
              <a
                key={item.platform}
                href={item.href}
                aria-label={item.platform}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-dark-border text-white transition-colors hover:border-primary hover:bg-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

import { ArrowUp, Clock, Mail, MapPin } from 'lucide-react';
import { company, services } from '../content/site';
import Logo from './ui/Logo';
import SocialLinks from './ui/SocialLinks';

const companyLinks = [
  { label: 'Why LoDi', href: '/#why-lodi' },
  { label: 'Technology', href: '/#technologies' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Our Approach', href: '/#approach' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Contact', href: '/#contact' },
];

const linkClass = 'text-slate-300 transition-colors hover:text-white';
const headingClass = 'border-b border-white/10 pb-3 text-sm font-bold uppercase tracking-wider text-white';

export default function Footer() {
  const { address } = company;

  return (
    <footer className="bg-ink text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="space-y-5 lg:col-span-4">
          <a href="/#home" className="inline-block bg-white px-4 py-2.5" aria-label="LoDi Tech Consulting, home">
            <Logo className="h-12" />
          </a>
          <p className="max-w-sm leading-relaxed">
            Enterprise IT consulting specializing in SAP ECC, S/4HANA &amp; BTP, SAP data
            archiving, AWS cloud migration, MES and AI-driven automation.
          </p>
          <SocialLinks
            linkClassName="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-brand hover:text-white"
          />
        </div>

        <nav aria-labelledby="footer-company" className="space-y-4 lg:col-span-2">
          <h2 id="footer-company" className={headingClass}>Company</h2>
          <ul className="space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}><a href={link.href} className={linkClass}>{link.label}</a></li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services" className="space-y-4 lg:col-span-3">
          <h2 id="footer-services" className={headingClass}>Services</h2>
          <ul className="space-y-2.5">
            {services.map((service) => (
              <li key={service.id}><a href={`/#service-${service.id}`} className={linkClass}>{service.title}</a></li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4 lg:col-span-3">
          <h2 className={headingClass}>Corporate office</h2>
          <address className="space-y-3 not-italic">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
              <span>
                {company.legalName}, {address.street}, {address.locality}, {address.region} {address.postalCode},{' '}
                {address.country}
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className={`${linkClass} break-all`}>{company.email}</a>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
              <span>{company.hours.display}</span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 bg-ink-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy/" className={linkClass}>Privacy Policy</a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0 })}
              className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-brand hover:text-white cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { company } from '../content/site';
import { useConsultation } from '../lib/consultation';

export default function ContactCTA() {
  const openConsultation = useConsultation();

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand to-brand-600 px-6 py-14 text-center text-white shadow-2xl shadow-brand/25 sm:px-12 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative mx-auto max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
              Free consultation
            </p>
            <h2 id="contact-title" className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Ready to accelerate your digital transformation?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-50/90">
              Let’s discuss your business challenges and identify the right technology solution.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-bold text-brand-700 shadow-lg shadow-black/10 transition-all hover:bg-brand-50 active:translate-y-px cursor-pointer"
              >
                Schedule a consultation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-7 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Email us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-blue-50/90">
              <a href={company.phone.href} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone.display}
              </a>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {company.hours.display}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

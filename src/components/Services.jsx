import { useId, useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { services } from '../content/site';
import { useConsultation } from '../lib/consultation';
import { buttonClass } from '../lib/styles';
import SectionHeader from './ui/SectionHeader';
import Dialog from './ui/Dialog';

export default function Services() {
  const openConsultation = useConsultation();
  const [selected, setSelected] = useState(null);
  const dialogTitleId = useId();

  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader id="services-title" eyebrow="Core services" icon={Sparkles} title="End-to-end solutions." accent="Measurable impact.">
          Six practices, one accountable partner: from your SAP core to cloud, integration, data, AI and day-to-day support.
        </SectionHeader>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.id}
                id={`service-${service.id}`}
                className="group relative flex flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-brand has-[button:focus-visible]:ring-offset-2"
              >
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-brand-600">
                  <button
                    type="button"
                    onClick={() => setSelected(service)}
                    aria-haspopup="dialog"
                    className="text-left after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none cursor-pointer"
                  >
                    {service.title}
                  </button>
                </h3>
                <p className="mt-1 text-xs font-semibold text-muted">{service.subtitle}</p>
                <p className="mt-3 mb-6 text-sm leading-relaxed text-muted">{service.description}</p>

                <span aria-hidden="true" className="mt-auto flex items-center justify-between border-t border-line pt-4 text-xs font-bold text-brand-600">
                  View capabilities
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <Dialog open={selected !== null} onClose={() => setSelected(null)} labelledBy={dialogTitleId} size="lg">
        {selected && (
          <>
            <div className="mb-6 flex items-center gap-4 pr-10">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-brand">
                <selected.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Core service</p>
                <h2 id={dialogTitleId} className="text-2xl font-bold text-ink">{selected.title}</h2>
                <p className="text-sm font-medium text-muted">{selected.subtitle}</p>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-slate-700">{selected.description}</p>

            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-ink">Key capabilities</h3>
            <ul className="mb-8 space-y-2.5">
              {selected.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-lg border border-line bg-surface p-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-brand-50 p-1 text-brand">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-ink">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  const service = selected.title;
                  setSelected(null);
                  openConsultation({ service });
                }}
                className={buttonClass({ className: 'flex-1' })}
              >
                Discuss {selected.title}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => setSelected(null)} className={buttonClass({ variant: 'ghost' })}>
                Close
              </button>
            </div>
          </>
        )}
      </Dialog>
    </section>
  );
}

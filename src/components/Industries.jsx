import { ChevronRight, Layers, MessageSquare } from 'lucide-react';
import { industries } from '../content/site';
import { useConsultation } from '../lib/consultation';
import { buttonClass } from '../lib/styles';
import SectionHeader from './ui/SectionHeader';

export default function Industries() {
  const openConsultation = useConsultation();

  return (
    <section id="industries" aria-labelledby="industries-title" className="border-y border-line bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader id="industries-title" eyebrow="Industries we serve" icon={Layers} title="Tailored solutions for" accent="every sector">
          Every industry has its own operational and regulatory needs. We deliver domain-aware SAP and cloud
          solutions built for compliance and speed.
        </SectionHeader>

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <li
                key={industry.name}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
              >
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-ink">{industry.name}</h3>
                <p className="mt-1 text-xs font-semibold text-brand-600">{industry.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{industry.desc}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Focus areas">
                  {industry.focus.map((tag) => (
                    <li key={tag} className="rounded-md border border-line bg-surface px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <button
                    type="button"
                    onClick={() => openConsultation({ context: `Industry: ${industry.name}` })}
                    aria-label={`Discuss a ${industry.name} project`}
                    className="flex w-full items-center justify-between gap-1 border-t border-line pt-4 text-left text-xs font-bold text-brand-600 transition-colors hover:text-brand-700 cursor-pointer"
                  >
                    Discuss your project
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </li>
            );
          })}

          <li className="flex flex-col justify-between rounded-2xl border-2 border-dashed border-brand/30 bg-brand-50/60 p-6">
            <div>
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white text-brand">
                <MessageSquare className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-ink">Don’t see your industry?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Our SAP, cloud and integration expertise travels well. Tell us about your business and we’ll
                show you where we can help.
              </p>
            </div>
            <button type="button" onClick={() => openConsultation()} className={buttonClass({ size: 'sm', className: 'mt-6 self-start' })}>
              Start a conversation
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

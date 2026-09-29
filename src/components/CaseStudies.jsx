import { useId, useState } from 'react';
import { ArrowRight, ArrowUpRight, CircleCheck, Sparkles } from 'lucide-react';
import { caseStudies } from '../content/site';
import { useConsultation } from '../lib/consultation';
import { buttonClass } from '../lib/styles';
import SectionHeader from './ui/SectionHeader';
import Dialog from './ui/Dialog';

/** Branded header panel: headline metric on a navy blueprint background. */
function StoryVisual({ story, large = false }) {
  const Icon = story.icon;
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-ink via-ink to-brand-700 text-white ${large ? 'rounded-xl p-7 sm:p-8' : 'p-6'}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-grid-light" />
      <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgb(63_110_182/0.6),transparent)]" />
      <div className={`relative flex flex-col justify-between gap-8 ${large ? 'min-h-40' : 'min-h-36'}`}>
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold">
            {story.category}
          </span>
          <Icon className="h-6 w-6 shrink-0 text-brand-300" aria-hidden="true" />
        </div>
        <div>
          <p className={`font-extrabold leading-none tracking-tight ${large ? 'text-6xl' : 'text-5xl'}`}>{story.headline.value}</p>
          <p className="mt-2 text-sm font-medium text-slate-300">{story.headline.label}</p>
        </div>
      </div>
    </div>
  );
}

function Metrics({ metrics, large = false }) {
  return (
    <dl className={`grid grid-cols-3 rounded-xl border border-line text-center ${large ? 'gap-4 bg-surface p-4' : 'gap-2 bg-white px-2 py-3'}`}>
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col-reverse">
          <dt className={`font-medium text-muted ${large ? 'text-xs' : 'text-[11px]'}`}>{m.label}</dt>
          <dd className={`font-extrabold text-brand-600 ${large ? 'text-xl sm:text-2xl' : 'text-base'}`}>{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function CaseStudies() {
  const openConsultation = useConsultation();
  const [active, setActive] = useState(null);
  const dialogTitleId = useId();

  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader id="case-studies-title" eyebrow="Success stories" icon={Sparkles} title="Real results." accent="Proven enterprise impact.">
          How we’ve helped enterprises modernize their IT landscape, optimize SAP environments and achieve
          measurable ROI.
        </SectionHeader>

        <ul className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((story) => (
            <li
              key={story.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-brand has-[button:focus-visible]:ring-offset-2"
            >
              <StoryVisual story={story} />

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1 text-xs font-medium text-muted">{story.client}</p>
                <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-brand-600">
                  <button
                    type="button"
                    onClick={() => setActive(story)}
                    aria-haspopup="dialog"
                    className="text-left after:absolute after:inset-0 focus-visible:outline-none cursor-pointer"
                  >
                    {story.title}
                  </button>
                </h3>
                <p className="mt-3 mb-6 text-sm leading-relaxed text-muted">{story.summary}</p>

                <div className="mt-auto">
                  <Metrics metrics={story.metrics} />
                  <span aria-hidden="true" className="mt-5 flex items-center justify-between text-xs font-bold text-brand-600">
                    Read the case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={active !== null} onClose={() => setActive(null)} labelledBy={dialogTitleId} size="xl">
        {active && (
          <>
            <div className="mb-6 pr-10">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Case study · {active.category}</p>
              <h2 id={dialogTitleId} className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">{active.title}</h2>
              <p className="mt-1 text-sm font-medium text-muted">{active.client}</p>
            </div>

            <StoryVisual story={active} large />
            <div className="mt-4">
              <Metrics metrics={active.metrics} large />
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="mb-2 font-bold text-ink">The challenge</h3>
                <p className="leading-relaxed text-muted">{active.challenge}</p>
              </div>
              <div>
                <h3 className="mb-2 font-bold text-ink">Our solution</h3>
                <p className="leading-relaxed text-muted">{active.solution}</p>
              </div>
              <div>
                <h3 className="mb-3 font-bold text-ink">Results</h3>
                <ul className="space-y-2">
                  {active.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 rounded-lg border border-line bg-surface p-3">
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                      <span className="text-sm font-medium text-ink">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  const context = `Case study: ${active.title}`;
                  setActive(null);
                  openConsultation({ context });
                }}
                className={buttonClass({ className: 'flex-1' })}
              >
                Discuss a similar project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => setActive(null)} className={buttonClass({ variant: 'ghost' })}>
                Close
              </button>
            </div>
          </>
        )}
      </Dialog>
    </section>
  );
}

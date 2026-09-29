import { Sparkles } from 'lucide-react';
import { approach } from '../content/site';
import SectionHeader from './ui/SectionHeader';

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader id="approach-title" eyebrow="Complete technology lifecycle" icon={Sparkles} title="Our" accent="approach">
          {approach.intro}
        </SectionHeader>

        {/* Connector line runs vertically on mobile and horizontally through the step markers on desktop */}
        <ol className="relative grid gap-10 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-gradient-to-b before:from-brand/60 before:to-line lg:grid-cols-5 lg:gap-6 lg:before:bottom-auto lg:before:left-[10%] lg:before:right-[10%] lg:before:top-6 lg:before:h-px lg:before:w-auto lg:before:bg-gradient-to-r">
          {approach.steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-brand bg-white text-brand shadow-md shadow-brand/15">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="lg:mt-5">
                  <p className="font-mono text-xs font-bold text-brand-600">Phase {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink">{step.title}</h3>
                  <p className="text-xs font-semibold text-muted">{step.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

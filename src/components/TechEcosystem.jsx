import { Cpu } from 'lucide-react';
import { technologies } from '../content/site';
import SectionHeader from './ui/SectionHeader';

export default function TechEcosystem() {
  return (
    <section id="technologies" aria-labelledby="tech-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader id="tech-title" eyebrow="Technology expertise" icon={Cpu} title="Enterprise" accent="technology ecosystem">
          Hands-on expertise across leading enterprise platforms, cloud, integration, data and AI.
        </SectionHeader>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <li
                key={tech.name}
                className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/60 p-5 transition-colors duration-300 hover:border-brand hover:bg-white"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-white text-brand transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="text-lg font-bold text-ink">{tech.name}</h3>
                    <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[11px] font-bold text-brand-700">{tech.badge}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{tech.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-center text-sm font-medium text-muted">
          Modernizing legacy enterprise monoliths into agile, API-driven cloud architectures.
        </p>
      </div>
    </section>
  );
}

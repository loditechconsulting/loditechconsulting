import { ArrowRight, CircleCheck, Sparkles } from 'lucide-react';
import { hero, services, approach } from '../content/site';
import { useConsultation } from '../lib/consultation';
import { buttonClass, eyebrowClass } from '../lib/styles';

export default function Hero() {
  const openConsultation = useConsultation();

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white via-surface/70 to-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgb(63_110_182/0.16),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <p className={eyebrowClass()}>
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            {hero.title}{' '}
            <span className="block text-brand">{hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => openConsultation()} className={buttonClass({ size: 'lg' })}>
              Talk to our experts
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a href="#services" className={buttonClass({ variant: 'secondary', size: 'lg' })}>
              Explore services
            </a>
          </div>

          <ul className="mt-10 grid gap-3 border-t border-line pt-6 text-sm font-medium text-muted sm:grid-cols-3 sm:gap-5">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-line bg-white/70 p-2 shadow-xl shadow-ink/5 backdrop-blur-sm">
            <div className="rounded-2xl border border-line/70 bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-sm font-bold text-ink">What we deliver</h2>
                <span className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-bold text-brand-700">
                  {services.length} practices
                </span>
              </div>

              <ul className="mt-4 grid grid-cols-2 gap-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.id}>
                      <a
                        href={`#service-${service.id}`}
                        className="group flex h-full flex-col gap-2 rounded-xl border border-line bg-surface/60 p-3.5 transition-colors hover:border-brand hover:bg-white"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-bold leading-snug text-ink">{service.title}</span>
                        <span className="text-xs leading-snug text-muted">{service.short}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 border-t border-line pt-4 text-xs font-bold text-brand-600">
                {approach.steps.map((step, i) => (
                  <span key={step.title} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-slate-400" aria-hidden="true">→</span>}
                    {step.title}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

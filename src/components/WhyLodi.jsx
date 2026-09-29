import { ArrowRight } from 'lucide-react';
import { pillars } from '../content/site';
import { useConsultation } from '../lib/consultation';
import { buttonClass, eyebrowClass } from '../lib/styles';

export default function WhyLodi() {
  const openConsultation = useConsultation();

  return (
    <section id="why-lodi" aria-labelledby="why-title" className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_70%_60%_at_20%_40%,black,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-32 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(63_110_182/0.35),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className={eyebrowClass('dark')}>Why choose us</p>
          <h2 id="why-title" className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Why <span className="text-brand-300">LoDi?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 text-pretty">
            We combine deep enterprise technology expertise with practical business understanding to deliver
            solutions that create measurable value.
          </p>
          <button
            type="button"
            onClick={() => openConsultation()}
            className={buttonClass({ className: 'mt-8' })}
          >
            Contact us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <li
                key={pillar.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-brand-300/50 hover:bg-white/[0.07]"
              >
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand/20 text-brand-300 transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{pillar.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

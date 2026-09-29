import { eyebrowClass } from '../../lib/styles';

export default function SectionHeader({ id, eyebrow, icon: Icon, title, accent, children, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className={eyebrowClass(tone)}>
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-5 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className={dark ? 'text-brand-300' : 'text-brand'}>{accent}</span>
          </>
        )}
      </h2>
      {children && (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${dark ? 'text-slate-300' : 'text-muted'}`}>
          {children}
        </p>
      )}
    </div>
  );
}

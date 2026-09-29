/** Shared class strings so buttons and links look identical wherever they appear. */

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70';

const variants = {
  primary:
    'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-600 hover:shadow-brand/40 active:translate-y-px',
  secondary:
    'bg-white text-ink border-2 border-line hover:border-brand hover:text-brand-600',
  ghost: 'bg-surface text-ink hover:bg-line',
};

const sizes = {
  sm: 'text-sm px-4 py-2.5',
  md: 'text-sm sm:text-base px-6 py-3.5',
  lg: 'text-base px-7 py-4',
};

export function buttonClass({ variant = 'primary', size = 'md', className = '' } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

const eyebrowBase =
  'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider';

const eyebrowTones = {
  light: 'bg-white border-line text-brand-600 shadow-xs',
  dark: 'bg-white/5 border-white/15 text-brand-300',
};

export function eyebrowClass(tone = 'light') {
  return `${eyebrowBase} ${eyebrowTones[tone]}`;
}

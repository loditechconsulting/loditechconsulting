import { company } from '../../content/site';

// Brand marks are drawn inline: lucide no longer ships third-party logos.
const icons = {
  linkedin: {
    label: 'LinkedIn',
    path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z',
  },
  x: {
    label: 'X (Twitter)',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
};

/** Renders only the networks that have a URL in content/site.js. */
export default function SocialLinks({ className = '', linkClassName = '', iconClassName = 'h-4 w-4' }) {
  const entries = Object.entries(company.social).filter(([key, url]) => url && icons[key]);
  if (entries.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {entries.map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${company.name} on ${icons[key].label}`}
          className={linkClassName}
        >
          <svg viewBox="0 0 24 24" className={`fill-current ${iconClassName}`} aria-hidden="true">
            <path d={icons[key].path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

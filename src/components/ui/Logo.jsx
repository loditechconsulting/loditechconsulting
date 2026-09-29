import { company } from '../../content/site';

/** Official LoDi wordmark (public/brand/lodi-logo.webp, 286×128, rendered at 2× density). */
export default function Logo({ className = 'h-12 lg:h-14' }) {
  return (
    <img
      src="/brand/lodi-logo.webp"
      width="286"
      height="128"
      alt={company.legalName}
      className={`w-auto ${className}`}
    />
  );
}

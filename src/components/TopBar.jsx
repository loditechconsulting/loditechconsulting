import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { company } from '../content/site';
import SocialLinks from './ui/SocialLinks';

export default function TopBar() {
  return (
    <div className="border-b border-line bg-surface text-xs text-muted">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2.5 font-medium sm:px-6 md:justify-between lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <a href={`mailto:${company.email}`} className="group flex items-center gap-1.5 transition-colors hover:text-brand-600">
            <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <span>{company.email}</span>
          </a>
          <a href={company.phone.href} className="group flex items-center gap-1.5 transition-colors hover:text-brand-600">
            <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <span>{company.phone.display}</span>
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            {company.address.street}, {company.address.locality}, {company.address.country}
          </span>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            {company.hours.display}
          </span>
          <SocialLinks
            className="border-l border-line pl-4"
            linkClassName="rounded p-1 transition-colors hover:bg-white hover:text-brand-600"
            iconClassName="h-3.5 w-3.5"
          />
        </div>
      </div>
    </div>
  );
}

import { company } from '../content/site';

const updated = 'September 2026';

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <article className="bg-white">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Legal</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted">Last updated: {updated}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-14 leading-relaxed text-slate-700 sm:px-6 lg:py-20 [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">
        <p>
          {company.legalName} (“LoDi”, “we”, “us”) respects your privacy. This policy explains what personal
          data we collect through this website, why we collect it and the choices you have. It is written to
          meet our obligations under India’s Digital Personal Data Protection Act, 2023.
        </p>

        <Section title="What we collect">
          <p>We only collect personal data that you choose to give us, when you:</p>
          <ul>
            <li>submit the consultation form: your name, email address and, optionally, phone number, company, service of interest and message;</li>
            <li>email or call us directly: the details you include in that communication.</li>
          </ul>
          <p>
            This website does not use advertising or analytics cookies and does not track you across other
            sites. Fonts and images are served from our own site.
          </p>
        </Section>

        <Section title="How we use it">
          <ul>
            <li>to respond to your enquiry and arrange a consultation;</li>
            <li>to prepare proposals or provide services you ask us for;</li>
            <li>to meet legal, tax or regulatory obligations.</li>
          </ul>
          <p>We do not sell your personal data, and we do not use it for unrelated marketing without your consent.</p>
        </Section>

        <Section title="Who we share it with">
          <p>
            We share personal data only with service providers that help us operate, such as our form-handling
            and email providers, under terms that require them to protect it, or where the law requires us to.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep enquiry details for as long as needed to respond and follow up, and for up to two years
            afterwards unless you become a client or ask us to delete them sooner. Client records are kept for
            the period required by law.
          </p>
        </Section>

        <Section title="Your rights">
          <p>You can ask us to:</p>
          <ul>
            <li>tell you what personal data we hold about you and how we use it;</li>
            <li>correct, complete or update it;</li>
            <li>erase it, where we no longer need it for a lawful purpose;</li>
            <li>withdraw any consent you have given.</li>
          </ul>
          <p>
            To exercise any of these rights, or to raise a grievance, email us at{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>. We will respond within a reasonable time.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use reasonable technical and organisational safeguards to protect your data. No method of
            transmission over the internet is completely secure, but we work to protect the information you
            share with us.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            {company.legalName}
            <br />
            {company.address.street}, {company.address.locality}, {company.address.region} {company.address.postalCode},{' '}
            {company.address.country}
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </Section>

        <p className="text-sm text-muted">
          We may update this policy from time to time. The “last updated” date above shows when it last changed.
        </p>
      </div>
    </article>
  );
}

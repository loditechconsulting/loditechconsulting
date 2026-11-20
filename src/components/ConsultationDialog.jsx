import { useEffect, useId, useRef, useState } from 'react';
import { CircleCheck, LoaderCircle, Mail, Send, Sparkles, TriangleAlert } from 'lucide-react';
import { company, serviceOptions } from '../content/site';
import { buildMailto, hasFormEndpoint, submitLead } from '../lib/submitLead';
import { buttonClass, eyebrowClass } from '../lib/styles';
import Dialog from './ui/Dialog';

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-surface px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/15';
const labelClass = 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink';

function Field({ id, label, required, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-red-600" aria-hidden="true"> *</span>}
      </label>
      {children}
    </div>
  );
}

/**
 * Consultation request form. App remounts this component (via `key`) each time it
 * opens, so every visit starts from a clean form with the requested service preselected.
 */
export default function ConsultationDialog({ open, onClose, initialService, context }) {
  const uid = useId();
  const ids = {
    title: `${uid}-title`,
    name: `${uid}-name`,
    email: `${uid}-email`,
    phone: `${uid}-phone`,
    company: `${uid}-company`,
    service: `${uid}-service`,
    message: `${uid}-message`,
    trap: `${uid}-website`,
  };

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: serviceOptions.includes(initialService) ? initialService : serviceOptions[0],
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | mailto | error
  const [errorMsg, setErrorMsg] = useState('');
  const honeypot = useRef(null);
  const resultHeading = useRef(null);

  // Move focus to the confirmation so screen readers announce the outcome
  useEffect(() => {
    if (status === 'success' || status === 'mailto') resultHeading.current?.focus();
  }, [status]);

  const update = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const payload = { ...form, ...(context && { context }) };

  async function handleSubmit(e) {
    e.preventDefault();

    // Bots fill every field; people never see this one
    if (honeypot.current?.value) {
      setStatus('success');
      return;
    }

    if (!hasFormEndpoint) {
      window.location.assign(buildMailto(payload));
      setStatus('mailto');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    try {
      await submitLead(payload);
      setStatus('success');
    } catch (err) {
      setErrorMsg(err.message || '');
      setStatus('error');
    }
  }

  const firstName = form.fullName.trim().split(/\s+/)[0];
  const done = status === 'success' || status === 'mailto';

  return (
    <Dialog open={open} onClose={onClose} labelledBy={ids.title}>
      {done ? (
        <div className="py-6 text-center">
          <span className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-brand bg-brand-50 text-brand">
            {status === 'success' ? <CircleCheck className="h-10 w-10" aria-hidden="true" /> : <Mail className="h-9 w-9" aria-hidden="true" />}
          </span>

          <h2 id={ids.title} ref={resultHeading} tabIndex={-1} className="mt-6 text-2xl font-extrabold text-ink focus:outline-none">
            {status === 'success' ? 'Request received' : 'Almost there'}
          </h2>

          {status === 'success' ? (
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
              Thank you{firstName && <>, <span className="font-bold text-ink">{firstName}</span></>}. Our team will
              review your request and get back to you within one business day.
            </p>
          ) : (
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
              Your email app should have opened with your request filled in. Just press send. If nothing
              opened, email us at{' '}
              <a href={buildMailto(payload)} className="font-bold text-brand-600 underline underline-offset-2">
                {company.email}
              </a>
              .
            </p>
          )}

          <p className="mt-4 text-sm text-muted">
            Need us sooner? Email us at{' '}
            <a href={`mailto:${company.email}`} className="font-bold text-ink hover:text-brand-600">{company.email}</a>
          </p>

          <button type="button" onClick={onClose} className={buttonClass({ className: 'mt-8' })}>
            Back to website
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 pr-10">
            <p className={eyebrowClass()}>
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Free consultation
            </p>
            <h2 id={ids.title} className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
              Talk to our <span className="text-brand">experts</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tell us a little about your goals and we’ll set up a 30-minute discovery call with a senior
              consultant.
            </p>
            {context && (
              <p className="mt-3 inline-flex rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                Regarding: {context.replace(/^[^:]+:\s*/, '')}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={ids.name} label="Full name" required>
                <input id={ids.name} name="fullName" type="text" required autoComplete="name" value={form.fullName} onChange={update} placeholder="e.g. Rahul Sharma" className={inputClass} />
              </Field>
              <Field id={ids.email} label="Business email" required>
                <input id={ids.email} name="email" type="email" required autoComplete="email" value={form.email} onChange={update} placeholder="rahul@company.com" className={inputClass} />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={ids.phone} label="Phone">
                <input id={ids.phone} name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} placeholder="+91 98765 43210" className={inputClass} />
              </Field>
              <Field id={ids.company} label="Company">
                <input id={ids.company} name="company" type="text" autoComplete="organization" value={form.company} onChange={update} placeholder="Your company" className={inputClass} />
              </Field>
            </div>

            <Field id={ids.service} label="Service of interest">
              <select id={ids.service} name="service" value={form.service} onChange={update} className={inputClass}>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>

            <Field id={ids.message} label="Project outline / key goals">
              <textarea id={ids.message} name="message" rows={4} value={form.message} onChange={update} placeholder="Your current systems, timeline or key objectives…" className={`${inputClass} resize-y`} />
            </Field>

            {/* Honeypot: hidden from people and assistive tech */}
            <div aria-hidden="true" className="sr-only">
              <label htmlFor={ids.trap}>Website</label>
              <input id={ids.trap} ref={honeypot} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {status === 'error' && (
              <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <div className="space-y-1">
                  <p className="font-semibold">
                    {errorMsg.toLowerCase().includes('activation')
                      ? 'Form activation pending'
                      : 'We couldn’t send your request just now.'}
                  </p>
                  <p>
                    {errorMsg.toLowerCase().includes('activation')
                      ? 'Please check your inbox at loditechc@gmail.com and click the FormSubmit activation link once to enable submissions.'
                      : errorMsg || 'Please try again, or email us directly.'}
                  </p>
                  <p className="text-xs">
                    Or email us directly at{' '}
                    <a href={buildMailto(payload)} className="font-bold underline underline-offset-2">
                      {company.email}
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <button type="submit" disabled={status === 'submitting'} className={buttonClass({ size: 'lg', className: 'w-full' })}>
              {status === 'submitting' ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Request free consultation
                  <Send className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>

            <p className="text-center text-xs leading-relaxed text-muted">
              By submitting, you agree to our{' '}
              <a href="/privacy/" target="_blank" rel="noopener" className="font-semibold text-brand-600 underline underline-offset-2">
                Privacy Policy
              </a>
              . NDA available on request.
            </p>
          </form>
        </>
      )}
    </Dialog>
  );
}

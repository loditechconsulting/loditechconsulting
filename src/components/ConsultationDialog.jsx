import { useEffect, useId, useRef, useState } from 'react';
import { CircleCheck, LoaderCircle, Mail, Send, Sparkles, TriangleAlert } from 'lucide-react';
import { company, serviceOptions } from '../content/site';
import { buildMailto, hasFormEndpoint, submitLead } from '../lib/submitLead';
import { buttonClass, eyebrowClass } from '../lib/styles';
import Dialog from './ui/Dialog';

const baseInputClass =
  'w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-4';

function getInputClass(hasError) {
  return hasError
    ? `${baseInputClass} border-red-500 ring-2 ring-red-200 focus:border-red-600 focus:ring-red-100`
    : `${baseInputClass} border-slate-300 focus:border-brand focus:ring-brand/15`;
}

const labelClass = 'block text-xs font-bold uppercase tracking-wider text-ink';

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label htmlFor={id} className={labelClass}>
          {label}
          {required && <span className="text-red-600" aria-hidden="true"> *</span>}
        </label>
        {error && <span className="text-xs font-semibold text-red-600 animate-fade-in">{error}</span>}
      </div>
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
  const [fieldErrors, setFieldErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const honeypot = useRef(null);
  const resultHeading = useRef(null);

  // Move focus to the confirmation so screen readers announce the outcome
  useEffect(() => {
    if (status === 'success' || status === 'mailto') resultHeading.current?.focus();
  }, [status]);

  const validate = () => {
    const errors = {};
    const trimmedName = form.fullName.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName) {
      errors.fullName = 'Full name is required';
    } else if (trimmedName.length < 2) {
      errors.fullName = 'Please enter at least 2 characters';
    }

    if (!trimmedEmail) {
      errors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      errors.email = 'Please enter a valid email address';
    }

    if (form.phone && form.phone.trim()) {
      if (!/^[0-9+\s\-().]{7,20}$/.test(form.phone.trim())) {
        errors.phone = 'Please enter a valid phone number';
      }
    }

    return errors;
  };

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const payload = { ...form, ...(context && { context }) };

  async function handleSubmit(e) {
    e.preventDefault();

    // Bots fill every field; people never see this one
    if (honeypot.current?.value) {
      setStatus('success');
      return;
    }

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
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

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={ids.name} label="Full name" required error={fieldErrors.fullName}>
                <input
                  id={ids.name}
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={update}
                  placeholder="e.g. Rahul Sharma"
                  className={getInputClass(fieldErrors.fullName)}
                />
              </Field>
              <Field id={ids.email} label="Business email" required error={fieldErrors.email}>
                <input
                  id={ids.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                  placeholder="rahul@company.com"
                  className={getInputClass(fieldErrors.email)}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={ids.phone} label="Phone" error={fieldErrors.phone}>
                <input
                  id={ids.phone}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update}
                  placeholder="+91 98765 43210"
                  className={getInputClass(fieldErrors.phone)}
                />
              </Field>
              <Field id={ids.company} label="Company">
                <input
                  id={ids.company}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={update}
                  placeholder="Your company"
                  className={getInputClass(false)}
                />
              </Field>
            </div>

            <Field id={ids.service} label="Service of interest">
              <select id={ids.service} name="service" value={form.service} onChange={update} className={getInputClass(false)}>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>

            <Field id={ids.message} label="Project outline / key goals">
              <textarea
                id={ids.message}
                name="message"
                rows={4}
                value={form.message}
                onChange={update}
                placeholder="Your current systems, timeline or key objectives…"
                className={`${getInputClass(false)} resize-y`}
              />
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
                    We couldn’t send your request just now.
                  </p>
                  <p>
                    {errorMsg || 'Please try again, or email us directly.'}
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

import { company } from '../content/site';

const primaryEndpoint = import.meta.env.VITE_FORM_ENDPOINT || '/api/contact.php';
const fallbackEndpoint = 'https://formsubmit.co/ajax/pmo@loditechconsulting.com';

/** True when a form backend is configured. */
export const hasFormEndpoint = true;

/**
 * Posts a consultation request as JSON.
 * Primary: /api/contact.php (PHPMailer on PHP hosting)
 * Fallback: FormSubmit (direct relay to pmo@loditechconsulting.com on Vercel/static hosts)
 */
export async function submitLead(data) {
  const isFormSubmit = primaryEndpoint.includes('formsubmit.co');

  const formSubmitPayload = {
    name: data.fullName,
    email: data.email,
    phone: data.phone || 'Not provided',
    company: data.company || 'Not provided',
    service: data.service,
    message: data.message,
    ...(data.context && { context: data.context }),
    _subject: `LoDi Tech Consulting: Consultation Request from ${data.fullName}`,
    _replyto: data.email,
    _template: 'table',
    _captcha: 'false',
  };

  const phpPayload = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone || '',
    company: data.company || '',
    service: data.service,
    message: data.message,
    ...(data.context && { context: data.context }),
  };

  if (isFormSubmit) {
    const res = await fetch(primaryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formSubmitPayload),
    });
    const result = await res.json().catch(() => ({}));
    if (res.ok && (result.success === true || result.success === 'true')) {
      return { success: true, message: 'Thank you! Your request has been sent to our team.' };
    }
    throw new Error(result.message || `Request failed (${res.status})`);
  }

  // 1. Try primary endpoint (/api/contact.php)
  try {
    const response = await fetch(primaryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(phpPayload),
    });

    if (response.ok) {
      const result = await response.json().catch(() => ({}));
      if (result.success === true || result.success === 'true') {
        return result;
      }
    }
  } catch {
    // Primary failed or offline, fall through to fallback
  }

  // 2. Fallback to FormSubmit relay (works on Vercel, Netlify, static hosts)
  try {
    const fallbackRes = await fetch(fallbackEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formSubmitPayload),
    });

    const fallbackResult = await fallbackRes.json().catch(() => ({}));
    if (fallbackRes.ok && (fallbackResult.success === true || fallbackResult.success === 'true')) {
      return {
        success: true,
        message: 'Thank you! Your consultation request has been sent to our team.',
      };
    }
  } catch {
    // Fallback failed
  }

  throw new Error('Unable to send request. Please try again or email us directly.');
}

/** mailto: link carrying the same details, for error recovery. */
export function buildMailto(data) {
  const lines = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    data.phone && `Phone: ${data.phone}`,
    data.company && `Company: ${data.company}`,
    `Service of interest: ${data.service}`,
    data.context && `Regarding: ${data.context}`,
    '',
    data.message,
  ].filter((line) => line !== undefined && line !== false && line !== '');

  const subject = `Consultation request from ${data.fullName || 'website visitor'}`;
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

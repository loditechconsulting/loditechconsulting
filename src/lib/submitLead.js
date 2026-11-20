import { company } from '../content/site';

const defaultEndpoint = '/api/contact.php';
const endpoint = import.meta.env.VITE_FORM_ENDPOINT || defaultEndpoint;
const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;

/** True when a form backend is configured; defaults to /api/contact.php. */
export const hasFormEndpoint = Boolean(endpoint);

/**
 * Posts a consultation request as JSON. Compatible with FormSubmit (default),
 * Web3Forms (needs VITE_FORM_ACCESS_KEY) and Formspree endpoints.
 */
export async function submitLead(data) {
  const isFormSubmit = endpoint.includes('formsubmit.co');

  const bodyData = isFormSubmit
    ? {
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
      }
    : {
        ...(accessKey && { access_key: accessKey }),
        subject: `LoDi Tech Consulting: Consultation Request from ${data.fullName}`,
        from_name: `${company.name}`,
        ...data,
      };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(bodyData),
  });

  const result = await response.json().catch(() => ({}));
  const isSuccess = response.ok && (result.success === true || result.success === 'true');

  if (!isSuccess) {
    throw new Error(result.message || `Request failed (${response.status})`);
  }

  return result;
}

/** mailto: link carrying the same details, for the no-backend fallback and error recovery. */
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

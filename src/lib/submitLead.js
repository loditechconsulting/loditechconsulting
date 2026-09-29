import { company } from '../content/site';

const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;

/** True when a form backend is configured; otherwise the form falls back to mailto. */
export const hasFormEndpoint = Boolean(endpoint);

/**
 * Posts a consultation request as JSON. Compatible with Web3Forms
 * (needs VITE_FORM_ACCESS_KEY) and Formspree-style endpoints.
 */
export async function submitLead(data) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...(accessKey && { access_key: accessKey }),
      subject: `Website consultation request from ${data.fullName}`,
      from_name: `${company.name} website`,
      ...data,
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.success === false) {
    throw new Error(result.message || `Request failed (${response.status})`);
  }
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

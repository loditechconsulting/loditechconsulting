import { company } from '../content/site';

const defaultEndpoint = '/api/contact';
const endpoint = import.meta.env.VITE_FORM_ENDPOINT || defaultEndpoint;
const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;

/** True when a form backend is configured; defaults to /api/contact. */
export const hasFormEndpoint = Boolean(endpoint);

/**
 * Posts a consultation request as JSON.
 * Integrates with LoDi serverless/PHP endpoints, and transparently falls back to
 * secure form relay if the hosting server does not support POST requests (e.g. 405 error).
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

  let response = null;
  let result = {};

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(bodyData),
    });
    result = await response.json().catch(() => ({}));
  } catch {
    response = null;
  }

  // Fallback recovery:
  // If the server cannot process POST requests (e.g. static CDN returning 405 Method Not Allowed,
  // 404 Not Found, or network unreachable), transparently deliver the lead to avoid losing the inquiry.
  if (!response || response.status === 405 || response.status === 404 || !response.ok) {
    if (!response || response.status === 405 || response.status === 404) {
      try {
        const fallbackRes = await fetch('https://formsubmit.co/ajax/loditechc@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
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
          }),
        });

        const fallbackData = await fallbackRes.json().catch(() => ({}));
        if (fallbackRes.ok && (fallbackData.success === true || fallbackData.success === 'true')) {
          return {
            success: true,
            message: 'Thank you! Your consultation request has been sent to our team.',
          };
        }
      } catch {
        // Fall through to error below
      }
    }

    throw new Error(result.message || (response ? `Request failed (${response.status})` : 'Unable to connect to server.'));
  }

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

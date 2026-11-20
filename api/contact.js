export default async function handler(req, res) {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const rawData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    // Bot trap: reject automated bots filling hidden field
    if (rawData.website) {
      return res.status(200).json({ success: true, message: 'Request processed.' });
    }

    const fullName = (rawData.fullName || rawData.name || '').trim();
    const email = (rawData.email || '').trim();
    const phone = (rawData.phone || '').trim();
    const company = (rawData.company || '').trim();
    const service = (rawData.service || 'General Consultation').trim();
    const message = (rawData.message || '').trim();
    const context = (rawData.context || '').trim();

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: 'Full name and business email are required.',
      });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'loditechc@gmail.com';

    const relayPayload = {
      name: fullName,
      email: email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      service: service,
      message: message || 'None provided',
      context: context || 'General enquiry',
      _subject: `LoDi Tech Consulting: Consultation Request from ${fullName}`,
      _replyto: email,
      _template: 'table',
      _captcha: 'false',
    };

    const relayRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://lodi-three.vercel.app',
        'Referer': 'https://lodi-three.vercel.app/',
        'User-Agent': 'LoDi-Tech-Consulting-Serverless/1.0',
      },
      body: JSON.stringify(relayPayload),
    });

    const relayData = await relayRes.json().catch(() => ({}));

    if (relayRes.ok && (relayData.success === 'true' || relayData.success === true)) {
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your consultation request has been sent to our team.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your consultation request has been received.',
    });
  } catch (error) {
    console.error('[API /contact error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to process your request at this time. Please email us directly.',
    });
  }
}

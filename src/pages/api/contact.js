export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => (
    {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[char]
  ));

const normalizeText = (value, maxLength = 255) =>
  String(value ?? '').trim().slice(0, maxLength);

const normalizeMultilineText = (value, maxLength = 5000) =>
  String(value ?? '').replace(/\r\n/g, '\n').trim().slice(0, maxLength);

export async function POST({ request, locals }) {
  try {
    const data = await request.json();

    // Cloudflare runtime env
    const RESEND_API_KEY = locals.runtime?.env?.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ success: false, message: 'Server-Konfiguration unvollständig. Bitte später erneut versuchen.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const normalizedData = {
      name: normalizeText(data.name, 120),
      email: normalizeText(data.email, 254).toLowerCase(),
      telefon: normalizeText(data.telefon, 60),
      rueckrufzeit: normalizeText(data.rueckrufzeit, 80),
      interessiert_an: normalizeText(data.interessiert_an, 120),
      website: normalizeText(data.website, 255),
      tools: normalizeText(data.tools, 255),
      anliegen: normalizeMultilineText(data.anliegen, 4000),
      unternehmerBestaetigt: data.unternehmerBestaetigt === true,
      datenschutzAkzeptiert: data.datenschutzAkzeptiert === true,
    };

    // Validierung
    if (!normalizedData.name || !normalizedData.email || !normalizedData.anliegen) {
      return new Response(
        JSON.stringify({ success: false, message: 'Bitte fuellen Sie alle Pflichtfelder aus.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!EMAIL_REGEX.test(normalizedData.email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!normalizedData.unternehmerBestaetigt || !normalizedData.datenschutzAkzeptiert) {
      return new Response(
        JSON.stringify({ success: false, message: 'Bitte bestätigen Sie B2B-Status und Datenschutzhinweise.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const safe = {
      name: escapeHtml(normalizedData.name),
      email: escapeHtml(normalizedData.email),
      telefon: escapeHtml(normalizedData.telefon),
      rueckrufzeit: escapeHtml(normalizedData.rueckrufzeit),
      interessiert_an: escapeHtml(normalizedData.interessiert_an),
      website: escapeHtml(normalizedData.website),
      tools: escapeHtml(normalizedData.tools),
      anliegen: escapeHtml(normalizedData.anliegen),
    };
    const submittedAt = new Date().toISOString();

    // E-Mail-Inhalt formatieren
    const emailHtml = `
      <h2>Neue Kontaktanfrage von ${safe.name}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 180px;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${safe.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${safe.email}">${safe.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${safe.telefon || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Beste Rückrufzeit:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${safe.rueckrufzeit || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Interessiert an:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${safe.interessiert_an || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Bestehende Website:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${safe.website || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Tool-Integrationen:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${safe.tools || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">B2B-Bestätigung:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">Ja</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Datenschutz bestätigt:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">Ja</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Eingang (UTC):</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${submittedAt}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; vertical-align: top;">Anliegen:</td>
          <td style="padding: 10px; white-space: pre-wrap;">${safe.anliegen}</td>
        </tr>
      </table>
    `;

    // E-Mail über Resend senden
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Kontaktformular <kontakt@gilbert-webdesign.de>',
        to: ['kontakt@gilbert-webdesign.de'],
        reply_to: normalizedData.email,
        subject: `Neue Anfrage von ${normalizedData.name}`,
        html: emailHtml,
      }),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend error:', resendResult);
      throw new Error(resendResult.message || 'E-Mail konnte nicht gesendet werden');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Nachricht erfolgreich gesendet!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export const prerender = false;

export async function POST({ request, locals }) {
  try {
    const data = await request.json();

    // Cloudflare runtime env
    const RESEND_API_KEY = locals.runtime?.env?.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;

    // Validierung
    if (!data.name || !data.email || !data.anliegen) {
      return new Response(
        JSON.stringify({ success: false, message: 'Bitte füllen Sie alle Pflichtfelder aus.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // E-Mail-Inhalt formatieren
    const emailHtml = `
      <h2>Neue Kontaktanfrage von ${data.name}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 180px;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.telefon || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Beste Rückrufzeit:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.rueckrufzeit || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Interessiert an:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.interessiert_an || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Bestehende Website:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.website || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Tool-Integrationen:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.tools || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; vertical-align: top;">Anliegen:</td>
          <td style="padding: 10px; white-space: pre-wrap;">${data.anliegen}</td>
        </tr>
      </table>
    `;

    // E-Mail über Resend senden
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Kontaktformular <kontakt@gilbert-webdesign.de>',
        to: ['kontakt@gilbert-webdesign.de'],
        reply_to: data.email,
        subject: `Neue Anfrage von ${data.name}`,
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

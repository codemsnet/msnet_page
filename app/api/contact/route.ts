// /api/contact/route.ts (Code corrigé)

import { NextResponse } from 'next/server';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'sekoudayifourouk@gmail.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// UTILISEZ VOTRE ADRESSE GMAIL VÉRIFIÉE ici pour l'EXPÉDITEUR
// Resend permet d'utiliser un 'Nom' suivi de l'adresse vérifiée.
const FROM_EMAIL_VERIFIED = 'MSNET Contact <sekoudayifourouk@gmail.com>';
// Note: Le 'Nom' (MSNET Contact) est optionnel, mais le mail DOIT être le vôtre.

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, org, subject, channel, message } = body || {};

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'RESEND_API_KEY manquant côté serveur.' }, { status: 500 });
    }

    const emailSubject = `Contact MSNET — ${subject || 'Nouveau message'}`;
    const html = `
            <h2>Contact MSNET</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Organisation:</strong> ${org || '-'} </p>
            <p><strong>Canal:</strong> ${channel || 'Formulaire'}</p>
            <p><strong>Sujet:</strong> ${subject || '-'} </p>
            <p><strong>Message:</strong><br/>${(message as string).replace(/\n/g, '<br/>')}</p>
        `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        // CHANGEMENT ICI : Utilisation de votre adresse Gmail VÉRIFIÉE
        from: FROM_EMAIL_VERIFIED,
        to: [TO_EMAIL],
        subject: emailSubject,
        html,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.json().catch(() => ({}));
      // Loggez l'erreur pour le débogage
      console.error('Erreur Resend:', err);
      return NextResponse.json(
        { error: err?.message || 'Échec de l’envoi via Resend.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur interne.' }, { status: 500 });
  }
}

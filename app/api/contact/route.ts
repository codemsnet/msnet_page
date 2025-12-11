// /api/contact/route.ts (Code corrigé)

import { NextResponse } from 'next/server';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'sekoudayifourouk@gmail.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY; // clé privée (server) EmailJS

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
    // 1) Tentative EmailJS si configuré
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PRIVATE_KEY) {
      const emailjsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PRIVATE_KEY, // côté serveur on peut utiliser la clé privée
          template_params: {
            to_email: TO_EMAIL,
            from_name: name,
            reply_to: email,
            phone,
            org,
            channel,
            subject: emailSubject,
            message,
            html,
          },
        }),
      });

      if (emailjsRes.ok) {
        return NextResponse.json({ ok: true, via: 'emailjs' });
      }

      const err = await emailjsRes.json().catch(() => ({}));
      console.error('Erreur EmailJS:', err);
      // On continue vers le fallback Resend
    }

    // 2) Fallback Resend si clé dispo
    if (RESEND_API_KEY) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL_VERIFIED,
          to: [TO_EMAIL],
          subject: emailSubject,
          html,
          reply_to: email,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({ ok: true, via: 'resend' });
      }

      const err = await resendRes.json().catch(() => ({}));
      console.error('Erreur Resend:', err);
      return NextResponse.json(
        { error: err?.message || 'Échec de l’envoi (Resend).' },
        { status: 502 },
      );
    }

    // 3) Pas de provider configuré
    return NextResponse.json(
      { error: 'Aucun fournisseur e-mail configuré. Ajoutez EmailJS ou RESEND_API_KEY.' },
      { status: 500 },
    );
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur interne.' }, { status: 500 });
  }
}

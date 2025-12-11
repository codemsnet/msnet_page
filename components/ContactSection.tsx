'use client';

import { FormEvent, useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get('name') as string) ?? '',
      email: (formData.get('email') as string) ?? '',
      phone: (formData.get('phone') as string) ?? '',
      org: (formData.get('org') as string) ?? '',
      subject: (formData.get('subject') as string) ?? 'Contact',
      channel: (formData.get('channel') as string) ?? 'Formulaire',
      message: (formData.get('message') as string) ?? '',
    };

    setStatus('loading');
    setError('');

    try {
      const composedMessage = `Nom : ${payload.name}\nEmail : ${payload.email}\nTéléphone : ${
        payload.phone
      }\nOrganisation : ${payload.org || '-'}\nCanal : ${payload.channel}\nSujet : ${
        payload.subject
      }\n\n${payload.message}`;

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Une erreur est survenue.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Impossible d’envoyer le message.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-[var(--msnet-sky)]/12 via-white to-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--msnet-sky)]/15 text-[var(--msnet-navy)] text-sm font-semibold border border-[var(--msnet-sky)]/25">
            <span className="h-2 w-2 rounded-full bg-[var(--screen-blue)]" /> Contact
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--msnet-navy)]">
            Parlons de votre projet
          </h2>
          <p className="mt-3 text-[var(--text-main)] max-w-2xl mx-auto">
            Une question sur nos offres (MSNET, ELIKIA, SCREEN) ou un besoin sur-mesure ?
            Laissez-nous un message ou écrivez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/96 rounded-3xl shadow-[0_22px_60px_rgba(11,40,66,0.08)] border border-[rgba(115,151,186,0.18)] p-8 backdrop-blur-sm">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--screen-blue)]"
                    placeholder="vous@domaine.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="org"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--screen-blue)]"
                    placeholder="Entreprise / Ministère / Banque"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--screen-blue)]"
                    placeholder="+223 44 37 30 78"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">Sujet</label>
                  <select
                    name="subject"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--screen-blue)]"
                  >
                    <option>Choisir un sujet</option>
                    <option>Transformation digitale</option>
                    <option>Cloud & souveraineté</option>
                    <option>Développement sur-mesure</option>
                    <option>Formation & gouvernance</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">Canal</label>
                  <select
                    name="channel"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--screen-blue)]"
                  >
                    <option>Formulaire</option>
                    <option>WhatsApp</option>
                    <option>Appel</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--screen-blue)]"
                  placeholder="Décrivez votre besoin..."
                />
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--msnet-navy)] text-white font-semibold hover:bg-[var(--screen-blue)] transition-colors border border-[rgba(115,151,186,0.25)]"
                >
                  {status === 'loading' ? 'Envoi…' : 'Envoyer la demande'}
                </button>
                {status === 'success' && (
                  <span className="text-sm text-emerald-600">Message envoyé avec succès.</span>
                )}
                {status === 'error' && (
                  <span className="text-sm text-rose-600">{error || 'Échec de l’envoi.'}</span>
                )}
                {status === 'idle' && (
                  <span className="text-sm text-[var(--text-main)]">
                    Réponse sous 24-48h ouvrées.
                  </span>
                )}
              </div>
            </form>
          </div>

          <div className="bg-white/96 rounded-3xl shadow-[0_22px_60px_rgba(11,40,66,0.08)] border border-[rgba(115,151,186,0.18)] p-8 space-y-4 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-[var(--msnet-navy)]">Restons en contact</h3>
            <p className="text-sm text-[var(--text-main)]">
              Laissez-nous un message via le formulaire. Nous revenons vers vous sous 24-48h
              ouvrées.
            </p>
            <p className="text-xs text-[var(--text-main)]/80">
              Vos informations sont utilisées uniquement pour vous répondre (pas de partage tiers).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

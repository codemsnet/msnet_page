'use client';

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Contact
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Parlons de votre projet
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Une question sur nos offres (MSNET, ELIKIA, SCREEN) ou un besoin sur-mesure ?
            Laissez-nous un message ou écrivez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="vous@entreprise.com"
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
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Entreprise / Ministère / Banque"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">Sujet</label>
                  <select className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Choisir un sujet</option>
                    <option>Transformation digitale</option>
                    <option>Cloud & souveraineté</option>
                    <option>Développement sur-mesure</option>
                    <option>Formation & gouvernance</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Décrivez votre besoin..."
                />
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition-colors"
                >
                  Envoyer la demande
                </button>
                <span className="text-sm text-slate-500">Réponse sous 24-48h ouvrées.</span>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Coordonnées</h3>
              <p className="mt-2 text-sm text-slate-600">contact@msnet-group.com</p>
              <p className="text-sm text-slate-600">+223 00 00 00 00</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">Bureaux</h4>
              <p className="mt-1 text-sm text-slate-600">
                Bamako • Dakar • Abidjan (représentations)
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-800">Liens utiles</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-700">
                <a href="/" className="hover:text-emerald-600">
                  Accueil
                </a>
                <a href="/contact" className="hover:text-emerald-600">
                  Nous contacter
                </a>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-sm text-emerald-800">
              Besoin d’une démo ? Mentionnez-le dans le message, nous planifions une session dédiée.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

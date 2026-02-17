'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'foerderberatung',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to backend/email service
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-ice flex items-center justify-center section-padding">
        <motion.div
          className="card max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircleIcon className="w-20 h-20 text-success mx-auto mb-6" />
          <h1 className="text-forest mb-4">Vielen Dank!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Ihre Nachricht wurde erfolgreich versendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary"
          >
            Weitere Nachricht senden
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest to-[#0f3a2e] text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Haben Sie Fragen zur Förderung? Möchten Sie ein kostenloses Erstgespräch? 
              Wir sind für Sie da!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-forest mb-6">Schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                  >
                    <option value="foerderberatung">Förderberatung</option>
                    <option value="heizungstausch">Heizungstausch</option>
                    <option value="kalkulator">Frage zum Kalkulator</option>
                    <option value="angebot">Angebot anfordern</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 text-copper focus:ring-copper border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-600">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <a href="/datenschutz" className="text-copper hover:underline">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Nachricht senden
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-forest mb-6">Direkt Kontakt aufnehmen</h2>
              
              <div className="space-y-6 mb-8">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <PhoneIcon className="w-8 h-8 text-copper flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-forest mb-2">Telefon</h3>
                      <a 
                        href="tel:+4923899005451" 
                        className="text-lg text-gray-700 hover:text-copper transition-colors"
                      >
                        +49 2389 900 5451
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Mo-Fr: 8:00 - 18:00 Uhr<br />
                        Sa: 9:00 - 13:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <EnvelopeIcon className="w-8 h-8 text-copper flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-forest mb-2">E-Mail</h3>
                      <a 
                        href="mailto:m.kremer@fuchs-heizungen.de" 
                        className="text-lg text-gray-700 hover:text-copper transition-colors break-all"
                      >
                        m.kremer@fuchs-heizungen.de
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Antwort innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="card bg-ice">
                <h3 className="font-semibold text-forest mb-4">Was Sie erwarten können:</h3>
                <ul className="space-y-3">
                  {[
                    'Kostenlose Erstberatung (30 Min.)',
                    'Individuelle Förder-Analyse',
                    'Transparente Kostenaufstellung',
                    'Unverbindliches Angebot',
                    'Persönlicher Ansprechpartner'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Info */}
              <div className="mt-8 p-6 bg-white border border-gray-200 rounded-card">
                <h3 className="font-semibold text-forest mb-3">Fuchs Heizungen</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ein Unternehmen der Fuchs Holding GmbH<br />
                  Fachbetrieb für moderne Heiztechnik<br />
                  Zertifizierte Energieberatung
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

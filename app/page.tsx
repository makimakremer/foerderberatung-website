'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, CurrencyEuroIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: <CurrencyEuroIcon className="w-12 h-12 text-copper" />,
      title: 'Bis zu 70% Förderung',
      description: 'Maximale Förderquote durch Kombination aller verfügbaren Boni'
    },
    {
      icon: <CheckCircleIcon className="w-12 h-12 text-success" />,
      title: 'Fachlich korrekt',
      description: 'Aktuelle Fördersätze nach GEG, EEG und KWKG'
    },
    {
      icon: <ChartBarIcon className="w-12 h-12 text-copper" />,
      title: 'Kostenloser Kalkulator',
      description: 'Berechnen Sie Ihre individuelle Förderung in Sekunden'
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-success" />,
      title: 'Persönliche Beratung',
      description: 'Experten von Fuchs Heizungen unterstützen Sie'
    }
  ];

  const fundingPrograms = [
    {
      name: 'BEG Einzelmaßnahme',
      description: 'Bundesförderung für effiziente Gebäude',
      maxRate: '70%',
      details: 'Basis 30% + Geschwindigkeitsbonus 20% + Einkommensbonus 30%'
    },
    {
      name: 'KfW 458',
      description: 'Heizungstausch-Förderung',
      maxRate: '70%',
      details: 'Zuschuss für klimafreundliche Heizungssysteme'
    },
    {
      name: 'KWK/KWKG',
      description: 'Kraft-Wärme-Kopplung',
      maxRate: 'Variable',
      details: 'Zuschlag für hocheffiziente KWK-Anlagen'
    },
    {
      name: 'Regionalbanken',
      description: 'Länderspezifische Programme',
      maxRate: 'Ergänzend',
      details: 'NRW.BANK, L-Bank, WI-Bank, IBB, LfA und weitere'
    }
  ];

  const testimonials = [
    {
      name: 'Familie Schmidt',
      location: 'Dortmund',
      text: 'Dank der Förderberatung haben wir 42.000€ Zuschuss für unsere neue Wärmepumpe erhalten. Der Prozess war einfach und transparent.',
      savings: '42.000€'
    },
    {
      name: 'Thomas Müller',
      location: 'Essen',
      text: 'Die Experten haben uns durch den gesamten Förderprozess begleitet. Wir haben die maximale Förderquote von 70% erhalten!',
      savings: '35.000€'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest via-forest to-[#0f3a2e] text-white section-padding">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-white">
              Bis zu 70% Förderung für Ihre neue Heizung sichern
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professionelle Förderberatung für klimafreundliche Heizsysteme. 
              Wir navigieren Sie durch BEG, KfW und KWK-Förderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kalkulator">
                <button className="btn-primary bg-copper hover:bg-white hover:text-forest">
                  Jetzt Förderung berechnen →
                </button>
              </Link>
              <Link href="/kontakt">
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-forest">
                  Kostenlose Beratung
                </button>
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-success" />
                <span>Fachlich geprüft</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-success" />
                <span>Aktuelle Fördersätze 2025/2026</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-success" />
                <span>Kostenlose Erstberatung</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-ice">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-forest mb-4">Warum CO2 Sparhalt?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir helfen Ihnen, die maximale Förderung für Ihre Heizungsmodernisierung zu erhalten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-forest">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Programs Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-forest mb-4">Förderprogramme im Überblick</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir kennen alle relevanten Förderprogramme und kombinieren sie optimal für Sie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fundingPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="card border-l-4 border-copper"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-forest">{program.name}</h3>
                  <span className="bg-copper text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {program.maxRate}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{program.description}</p>
                <p className="text-sm text-gray-600">{program.details}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/wissen">
              <button className="btn-primary">
                Alle Förderprogramme entdecken
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-gradient-to-br from-forest to-[#0f3a2e] text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-white mb-4">Erfolgsgeschichten unserer Kunden</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Über 500 Haushalte haben bereits von unserer Förderberatung profitiert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-card p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-copper">{testimonial.savings}</p>
                    <p className="text-sm text-gray-300">Förderung erhalten</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-forest">
                Weitere Erfolgsgeschichten
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-copper text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Bereit für Ihre Förderung?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nutzen Sie unseren kostenlosen Förder-Kalkulator und erfahren Sie in 2 Minuten, 
              wie viel Förderung Sie erhalten können.
            </p>
            <Link href="/kalkulator">
              <button className="bg-white text-copper hover:bg-forest hover:text-white px-10 py-5 rounded-btn text-lg font-semibold shadow-btn transition-all duration-300">
                Jetzt Förderung berechnen →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

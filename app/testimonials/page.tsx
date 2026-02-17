'use client';

import { motion } from 'framer-motion';
import { StarIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Familie Schmidt',
      location: 'Dortmund, NRW',
      heatingType: 'Luft-Wasser-Wärmepumpe',
      investment: '45.000€',
      funding: '31.500€',
      fundingRate: '70%',
      text: 'Wir waren zunächst skeptisch, ob sich eine Wärmepumpe für unser Altbau lohnt. Das Team von Fuchs Heizungen hat uns umfassend beraten und dank der Förderberatung konnten wir 70% Zuschuss erhalten. Der Prozess war transparent und professionell. Unsere Heizkosten sind jetzt um 65% niedriger!',
      date: 'Januar 2025'
    },
    {
      name: 'Thomas Müller',
      location: 'Essen, NRW',
      heatingType: 'Pelletkessel mit Solarthermie',
      investment: '38.000€',
      funding: '26.600€',
      fundingRate: '70%',
      text: 'Die Förderberatung war Gold wert. Ich hätte nie gedacht, dass ich die maximale Förderquote von 70% bekommen kann. Das Team hat alle Unterlagen perfekt vorbereitet, der BAFA-Antrag ging durch wie Butter. Nach 8 Wochen hatten wir die Zusage. Absolut empfehlenswert!',
      date: 'Dezember 2024'
    },
    {
      name: 'Sarah Weber',
      location: 'Münster, NRW',
      heatingType: 'Erdwärme-Wärmepumpe',
      investment: '55.000€',
      funding: '38.500€',
      fundingRate: '70%',
      text: 'Von der Beratung bis zur Auszahlung der Förderung hat alles reibungslos geklappt. Besonders beeindruckt hat mich, dass auch die NRW.BANK-Förderung zusätzlich beantragt wurde. Ohne die Expertise hätten wir mindestens 15.000€ liegen lassen. Vielen Dank!',
      date: 'November 2024'
    },
    {
      name: 'Frank Schneider',
      location: 'Bochum, NRW',
      heatingType: 'Hybrid-Wärmepumpe',
      investment: '42.000€',
      funding: '29.400€',
      fundingRate: '70%',
      text: 'Als Unternehmer habe ich wenig Zeit für Bürokratie. Das Team hat mir alles abgenommen: Planung, Antragstellung, Baubegleitung. Die Förderung kam pünktlich, die Heizung läuft perfekt. Fair, kompetent, zuverlässig.',
      date: 'Oktober 2024'
    },
    {
      name: 'Petra und Michael Braun',
      location: 'Hamm, NRW',
      heatingType: 'Biomasse-Pelletkessel',
      investment: '35.000€',
      funding: '24.500€',
      fundingRate: '70%',
      text: 'Wir wollten weg von der alten Ölheizung und haben uns für einen Pelletkessel entschieden. Die Förderberatung hat uns durch alle Schritte begleitet. Besonders hilfreich war der Kalkulator, der uns sofort gezeigt hat, was möglich ist. Top Service!',
      date: 'September 2024'
    },
    {
      name: 'Jan Hoffmann',
      location: 'Düsseldorf, NRW',
      heatingType: 'Fernwärme-Anschluss',
      investment: '28.000€',
      funding: '19.600€',
      fundingRate: '70%',
      text: 'Der Anschluss an das städtische Fernwärmenetz wurde durch die BEG-Förderung erst richtig attraktiv. Die Beratung war präzise, alle Fristen wurden eingehalten. Nach 6 Monaten war alles erledigt. Würde ich jederzeit wieder machen.',
      date: 'August 2024'
    }
  ];

  const stats = [
    { value: '500+', label: 'Erfolgreiche Projekte' },
    { value: '€12,5 Mio', label: 'Vermittelte Förderung' },
    { value: '68%', label: 'Durchschn. Förderquote' },
    { value: '4.9/5', label: 'Kundenbewertung' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest to-[#0f3a2e] text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-12 h-12 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-white mb-6">Erfolgsgeschichten unserer Kunden</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Über 500 Haushalte haben bereits von unserer Förderberatung profitiert. 
              Lesen Sie, wie viel Förderung wir für unsere Kunden gesichert haben.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-ice">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-5xl font-bold text-copper mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Testimonial Text */}
                  <div className="md:col-span-2">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 italic mb-6">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div>
                      <p className="font-bold text-forest text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.date}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-ice rounded-card p-6">
                    <h4 className="font-semibold text-forest mb-4">Projekt-Details</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-gray-600">Heizungsart</p>
                        <p className="font-semibold">{testimonial.heatingType}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Investition</p>
                        <p className="font-semibold">{testimonial.investment}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Erhaltene Förderung</p>
                        <p className="font-bold text-success text-lg">{testimonial.funding}</p>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-gray-600 mb-1">Förderquote</p>
                        <p className="font-mono font-bold text-copper text-3xl">{testimonial.fundingRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-ice">
        <div className="container-custom max-w-4xl">
          <h2 className="text-forest text-center mb-12">Warum Kunden uns vertrauen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fachliche Expertise', desc: 'Zertifizierte Energieberater und jahrelange Erfahrung' },
              { title: 'Maximale Förderung', desc: 'Wir kombinieren alle verfügbaren Fördertöpfe optimal' },
              { title: 'Rundum-Service', desc: 'Von der Beratung bis zur Auszahlung an Ihrer Seite' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <CheckCircleIcon className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-copper to-[#b86430] text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Werden Sie unser nächster Erfolgsfall</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die maximale Förderung für Ihr Projekt sichern.
          </p>
          <a href="/kalkulator">
            <button className="bg-white text-copper hover:bg-forest hover:text-white px-10 py-5 rounded-btn text-lg font-semibold shadow-btn transition-all duration-300">
              Jetzt Förderung berechnen
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, AcademicCapIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest to-[#0f3a2e] text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white mb-6">Über CO2 Sparhalt</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Wir sind Ihr Partner für professionelle Förderberatung im Bereich klimafreundlicher Heizsysteme. 
              Als Teil der Fuchs Heizungen Familie verbinden wir technische Expertise mit Förderkompetenz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-forest mb-6">Unsere Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Die Energiewende im Gebäudesektor ist eine der größten Herausforderungen unserer Zeit. 
              Gleichzeitig sind die Förderprogramme so komplex, dass viele Haushalte ihre Chancen nicht nutzen. 
              Wir ändern das. Wir machen Förderung einfach, transparent und maximal profitabel für Sie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <AcademicCapIcon className="w-12 h-12 text-copper" />,
                title: 'Expertise',
                desc: 'Zertifizierte Energieberater mit jahrelanger Erfahrung in der Förderlandschaft'
              },
              {
                icon: <LightBulbIcon className="w-12 h-12 text-copper" />,
                title: 'Innovation',
                desc: 'Moderne Tools wie unser Förder-Kalkulator für transparente Berechnungen'
              },
              {
                icon: <HeartIcon className="w-12 h-12 text-copper" />,
                title: 'Leidenschaft',
                desc: 'Wir glauben an die Energiewende und helfen Ihnen, Teil davon zu werden'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-forest mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuchs Heizungen Connection */}
      <section className="section-padding bg-ice">
        <div className="container-custom max-w-4xl">
          <div className="card">
            <h2 className="text-forest mb-6">Teil der Fuchs Heizungen Familie</h2>
            <p className="text-lg text-gray-700 mb-6">
              CO2 Sparhalt ist der Förderberatungs-Service von <strong>Fuchs Heizungen</strong>, 
              einem etablierten Fachbetrieb für moderne Heiztechnik. Diese Verbindung gibt uns einen einzigartigen Vorteil:
            </p>
            <div className="space-y-4">
              {[
                'Technisches Know-how aus der Praxis – wir wissen, was funktioniert',
                'Direkte Abstimmung zwischen Planung, Förderung und Installation',
                'Realistische Kosteneinschätzungen für Ihren Antrag',
                'Rundum-Service aus einer Hand: Beratung, Förderung, Installation'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-forest text-center mb-12">Unsere Werte</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Transparenz',
                desc: 'Keine versteckten Kosten, keine falschen Versprechungen. Sie wissen immer, woran Sie sind.'
              },
              {
                title: 'Fachliche Korrektheit',
                desc: 'Alle Informationen basieren auf aktuellen Gesetzesgrundlagen (GEG, EEG, KWKG) und offiziellen Förderrichtlinien.'
              },
              {
                title: 'Kundenorientierung',
                desc: 'Ihre Ziele sind unsere Ziele. Wir finden die Lösung, die für SIE optimal ist.'
              },
              {
                title: 'Nachhaltigkeit',
                desc: 'Wir fördern nicht nur Heizungen, sondern eine klimafreundliche Zukunft.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="card border-l-4 border-copper"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-forest mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Contact Preview */}
      <section className="section-padding bg-gradient-to-br from-forest to-[#0f3a2e] text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Lernen Sie uns kennen</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Hinter CO2 Sparhalt stehen echte Menschen mit echter Expertise. 
            Vereinbaren Sie ein kostenloses Erstgespräch und überzeugen Sie sich selbst.
          </p>
          <Link href="/kontakt">
            <button className="bg-copper hover:bg-white text-white hover:text-copper px-10 py-5 rounded-btn text-lg font-semibold shadow-btn transition-all duration-300">
              Jetzt Kontakt aufnehmen
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

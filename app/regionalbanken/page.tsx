'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function RegionalbankenPage() {
  const regionalBanks = [
    {
      name: 'NRW.BANK',
      state: 'Nordrhein-Westfalen',
      programs: [
        'NRW.BANK.Gebäudesanierung',
        'NRW.BANK.Wohneigentum',
        'Progres.NRW (Heizung, Wärmepumpe)'
      ],
      maxFunding: 'Bis zu 60.000€ Zuschuss',
      website: 'https://www.nrwbank.de',
      description: 'Förderprogramme für energieeffizientes Bauen und Sanieren in NRW. Kombinierbar mit BEG.'
    },
    {
      name: 'L-Bank',
      state: 'Baden-Württemberg',
      programs: [
        'Energieeffizient Sanieren BW',
        'Wohnen mit Klimaprämie BW',
        'Klimafreundlicher Neubau BW'
      ],
      maxFunding: 'Bis zu 50.000€ Zuschuss',
      website: 'https://www.l-bank.de',
      description: 'Landesbank Baden-Württemberg mit attraktiven Förderzinsen und Zuschüssen für Wärmepumpen.'
    },
    {
      name: 'WI Bank',
      state: 'Hessen',
      programs: [
        'Hessen-Darlehen Energieeffizienz',
        'Hessische Energiespar-Förderung',
        'Wohnraum-Modernisierung'
      ],
      maxFunding: 'Bis zu 30.000€ Zuschuss',
      website: 'https://www.wibank.de',
      description: 'Wirtschafts- und Infrastrukturbank Hessen fördert klimafreundliche Heizsysteme.'
    },
    {
      name: 'IBB',
      state: 'Berlin',
      programs: [
        'IBB Energetische Gebäudesanierung',
        'Heizungstausch Berlin',
        'Berliner Energie- und Klimaschutzprogramm (BEK)'
      ],
      maxFunding: 'Bis zu 40.000€ Zuschuss',
      website: 'https://www.ibb.de',
      description: 'Investitionsbank Berlin mit Sonderprogrammen für den Heizungstausch.'
    },
    {
      name: 'LfA Förderbank Bayern',
      state: 'Bayern',
      programs: [
        'Energiekredit regenerativ',
        'Bayern Darlehen Regenerativ',
        '10.000-Häuser-Programm'
      ],
      maxFunding: 'Bis zu 45.000€ Zuschuss',
      website: 'https://www.lfa.de',
      description: 'Bayerische Förderbank mit Schwerpunkt auf erneuerbaren Energien und Wärmepumpen.'
    },
    {
      name: 'Sächsische Aufbaubank (SAB)',
      state: 'Sachsen',
      programs: [
        'SAB-Förderung Energie',
        'Klimaschutz für Wohngebäude',
        'Energetische Sanierung Sachsen'
      ],
      maxFunding: 'Bis zu 25.000€ Zuschuss',
      website: 'https://www.sab.sachsen.de',
      description: 'Sächsische Landesförderbank für energieeffiziente Gebäudesanierung.'
    },
    {
      name: 'Bremer Aufbau-Bank (BAB)',
      state: 'Bremen',
      programs: [
        'Bremer Modernisierungsprogramm',
        'Klimaschutz Bremen',
        'Energieeffizienz Wohnen'
      ],
      maxFunding: 'Bis zu 20.000€ Zuschuss',
      website: 'https://www.bab-bremen.de',
      description: 'Förderung für energetische Sanierung in Bremen und Bremerhaven.'
    },
    {
      name: 'Hamburgische Investitions- und Förderbank (IFB)',
      state: 'Hamburg',
      programs: [
        'IFB Hamburg Energie',
        'Heizungstausch Hamburg',
        'Energetische Sanierung HH'
      ],
      maxFunding: 'Bis zu 35.000€ Zuschuss',
      website: 'https://www.ifbhh.de',
      description: 'Hamburger Förderbank mit Schwerpunkt auf Wärmepumpen und Solarthermie.'
    }
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
            <MapPinIcon className="w-20 h-20 text-copper mx-auto mb-6" />
            <h1 className="text-white mb-6">Regionalbanken & Landesförderung</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Zusätzlich zur Bundesförderung bieten viele Bundesländer eigene Förderprogramme. 
              Hier finden Sie alle relevanten Regionalbanken und ihre Angebote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-ice">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-forest mb-6">Kombinieren Sie Bundes- und Landesförderung</h2>
          <p className="text-lg text-gray-700">
            Viele Landesförderprogramme sind mit der BEG kombinierbar und erhöhen Ihre Gesamtförderung deutlich. 
            Wir prüfen für Sie alle Möglichkeiten und stellen sicher, dass Sie die maximale Förderung erhalten.
          </p>
        </div>
      </section>

      {/* Banks Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalBanks.map((bank, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <BanknotesIcon className="w-12 h-12 text-copper flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-1">{bank.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPinIcon className="w-4 h-4" />
                      {bank.state}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{bank.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-forest mb-2">Förderprogramme:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {bank.programs.map((program, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-success mt-1">✓</span>
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4 flex items-center justify-between">
                  <span className="text-copper font-bold">{bank.maxFunding}</span>
                  <a 
                    href={bank.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest hover:text-copper font-medium hover:underline"
                  >
                    Mehr erfahren →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-copper to-[#b86430] text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-white mb-6">Wir finden die optimale Förder-Kombination</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Profitieren Sie von unserer Expertise in Bundes- UND Landesförderung. 
              Kostenlose Erstberatung inklusive Fördermittel-Check.
            </p>
            <Link href="/kontakt">
              <button className="bg-white text-copper hover:bg-forest hover:text-white px-10 py-5 rounded-btn text-lg font-semibold shadow-btn transition-all duration-300">
                Jetzt Förder-Check anfragen
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function WissenPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const articles: Article[] = [
    {
      id: 'beg-einzelmassnahme',
      title: 'BEG Einzelmaßnahme - Bundesförderung für effiziente Gebäude',
      category: 'BEG',
      excerpt: 'Die BEG Einzelmaßnahme ist das Hauptförderprogramm für Heizungstausch. Erfahren Sie alles über Fördersätze, Boni und Antragstellung.',
      date: '15. Februar 2025',
      readTime: '8 Min.'
    },
    {
      id: 'kfw-458',
      title: 'KfW 458 - Heizungstausch-Förderung im Detail',
      category: 'KfW',
      excerpt: 'Die KfW 458 Förderung ermöglicht Zuschüsse bis 70% für klimafreundliche Heizungssysteme. Alle Bedingungen und Anforderungen erklärt.',
      date: '12. Februar 2025',
      readTime: '6 Min.'
    },
    {
      id: 'kfw-459',
      title: 'KfW 459 - Altersgerecht Umbauen (Zuschuss)',
      category: 'KfW',
      excerpt: 'Förderung für barrierefreies Wohnen und Einbruchschutz. Bis zu 6.250€ Zuschuss für altersgerechte Umbaumaßnahmen.',
      date: '10. Februar 2025',
      readTime: '5 Min.'
    },
    {
      id: 'kfw-522',
      title: 'KfW 522 - Energetische Stadtsanierung (Kredit)',
      category: 'KfW',
      excerpt: 'Zinsgünstige Kredite für Kommunen zur energetischen Quartiersversorgung und Stadtsanierung.',
      date: '8. Februar 2025',
      readTime: '7 Min.'
    },
    {
      id: 'kfw-358',
      title: 'KfW 358 - Energieeffizient Sanieren (Kommunen)',
      category: 'KfW',
      excerpt: 'Förderkredit für die energetische Sanierung kommunaler Gebäude. Effektive Zinssätze ab 0,01%.',
      date: '5. Februar 2025',
      readTime: '6 Min.'
    },
    {
      id: 'kfw-661',
      title: 'KfW 661 - KfW-Energiewendekredit (Erneuerbare Energien Standard)',
      category: 'KfW',
      excerpt: 'Langfristige Finanzierung für Investitionen in erneuerbare Energien für Unternehmen.',
      date: '3. Februar 2025',
      readTime: '8 Min.'
    },
    {
      id: 'kwk-kwkg',
      title: 'KWK & KWKG - Kraft-Wärme-Kopplung Förderung',
      category: 'KWK',
      excerpt: 'Alles über KWK-Zuschläge nach KWKG für hocheffiziente Blockheizkraftwerke (BHKW). Zuschüsse, Laufzeiten und technische Anforderungen.',
      date: '1. Februar 2025',
      readTime: '10 Min.'
    },
    {
      id: 'geg-2024',
      title: 'GEG 2024 - Gebäudeenergiegesetz und Förderpflichten',
      category: 'Rechtliches',
      excerpt: 'Das Gebäudeenergiegesetz (GEG) definiert die rechtlichen Rahmenbedingungen für energieeffiziente Gebäude. Alle Pflichten im Überblick.',
      date: '28. Januar 2025',
      readTime: '12 Min.'
    },
    {
      id: 'eeg-heizung',
      title: 'EEG - Erneuerbare-Energien-Gesetz für Wärme',
      category: 'Rechtliches',
      excerpt: 'Wie das EEG die Förderung erneuerbarer Energien im Wärmesektor regelt und welche Vorteile Sie haben.',
      date: '25. Januar 2025',
      readTime: '9 Min.'
    },
    {
      id: 'bundesanzeiger',
      title: 'Bundesanzeiger Förderrichtlinien - Offizielle Quellen',
      category: 'Rechtliches',
      excerpt: 'Alle relevanten Förderrichtlinien im Bundesanzeiger: BEG EM, KfW-Programme und KWKG-Novellen.',
      date: '20. Januar 2025',
      readTime: '5 Min.'
    },
    {
      id: 'waermepumpe-2025',
      title: 'Wärmepumpe 2025 - Fördersätze und Technologien',
      category: 'Technologie',
      excerpt: 'Luft-Wasser, Sole-Wasser oder Wasser-Wasser? Welche Wärmepumpe wird wie gefördert und welche ist die richtige für Sie?',
      date: '18. Januar 2025',
      readTime: '11 Min.'
    },
    {
      id: 'solarthermie-foerderung',
      title: 'Solarthermie-Förderung - Sonne für Warmwasser und Heizung',
      category: 'Technologie',
      excerpt: 'Solarthermie-Anlagen können bis zu 25% der Heizkosten einsparen. So wird die Anschaffung gefördert.',
      date: '15. Januar 2025',
      readTime: '7 Min.'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest to-[#0f3a2e] text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white mb-6">Förderwissen kompakt</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Alle relevanten Förderprogramme, Gesetze und Technologien verständlich erklärt. 
              Bleiben Sie auf dem aktuellen Stand der Heizungsförderung.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Programm, Thema oder Begriff suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-card text-gray-800 text-lg focus:ring-4 focus:ring-copper outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-ice py-6">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSearchTerm('')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                searchTerm === '' 
                  ? 'bg-forest text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Alle
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSearchTerm(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  searchTerm.toLowerCase() === category.toLowerCase()
                    ? 'bg-forest text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Keine Artikel gefunden. Versuchen Sie einen anderen Suchbegriff.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/wissen/${article.id}`}>
                    <div className="card h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-copper/10 text-copper text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-forest mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span className="text-copper font-medium hover:underline">
                          Weiterlesen →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-copper to-[#b86430] text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-white mb-6">Noch Fragen zur Förderung?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Unsere Experten beraten Sie kostenlos und unverbindlich zu allen Förderprogrammen.
            </p>
            <Link href="/kontakt">
              <button className="bg-white text-copper hover:bg-forest hover:text-white px-10 py-5 rounded-btn text-lg font-semibold shadow-btn transition-all duration-300">
                Jetzt Beratung anfragen
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// Generate static params for all articles
export function generateStaticParams() {
  return [
    { slug: 'beg-einzelmassnahme' },
    { slug: 'kfw-458' },
    { slug: 'kfw-459' },
    { slug: 'kfw-522' },
    { slug: 'kfw-358' },
    { slug: 'kfw-661' },
    { slug: 'kwk-kwkg' },
    { slug: 'geg-2024' },
    { slug: 'eeg-heizung' },
    { slug: 'bundesanzeiger' },
    { slug: 'waermepumpe-2025' },
    { slug: 'solarthermie-foerderung' }
  ];
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // In production, this would fetch from CMS or API
  const articles: { [key: string]: any } = {
    'beg-einzelmassnahme': {
      title: 'BEG Einzelmaßnahme - Bundesförderung für effiziente Gebäude',
      category: 'BEG',
      date: '15. Februar 2025',
      readTime: '8 Min.',
      content: `
        <h2>Was ist die BEG Einzelmaßnahme?</h2>
        <p>Die Bundesförderung für effiziente Gebäude – Einzelmaßnahmen (BEG EM) ist das zentrale Förderprogramm für energetische Sanierungsmaßnahmen an Bestandsgebäuden. Sie ersetzt seit 2021 die früheren Programme wie MAP und KfW-Einzelmaßnahmen.</p>

        <h2>Fördersätze 2025/2026</h2>
        <p>Die BEG EM bietet gestaffelte Fördersätze mit attraktiven Boni:</p>
        <ul>
          <li><strong>Basis-Förderung: 30%</strong> für alle förderfähigen Heizungssysteme</li>
          <li><strong>Klima-Geschwindigkeitsbonus: +20%</strong> beim Austausch alter fossiler Heizungen (Gas, Öl, Kohle, Nachtspeicher)</li>
          <li><strong>Einkommensbonus: +30%</strong> bei zu versteuerndem Haushaltsjahreseinkommen ≤ 40.000€</li>
          <li><strong>Maximum: 70%</strong> Gesamtförderung</li>
        </ul>

        <h2>Förderfähige Maßnahmen</h2>
        <p>Folgende Heizungssysteme werden durch die BEG EM gefördert:</p>
        
        <h3>1. Wärmepumpen</h3>
        <ul>
          <li>Luft-Wasser-Wärmepumpen</li>
          <li>Sole-Wasser-Wärmepumpen (Erdwärme)</li>
          <li>Wasser-Wasser-Wärmepumpen (Grundwasser)</li>
          <li>Maximale förderfähige Kosten: 60.000€</li>
        </ul>

        <h3>2. Biomasseheizungen</h3>
        <ul>
          <li>Pelletkessel</li>
          <li>Hackschnitzelkessel</li>
          <li>Scheitholzvergaserkessel</li>
          <li>Kombinationskessel</li>
          <li>Maximale förderfähige Kosten: 60.000€</li>
        </ul>

        <h3>3. Solarthermie-Anlagen</h3>
        <ul>
          <li>Für Warmwasser und/oder Heizungsunterstützung</li>
          <li>Flach- oder Röhrenkollektoren</li>
          <li>Maximale förderfähige Kosten: 25.000€</li>
        </ul>

        <h3>4. Wärmenetze und Gebäudenetze</h3>
        <ul>
          <li>Anschluss an Fernwärme/Nahwärme</li>
          <li>Errichtung von Gebäudenetzen</li>
          <li>Maximale förderfähige Kosten: 40.000€</li>
        </ul>

        <h2>Technische Voraussetzungen</h2>
        <p>Alle geförderten Heizungssysteme müssen folgende Mindestanforderungen erfüllen:</p>
        <ul>
          <li>Jahreszeitbedingte Raumheizungseffizienz (ηs) gemäß ErP-Richtlinie</li>
          <li>Einhaltung der technischen Mindestanforderungen der BEG EM Richtlinie</li>
          <li>Hydraulischer Abgleich nach Verfahren A oder B</li>
          <li>Anpassung der Heizkurve</li>
          <li>Bei Wärmepumpen: Nachweis der Energieeffizienz (JAZ)</li>
        </ul>

        <h2>Antragsprozess</h2>
        
        <h3>Schritt 1: Planung</h3>
        <p>Lassen Sie Ihre Maßnahme von einem Energieeffizienz-Experten (EEE) planen. Dieser erstellt eine Technische Projektbeschreibung (TPB) und übergibt Ihnen die TPB-ID.</p>

        <h3>Schritt 2: Antragstellung</h3>
        <p><strong>WICHTIG:</strong> Der Antrag muss VOR Vertragsabschluss gestellt werden! Die Antragstellung erfolgt online beim BAFA über das BAFA-Portal.</p>

        <h3>Schritt 3: Zusage abwarten</h3>
        <p>Nach Prüfung erhalten Sie einen Zuwendungsbescheid mit Bewilligungsnummer. Erst dann dürfen Sie den Vertrag mit dem Handwerksbetrieb abschließen.</p>

        <h3>Schritt 4: Umsetzung</h3>
        <p>Lassen Sie die Maßnahme durch ein Fachunternehmen umsetzen. Der EEE begleitet die Baumaßnahme.</p>

        <h3>Schritt 5: Verwendungsnachweis</h3>
        <p>Nach Fertigstellung erstellt der EEE einen Technischen Projektnachweis (TPN). Sie reichen den Verwendungsnachweis beim BAFA ein und erhalten die Förderung ausgezahlt.</p>

        <h2>Kombinierbarkeit</h2>
        <p>Die BEG EM kann in einigen Fällen mit anderen Programmen kombiniert werden:</p>
        <ul>
          <li>KfW-Kredite (z.B. KfW 261, 262)</li>
          <li>Regionale Förderprogramme (nach Einzelfallprüfung)</li>
          <li>Steuerförderung nach § 35c EStG ist NICHT kombinierbar</li>
        </ul>

        <h2>Wichtige Fristen</h2>
        <ul>
          <li>Antragstellung: vor Vertragsabschluss</li>
          <li>Bewilligungszeitraum: i.d.R. 36 Monate ab Zuwendungsbescheid</li>
          <li>Verwendungsnachweis: innerhalb von 6 Monaten nach Abschluss der Maßnahme</li>
        </ul>

        <h2>Rechtsgrundlagen</h2>
        <p>Die BEG EM basiert auf folgenden rechtlichen Grundlagen:</p>
        <ul>
          <li>Richtlinie für die Bundesförderung für effiziente Gebäude – Einzelmaßnahmen (BEG EM) vom 21. Dezember 2023</li>
          <li>Gebäudeenergiegesetz (GEG) 2024</li>
          <li>EU-Beihilferecht</li>
        </ul>

        <p><strong>Wichtig:</strong> Diese Informationen entsprechen dem Stand Februar 2025. Förderbedingungen können sich ändern. Lassen Sie sich von unseren Experten aktuell beraten!</p>
      `
    },
    'kfw-458': {
      title: 'KfW 458 - Heizungstausch-Förderung im Detail',
      category: 'KfW',
      date: '12. Februar 2025',
      readTime: '6 Min.',
      content: `
        <h2>KfW 458 - Bundesförderung für effiziente Gebäude (Wohngebäude - Zuschuss)</h2>
        <p>Das KfW-Programm 458 ist Teil der Bundesförderung für effiziente Gebäude (BEG) und wird seit 2024 durch die KfW administriert. Es fördert den Heizungstausch in Wohngebäuden mit Zuschüssen.</p>

        <h2>Fördersätze und Konditionen</h2>
        <p>Die Fördersätze entsprechen der BEG EM:</p>
        <ul>
          <li>Basis: 30% Zuschuss</li>
          <li>Klima-Geschwindigkeitsbonus: +20%</li>
          <li>Einkommensbonus: +30%</li>
          <li>Maximum: 70% Gesamtförderung</li>
        </ul>

        <h2>Geförderte Heizungssysteme</h2>
        <ul>
          <li>Wärmepumpen aller Art</li>
          <li>Biomasseheizungen</li>
          <li>Solarthermie-Anlagen</li>
          <li>Hybridheizungen (erneuerbar + Gas)</li>
          <li>Fernwärmeanschluss</li>
        </ul>

        <h2>Antragstellung</h2>
        <p>Die Antragstellung für KfW 458 erfolgt online über das KfW-Zuschussportal. Auch hier gilt: Antrag BEFORE Vertragsabschluss!</p>

        <h2>Unterschied zu BAFA BEG EM</h2>
        <p>Seit 2024 ist die Zuständigkeit aufgeteilt:</p>
        <ul>
          <li><strong>BAFA:</strong> Gebäudehülle, Anlagentechnik (außer Heizung), Heizungsoptimierung, Gebäudenetze</li>
          <li><strong>KfW:</strong> Anlagen zur Wärmeerzeugung (Heizungstausch)</li>
        </ul>

        <p>Die Konditionen sind identisch – nur die Antragsstelle unterscheidet sich.</p>
      `
    },
    'kwk-kwkg': {
      title: 'KWK & KWKG - Kraft-Wärme-Kopplung Förderung',
      category: 'KWK',
      date: '1. Februar 2025',
      readTime: '10 Min.',
      content: `
        <h2>Kraft-Wärme-Kopplung (KWK) - Hocheffiziente Energieerzeugung</h2>
        <p>Kraft-Wärme-Kopplung ist die gleichzeitige Erzeugung von Strom und Wärme in einem Blockheizkraftwerk (BHKW). Diese Technologie erreicht Gesamtwirkungsgrade von bis zu 90%.</p>

        <h2>KWKG - Kraft-Wärme-Kopplungsgesetz</h2>
        <p>Das KWKG regelt die Förderung von KWK-Anlagen in Deutschland. Ziel ist die Erhöhung des KWK-Anteils an der Stromerzeugung auf 25% bis 2030.</p>

        <h2>Fördermechanismus</h2>
        <p>Die Förderung erfolgt über KWK-Zuschläge, die je erzeugter kWh Strom gezahlt werden:</p>

        <h3>Kleine KWK-Anlagen (bis 50 kWel)</h3>
        <ul>
          <li>Bis 2 kW: 16 Cent/kWh für 60.000 Vollbenutzungsstunden</li>
          <li>2-50 kW: 8 Cent/kWh für 60.000 Vollbenutzungsstunden</li>
          <li>Laufzeit: i.d.R. 10 Jahre</li>
        </ul>

        <h3>Mittlere KWK-Anlagen (50 kW - 2 MW)</h3>
        <ul>
          <li>Zuschlag: 6 Cent/kWh</li>
          <li>Laufzeit: 30.000 Vollbenutzungsstunden</li>
        </ul>

        <h3>Große KWK-Anlagen (> 2 MW)</h3>
        <ul>
          <li>Zuschlag: variabel, abhängig von Größe und Brennstoff</li>
          <li>Ausschreibungsverfahren</li>
        </ul>

        <h2>Technische Anforderungen</h2>
        <ul>
          <li>Nachweis der Hocheffizienz gemäß EU-Richtlinie</li>
          <li>Primärenergieeinsparung ≥ 10%</li>
          <li>Nutzung der erzeugten Wärme</li>
          <li>Zulassung durch BAFA</li>
        </ul>

        <h2>Antragsprozess</h2>
        <ol>
          <li>Zulassungsantrag bei BAFA stellen</li>
          <li>Zulassungsbescheid abwarten</li>
          <li>KWK-Anlage in Betrieb nehmen</li>
          <li>Quartalsweise Meldung der Strommengen</li>
          <li>Auszahlung der Zuschläge durch Netzbetreiber</li>
        </ol>

        <h2>Kombinierbarkeit mit BEG</h2>
        <p>KWK-Anlagen können unter bestimmten Voraussetzungen zusätzlich BEG-Förderung erhalten, wenn sie auch als Heizungsanlage fungieren. Eine Doppelförderung ist jedoch ausgeschlossen.</p>

        <h2>Wirtschaftlichkeit</h2>
        <p>KWK-Anlagen rechnen sich besonders bei:</p>
        <ul>
          <li>Hohem Wärme- und Strombedarf (z.B. Mehrfamilienhäuser, Gewerbe)</li>
          <li>Langen Laufzeiten (>4000 h/Jahr)</li>
          <li>Eigenverbrauch des erzeugten Stroms</li>
        </ul>

        <p>Unser Förder-Kalkulator berücksichtigt auch KWK-Zuschläge. Lassen Sie sich individuell beraten!</p>
      `
    }
  };

  const article = articles[slug] || {
    title: 'Artikel nicht gefunden',
    category: '',
    date: '',
    readTime: '',
    content: '<p>Dieser Artikel existiert noch nicht oder wurde verschoben.</p>'
  };

  return (
    <div className="min-h-screen bg-white">
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          <Link href="/wissen" className="inline-flex items-center gap-2 text-copper hover:text-forest mb-8 font-medium">
            <ArrowLeftIcon className="w-5 h-5" />
            Zurück zur Übersicht
          </Link>

          <div className="mb-6">
            <span className="px-4 py-2 bg-copper/10 text-copper text-sm font-semibold rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className="text-forest mb-4">{article.title}</h1>

          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} Lesezeit</span>
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:text-forest prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:mb-2 prose-strong:text-forest"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-16 p-8 bg-ice rounded-card">
            <div className="flex items-start gap-4">
              <CheckCircleIcon className="w-12 h-12 text-success flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-forest mb-2">Persönliche Beratung gewünscht?</h3>
                <p className="text-gray-700 mb-4">
                  Unsere Experten beraten Sie kostenlos zu allen Förderprogrammen und finden die optimale Lösung für Ihr Projekt.
                </p>
                <Link href="/kontakt">
                  <button className="btn-primary">
                    Jetzt Beratungstermin vereinbaren
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

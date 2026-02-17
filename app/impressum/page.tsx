export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-forest mb-8">Impressum</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-forest mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-700">
                <strong>Fuchs Holding GmbH</strong><br />
                (handelnd als Fuchs Heizungen / CO2 Sparhalt)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-forest mb-3">Kontakt</h3>
              <p className="text-gray-700">
                Telefon: <a href="tel:+4923899005451" className="text-copper hover:underline">+49 2389 900 5451</a><br />
                E-Mail: <a href="mailto:m.kremer@fuchs-heizungen.de" className="text-copper hover:underline">m.kremer@fuchs-heizungen.de</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-forest mb-3">Vertretungsberechtigte</h3>
              <p className="text-gray-700">
                Geschäftsführung: [Name der Geschäftsführung]
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-forest mb-3">Registereintrag</h3>
              <p className="text-gray-700">
                Eintragung im Handelsregister<br />
                Registergericht: [Registergericht]<br />
                Registernummer: [HRB-Nummer]
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-forest mb-3">Umsatzsteuer-ID</h3>
              <p className="text-gray-700">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                [USt-ID]
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-forest mb-3">Berufsbezeichnung</h3>
              <p className="text-gray-700">
                Heizungsbau / Energieberatung<br />
                Handwerkskammer: [Zuständige Handwerkskammer]
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-forest mb-3">EU-Streitschlichtung</h3>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-copper hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-forest mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
              <p className="text-gray-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-forest mb-3">Haftung für Inhalte</h3>
              <p className="text-gray-700 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p className="text-gray-700">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-forest mb-3">Haftung für Links</h3>
              <p className="text-gray-700">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht 
                erkennbar.
              </p>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-forest mb-3">Urheberrecht</h3>
              <p className="text-gray-700">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>Quelle: <a href="https://www.e-recht24.de" className="text-copper hover:underline">e-recht24.de</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

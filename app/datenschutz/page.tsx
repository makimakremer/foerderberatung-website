export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-forest mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-forest mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z.B. um Daten handeln, die Sie in ein Kontaktformular oder den Förder-Kalkulator eingeben.
              </p>
              <p className="mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem 
                oder Uhrzeit des Seitenaufrufs).
              </p>

              <p className="mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Daten aus dem 
                Förder-Kalkulator werden verwendet, um Sie persönlich zu beraten.
              </p>

              <p className="mb-4">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-forest mb-4">2. Hosting</h2>
              <p className="mb-4">
                Diese Website wird auf GitHub Pages gehostet. Die Datenverarbeitung erfolgt auf Servern von GitHub, Inc., 
                88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.
              </p>
              <p>
                GitHub kann beim Besuch dieser Website technische Informationen inklusive Ihrer IP-Adresse erfassen. 
                Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub: 
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-copper hover:underline ml-1">
                  GitHub Privacy Statement
                </a>
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-forest mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
                Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert 
                auch, wie und zu welchem Zweck das geschieht.
              </p>

              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mb-4">
                Fuchs Holding GmbH<br />
                Telefon: +49 2389 900 5451<br />
                E-Mail: m.kremer@fuchs-heizungen.de
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, 
                E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                die Speicherung Ihrer personenbezogenen Daten haben.
              </p>

              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines 
                Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, 
                maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Auskunft, Löschung und Berichtigung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. 
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-forest mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Kontaktformular & Förder-Kalkulator</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular, Förder-Kalkulator oder E-Mail Anfragen zukommen lassen, werden 
                Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
                Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem 
                berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen 
                (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p>
                Die von Ihnen im Kontaktformular oder Kalkulator eingegebenen Daten verbleiben bei uns, bis Sie 
                uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende 
                gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="text-xl font-semibold text-forest mb-3 mt-6">Anfrage per E-Mail oder Telefon</h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens 
                bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-forest mb-4">5. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>Stand: Februar 2025</p>
              <p className="mt-2">Quelle: <a href="https://www.e-recht24.de" className="text-copper hover:underline">e-recht24.de</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CO2 Sparhalt</h3>
            <p className="text-sm text-gray-300 mb-4">
              Professionelle Förderberatung für klimafreundliche Heizsysteme
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-copper rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CO₂</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-copper transition-colors">Home</Link></li>
              <li><Link href="/kalkulator" className="hover:text-copper transition-colors">Förder-Kalkulator</Link></li>
              <li><Link href="/wissen" className="hover:text-copper transition-colors">Wissen</Link></li>
              <li><Link href="/regionalbanken" className="hover:text-copper transition-colors">Regionalbanken</Link></li>
              <li><Link href="/testimonials" className="hover:text-copper transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Förderungen</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wissen#beg" className="hover:text-copper transition-colors">BEG Einzelmaßnahme</Link></li>
              <li><Link href="/wissen#kfw458" className="hover:text-copper transition-colors">KfW 458</Link></li>
              <li><Link href="/wissen#kwk" className="hover:text-copper transition-colors">KWK/KWKG</Link></li>
              <li><Link href="/wissen#regional" className="hover:text-copper transition-colors">Regionale Förderung</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:m.kremer@fuchs-heizungen.de" className="hover:text-copper transition-colors">
                  m.kremer@fuchs-heizungen.de
                </a>
              </li>
              <li>
                <a href="tel:+4923899005451" className="hover:text-copper transition-colors">
                  +49 2389 900 5451
                </a>
              </li>
              <li className="pt-2">
                <span className="text-gray-300">Fuchs Heizungen</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {currentYear} Fuchs Holding GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:text-copper transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-copper transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

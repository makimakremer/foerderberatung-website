'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, CalculatorIcon } from '@heroicons/react/24/solid';

type CalculatorStep = 'lead' | 'calculator' | 'result';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface CalculationInput {
  heatingType: string;
  buildingType: string;
  investmentAmount: number;
  oldHeatingSystem: string;
  income: number;
}

interface FundingResult {
  baseRate: number;
  speedBonus: number;
  incomeBonus: number;
  totalRate: number;
  maxFundingAmount: number;
  actualFundingAmount: number;
}

export default function KalkulatorPage() {
  const [step, setStep] = useState<CalculatorStep>('lead');
  const [leadData, setLeadData] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
    consent: false
  });
  
  const [calculationInput, setCalculationInput] = useState<CalculationInput>({
    heatingType: '',
    buildingType: 'residential',
    investmentAmount: 30000,
    oldHeatingSystem: '',
    income: 50000
  });

  const [result, setResult] = useState<FundingResult | null>(null);

  // Lead form submission
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadData.name && leadData.email && leadData.consent) {
      // In production, send lead data to backend/CRM
      console.log('Lead captured:', leadData);
      setStep('calculator');
    }
  };

  // Calculate funding
  const calculateFunding = () => {
    let baseRate = 30; // BEG Base rate
    let speedBonus = 0;
    let incomeBonus = 0;

    // Klima-Geschwindigkeitsbonus (replacing old fossil fuel heating)
    if (['gas', 'oil', 'coal', 'night-storage'].includes(calculationInput.oldHeatingSystem)) {
      speedBonus = 20;
    }

    // Einkommensbonus (income ≤ 40,000€)
    if (calculationInput.income <= 40000) {
      incomeBonus = 30;
    }

    const totalRate = Math.min(baseRate + speedBonus + incomeBonus, 70); // Max 70%

    // Maximum funding amounts by measure type
    const maxAmounts: { [key: string]: number } = {
      'heat-pump': 60000, // Max eligible costs for heat pump
      'biomass': 60000,
      'solar-thermal': 25000,
      'district-heating': 40000,
      'kwk': 50000
    };

    const maxEligibleCosts = maxAmounts[calculationInput.heatingType] || 60000;
    const eligibleCosts = Math.min(calculationInput.investmentAmount, maxEligibleCosts);
    const actualFundingAmount = Math.round((eligibleCosts * totalRate) / 100);

    const fundingResult: FundingResult = {
      baseRate,
      speedBonus,
      incomeBonus,
      totalRate,
      maxFundingAmount: Math.round((maxEligibleCosts * totalRate) / 100),
      actualFundingAmount
    };

    setResult(fundingResult);
    setStep('result');
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    calculateFunding();
  };

  return (
    <div className="min-h-screen bg-ice">
      <div className="container-custom section-padding">
        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step === 'lead' ? 'text-copper' : 'text-success'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'lead' ? 'bg-copper' : 'bg-success'} text-white font-bold`}>
                {step === 'lead' ? '1' : '✓'}
              </div>
              <span className="hidden sm:block font-medium">Kontaktdaten</span>
            </div>
            <div className="h-1 w-16 bg-gray-300"></div>
            <div className={`flex items-center gap-2 ${step === 'calculator' ? 'text-copper' : step === 'result' ? 'text-success' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'calculator' ? 'bg-copper' : step === 'result' ? 'bg-success' : 'bg-gray-300'} text-white font-bold`}>
                {step === 'result' ? '✓' : '2'}
              </div>
              <span className="hidden sm:block font-medium">Berechnung</span>
            </div>
            <div className="h-1 w-16 bg-gray-300"></div>
            <div className={`flex items-center gap-2 ${step === 'result' ? 'text-copper' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'result' ? 'bg-copper' : 'bg-gray-300'} text-white font-bold`}>
                3
              </div>
              <span className="hidden sm:block font-medium">Ergebnis</span>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        {step === 'lead' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card">
              <div className="text-center mb-8">
                <CalculatorIcon className="w-16 h-16 text-copper mx-auto mb-4" />
                <h1 className="text-forest mb-4">Förder-Kalkulator</h1>
                <p className="text-gray-600">
                  Erfahren Sie kostenlos, wie viel Förderung Sie erhalten können. 
                  Geben Sie zuerst Ihre Kontaktdaten ein, um fortzufahren.
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadData.name}
                    onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
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
                    value={leadData.email}
                    onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={leadData.phone}
                    onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    checked={leadData.consent}
                    onChange={(e) => setLeadData({ ...leadData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 text-copper focus:ring-copper border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-600">
                    Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. 
                    Weitere Informationen in unserer <a href="/datenschutz" className="text-copper hover:underline">Datenschutzerklärung</a>.
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Weiter zur Berechnung →
                </button>

                <div className="text-center text-sm text-gray-500">
                  <CheckCircleIcon className="w-5 h-5 inline text-success mr-1" />
                  100% kostenlos & unverbindlich
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Calculator Form */}
        {step === 'calculator' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card">
              <div className="text-center mb-8">
                <h2 className="text-forest mb-4">Ihre Heizungsmodernisierung</h2>
                <p className="text-gray-600">
                  Beantworten Sie einige Fragen zu Ihrem Vorhaben
                </p>
              </div>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Neue Heizungsart *
                  </label>
                  <select
                    required
                    value={calculationInput.heatingType}
                    onChange={(e) => setCalculationInput({ ...calculationInput, heatingType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="heat-pump">Wärmepumpe (Luft/Wasser/Sole)</option>
                    <option value="biomass">Biomasse (Pellets/Holz)</option>
                    <option value="solar-thermal">Solarthermie</option>
                    <option value="district-heating">Fernwärme/Wärmenetz</option>
                    <option value="kwk">KWK-Anlage (BHKW)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alte Heizungsanlage *
                  </label>
                  <select
                    required
                    value={calculationInput.oldHeatingSystem}
                    onChange={(e) => setCalculationInput({ ...calculationInput, oldHeatingSystem: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="gas">Gasheizung</option>
                    <option value="oil">Ölheizung</option>
                    <option value="coal">Kohleheizung</option>
                    <option value="night-storage">Nachtspeicherheizung</option>
                    <option value="other">Sonstige</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Voraussichtliche Investitionssumme (€) *
                  </label>
                  <input
                    type="number"
                    required
                    min="5000"
                    max="200000"
                    value={calculationInput.investmentAmount}
                    onChange={(e) => setCalculationInput({ ...calculationInput, investmentAmount: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Inkl. Installation und Nebenkosten</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zu versteuerndes Haushaltsjahreseinkommen (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="200000"
                    value={calculationInput.income}
                    onChange={(e) => setCalculationInput({ ...calculationInput, income: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Für Einkommensbonus (max. 40.000€). Optional.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep('lead')}
                    className="btn-secondary flex-1"
                  >
                    ← Zurück
                  </button>
                  <button type="submit" className="btn-primary flex-1">
                    Förderung berechnen
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Result */}
        {step === 'result' && result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card bg-gradient-to-br from-forest to-[#0f3a2e] text-white">
              <div className="text-center mb-8">
                <CheckCircleIcon className="w-20 h-20 text-success mx-auto mb-4" />
                <h1 className="text-white mb-2">Ihre Förderung</h1>
                <p className="text-xl text-gray-200">
                  Glückwunsch! Hier ist Ihre persönliche Förderberechnung
                </p>
              </div>

              {/* Main Result */}
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-sm text-gray-300 mb-2">Ihre Förderquote</p>
                    <p className="text-6xl font-mono font-bold text-copper mb-2">
                      {result.totalRate}%
                    </p>
                    <p className="text-sm text-gray-300">
                      Basis {result.baseRate}%
                      {result.speedBonus > 0 && ` + Geschwindigkeitsbonus ${result.speedBonus}%`}
                      {result.incomeBonus > 0 && ` + Einkommensbonus ${result.incomeBonus}%`}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-300 mb-2">Maximaler Förderbetrag</p>
                    <p className="text-6xl font-mono font-bold text-success mb-2">
                      {result.actualFundingAmount.toLocaleString('de-DE')}€
                    </p>
                    <p className="text-sm text-gray-300">
                      Bei Ihrer Investition von {calculationInput.investmentAmount.toLocaleString('de-DE')}€
                    </p>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Förderkomponenten</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basis-Förderung (BEG)</span>
                    <span className="font-mono font-bold">{result.baseRate}%</span>
                  </div>
                  {result.speedBonus > 0 && (
                    <div className="flex justify-between items-center text-copper">
                      <span>Klima-Geschwindigkeitsbonus</span>
                      <span className="font-mono font-bold">+ {result.speedBonus}%</span>
                    </div>
                  )}
                  {result.incomeBonus > 0 && (
                    <div className="flex justify-between items-center text-copper">
                      <span>Einkommensbonus</span>
                      <span className="font-mono font-bold">+ {result.incomeBonus}%</span>
                    </div>
                  )}
                  <div className="border-t border-white/20 pt-3 flex justify-between items-center text-xl font-bold">
                    <span>Gesamt-Förderquote</span>
                    <span className="font-mono text-copper">{result.totalRate}%</span>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Nächste Schritte</h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Angebot von Fuchs Heizungen einholen</li>
                  <li>Förderfähige Maßnahme mit Energieberater planen</li>
                  <li>Förderantrag BEFORE Vertragsabschluss stellen</li>
                  <li>Nach Zusage: Maßnahme umsetzen</li>
                  <li>Verwendungsnachweis einreichen & Förderung erhalten</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setStep('calculator')}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-forest flex-1"
                >
                  ← Neu berechnen
                </button>
                <a href="/kontakt" className="flex-1">
                  <button className="btn-primary w-full bg-copper hover:bg-white hover:text-copper">
                    Jetzt Beratungstermin vereinbaren →
                  </button>
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="card mt-6 bg-alert/10 border border-alert">
              <p className="text-sm text-gray-700">
                <strong>Wichtiger Hinweis:</strong> Diese Berechnung ist unverbindlich und stellt keine Zusage dar. 
                Die tatsächliche Förderhöhe hängt von verschiedenen Faktoren ab und wird durch die jeweilige Förderstelle (BAFA/KfW) geprüft. 
                Stand der Fördersätze: Februar 2025. Bitte lassen Sie sich von unseren Experten beraten.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

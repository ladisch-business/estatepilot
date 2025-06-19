export default function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Ein Plan, der mit Ihnen wächst</h3>
                    <p className="mt-4 text-lg text-slate-500">Transparente Preise, keine versteckten Kosten.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Plan 1: Privat */}
                    <div className="border border-slate-200 rounded-xl p-8 flex flex-col">
                        <h4 className="text-2xl font-semibold">Privat</h4>
                        <p className="text-slate-500 mt-2">Für Einsteiger und private Vermieter.</p>
                        <div className="mt-6">
                            <span className="text-5xl font-extrabold">9€</span>
                            <span className="text-slate-500"> / Monat</span>
                        </div>
                        <ul className="mt-8 space-y-4 text-slate-600">
                            <li>✅ Bis zu 3 Mieteinheiten</li>
                            <li>✅ Objekt- & Mieterverwaltung</li>
                            <li>✅ Digitale Dokumentenablage</li>
                            <li>✅ Standard-Reporting</li>
                        </ul>
                        <a href="/register" className="mt-auto w-full text-center px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                            Plan wählen
                        </a>
                    </div>
                    {/* Plan 2: Professional (Hervorgehoben) */}
                    <div className="border-2 border-blue-600 rounded-xl p-8 flex flex-col relative shadow-2xl">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">Beliebtester Plan</div>
                        <h4 className="text-2xl font-semibold">Professional</h4>
                        <p className="text-slate-500 mt-2">Für erfahrene Verwalter und kleine Unternehmen.</p>
                        <div className="mt-6">
                            <span className="text-5xl font-extrabold">29€</span>
                            <span className="text-slate-500"> / Monat</span>
                        </div>
                        <ul className="mt-8 space-y-4 text-slate-600">
                            <li>✅ Bis zu 20 Mieteinheiten</li>
                            <li>✅ Alles aus "Privat"</li>
                            <li>✅ Finanz- & Renditeanalyse</li>
                            <li>✅ Autom. Kommunikation</li>
                        </ul>
                        <a href="/register" className="mt-auto w-full text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            Plan wählen
                        </a>
                    </div>
                    {/* Plan 3: Enterprise */}
                    <div className="border border-slate-200 rounded-xl p-8 flex flex-col">
                        <h4 className="text-2xl font-semibold">Enterprise</h4>
                        <p className="text-slate-500 mt-2">Für große Verwaltungen mit individuellen Bedürfnissen.</p>
                        <div className="mt-6">
                            <span className="text-4xl font-extrabold">Individuell</span>
                        </div>
                        <ul className="mt-8 space-y-4 text-slate-600">
                            <li>✅ Unbegrenzte Einheiten</li>
                            <li>✅ Alles aus "Professional"</li>
                            <li>✅ Persönlicher Support</li>
                            <li>✅ Individuelle Anpassungen</li>
                        </ul>
                        <a href="#contact" className="mt-auto w-full text-center px-6 py-3 bg-white border border-slate-600 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition">
                            Kontakt aufnehmen
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
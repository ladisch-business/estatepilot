export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold">Das sagen unsere Kunden</h3>
                    <p className="mt-4 text-lg text-slate-400">Tausende Vermieter vertrauen bereits auf estatepilot.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-slate-800 p-8 rounded-lg">
                        <p className="text-slate-300 mb-6">"Seit ich estatepilot nutze, habe ich endlich den vollen Überblick über meine Finanzen und spare jede Woche Stunden bei der Verwaltung. Ein absoluter Game-Changer!"</p>
                        <div className="font-bold">Max Mustermann</div>
                        <div className="text-sm text-blue-400">Privater Vermieter, 5 Einheiten</div>
                    </div>
                    <div className="bg-slate-800 p-8 rounded-lg">
                        <p className="text-slate-300 mb-6">"Die digitale Objektakte ist Gold wert. Alle Dokumente sind sofort griffbereit und sicher archiviert. Nie wieder Aktenordner wälzen!"</p>
                        <div className="font-bold">Erika Mustermann</div>
                        <div className="text-sm text-blue-400">Immobilienverwalterin</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
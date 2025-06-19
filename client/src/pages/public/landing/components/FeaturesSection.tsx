import { Building, Coins, FileText, BarChart2 } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Building className="w-8 h-8 text-blue-600" />,
            title: 'Objekt- & Mieterverwaltung',
            description: 'Verwalten Sie alle Ihre Mietobjekte und Mieterinformationen an einem zentralen Ort.'
        },
        {
            icon: <Coins className="w-8 h-8 text-blue-600" />,
            title: 'Mietzahlungen & Finanzen',
            description: 'Behalten Sie den Überblick über Mieteingänge, Nebenkosten und die gesamte Finanzlage Ihrer Objekte.'
        },
        {
            icon: <FileText className="w-8 h-8 text-blue-600" />,
            title: 'Digitale Objektakte',
            description: 'Archivieren Sie Mietverträge, Übergabeprotokolle und Sanierungsdokumente sicher und digital.'
        },
        {
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
            title: 'Wirtschaftlichkeitsanalyse',
            description: 'Errechnen Sie Rendite, Cashflow und Kosten, um fundierte Entscheidungen zu treffen.'
        }
    ];

    return (
        <section id="features" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Alles, was Sie für Ihre Verwaltung brauchen</h3>
                    <p className="mt-4 text-lg text-slate-500">Basierend auf den Anforderungen moderner Vermieter entwickelt.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature) => (
                        <div key={feature.title} className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                            <p className="text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default function HeroSection() {
    return (
        <section className="pt-32 pb-20 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                    Die digitale Revolution für Ihre Immobilienverwaltung.
                </h2>
                <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                    estatepilot bündelt alle Werkzeuge, die Sie als moderner Vermieter benötigen. Von der Objektverwaltung über die Finanzen bis zur digitalen Akte – alles an einem Ort.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="/register" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-transform hover:scale-105">
                        Jetzt kostenlos starten
                    </a>
                    <a href="#features" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-lg border border-slate-300 hover:bg-slate-100 transition-colors">
                        Mehr erfahren
                    </a>
                </div>
            </div>
        </section>
    );
}
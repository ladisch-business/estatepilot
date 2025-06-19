export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">estatepilot 🏡</h1>
                <nav className="hidden md:flex space-x-8 items-center">
                    <a href="#features" className="text-slate-600 hover:text-blue-600">Funktionen</a>
                    <a href="#pricing" className="text-slate-600 hover:text-blue-600">Preise</a>
                    <a href="#contact" className="text-slate-600 hover:text-blue-600">Kontakt</a>
                </nav>
                <a href="/login" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Anmelden
                </a>
            </div>
        </header>
    );
}
export default function Footer() {
    return (
        <footer className="bg-slate-100 border-t border-slate-200">
            <div className="container mx-auto px-6 py-8 text-center text-slate-500">
                <p>&copy; {new Date().getFullYear()} estatepilot. Alle Rechte vorbehalten.</p>
                <div className="mt-4 space-x-6">
                    <a href="/impressum" className="hover:text-blue-600">Impressum</a>
                    <a href="/datenschutz" className="hover:text-blue-600">Datenschutz</a>
                    <a href="/agb" className="hover:text-blue-600">AGB</a>
                </div>
            </div>
        </footer>
    );
}
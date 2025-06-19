export default function ContactSection() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Haben Sie Fragen?</h3>
                    <p className="mt-4 text-lg text-slate-500">Wir freuen uns, von Ihnen zu hören.</p>
                </div>
                <div className="max-w-xl mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-Mail</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Ihre Nachricht</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                                Nachricht senden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
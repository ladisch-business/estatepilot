import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/public/landing/index.tsx';
import DashboardPage from './pages/admin/dashboard/index.tsx';

export default function App() {
    // --- PLATZHALTER-LOGIK ---
    // Später wird dieser Wert durch eine echte Authentifizierungsprüfung ersetzt.
    // Ändere den Wert auf `true`, um die geschützte Dashboard-Ansicht zu testen.
    const isLoggedIn = false;

    return (
        <BrowserRouter>
            <Routes>
                {/* Öffentliche Routen */}
                <Route path="/" element={!isLoggedIn ? <LandingPage /> : <Navigate to="/admin/dashboard" />} />

                {/* Geschützte Routen */}
                <Route
                    path="/admin/dashboard"
                    element={isLoggedIn ? <DashboardPage /> : <Navigate to="/" />}
                />

                {/* Fallback für unbekannte Pfade -> leitet zur Startseite */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
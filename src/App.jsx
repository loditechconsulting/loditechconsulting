import { useCallback, useState } from 'react';
import { ConsultationContext } from './lib/consultation';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationDialog from './components/ConsultationDialog';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';

const pages = {
  home: HomePage,
  privacy: PrivacyPage,
};

export default function App({ page = 'home' }) {
  const Page = pages[page] ?? HomePage;

  // `key` changes on every open so the form remounts fresh with the requested service
  const [consultation, setConsultation] = useState({ open: false, key: 0 });

  const openConsultation = useCallback(({ service, context } = {}) => {
    setConsultation((prev) => ({ open: true, key: prev.key + 1, service, context }));
  }, []);

  const closeConsultation = useCallback(() => {
    setConsultation((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <ConsultationContext value={openConsultation}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-3 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <TopBar />
      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Page />
      </main>

      <Footer />

      <ConsultationDialog
        key={consultation.key}
        open={consultation.open}
        onClose={closeConsultation}
        initialService={consultation.service}
        context={consultation.context}
      />
    </ConsultationContext>
  );
}

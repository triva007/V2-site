import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import TccPage from './pages/TccPage';
import BilansPage from './pages/BilansPage';
import SoutienPage from './pages/SoutienPage';
import AboutPage from './pages/AboutPage';
import PracticalInfoPage from './pages/PracticalInfoPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/tcc':
        return <TccPage />;
      case '#/bilans':
        return <BilansPage />;
      case '#/soutien':
        return <SoutienPage />;
      case '#/a-propos':
        return <AboutPage />;
      case '#/tarifs-infos':
        return <PracticalInfoPage />;
      case '#/faq':
        return <FaqPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-[#F8F3EF] text-[#3C2E2A] font-body">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
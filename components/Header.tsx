import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const approachLinks = [
      { name: 'Thérapies TCC', href: '#/tcc' },
      { name: 'Bilans Neuropsychologiques', href: '#/bilans' },
      { name: 'Thérapie de Soutien', href: '#/soutien' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 h-20 md:h-24 ${isScrolled ? 'bg-background/80 shadow-md backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="text-xl font-bold font-heading text-secondary hover:text-primary transition-colors">
            Dr Johanna Auvray Unglik
          </a>
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="group text-text-dark hover:text-primary transition-colors duration-200 text-lg relative">Accueil<span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-expo"></span></a>
            
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="group text-text-dark hover:text-primary transition-colors duration-200 text-lg relative flex items-center gap-1">
                Mes Approches
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-expo"></span>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-4 w-64 bg-white rounded-lg shadow-xl py-2 animate-fade-in-down">
                  {approachLinks.map(link => (
                    <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block px-4 py-2 text-text-dark hover:bg-accent hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#/a-propos" onClick={(e) => handleNavClick(e, '#/a-propos')} className="group text-text-dark hover:text-primary transition-colors duration-200 text-lg relative">À Propos<span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-expo"></span></a>
            <a href="#/tarifs-infos" onClick={(e) => handleNavClick(e, '#/tarifs-infos')} className="group text-text-dark hover:text-primary transition-colors duration-200 text-lg relative">Tarifs & Infos<span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-expo"></span></a>
            <a href="#/faq" onClick={(e) => handleNavClick(e, '#/faq')} className="group text-text-dark hover:text-primary transition-colors duration-200 text-lg relative">FAQ<span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-expo"></span></a>
            <Button href="#/contact" variant="primary">Prendre RDV</Button>
          </nav>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-secondary focus:outline-none"
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <nav className="px-4 pt-2 pb-4 space-y-2 sm:px-6">
            <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="block text-text-dark hover:text-primary transition-colors duration-200 py-3 text-lg">Accueil</a>
            <p className="text-text-dark py-3 text-lg font-semibold">Mes Approches</p>
            {approachLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block text-text-dark hover:text-primary transition-colors duration-200 py-2 text-base pl-4">{link.name}</a>
            ))}
            <a href="#/a-propos" onClick={(e) => handleNavClick(e, '#/a-propos')} className="block text-text-dark hover:text-primary transition-colors duration-200 py-3 text-lg">À Propos</a>
            <a href="#/tarifs-infos" onClick={(e) => handleNavClick(e, '#/tarifs-infos')} className="block text-text-dark hover:text-primary transition-colors duration-200 py-3 text-lg">Tarifs & Infos</a>
            <a href="#/faq" onClick={(e) => handleNavClick(e, '#/faq')} className="block text-text-dark hover:text-primary transition-colors duration-200 py-3 text-lg">FAQ</a>
            <div className="pt-4">
              <Button href="#/contact" variant="primary" className="w-full">Prendre RDV</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
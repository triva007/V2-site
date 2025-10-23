import React from 'react';

const DoctolibIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
      <title>Doctolib</title>
      <path d="M16.5,6.5A6.5,6.5,0,0,0,10,0,10,10,0,0,0,0,10a10,10,0,0,0,10,10,10,10,0,0,0,10-10,3.5,3.5,0,0,1-3.5-3.5m0,2A1.5,1.5,0,1,1,15,7,1.5,1.5,0,0,1,16.5,8.5Z"/>
    </svg>
);

const Footer: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  const navLinks = [
    { name: 'Accueil', href: '#/' },
    { name: 'Mes Approches', href: '#/tcc' },
    { name: 'À Propos', href: '#/a-propos' },
    { name: 'Tarifs & Infos', href: '#/tarifs-infos' },
    { name: 'FAQ', href: '#/faq' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <footer className="bg-secondary text-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="lg:col-span-1">
            <h3 className="font-heading font-semibold text-xl text-white">Dr Johanna Auvray Unglik</h3>
            <p className="mt-4 text-accent/80 text-sm leading-relaxed">
              Psychologue clinicienne et Docteure en psychologie à Paris 17. J'accompagne adultes et jeunes adultes avec une approche humaine, scientifique et bienveillante.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-xl text-white">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-accent/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl text-white">Coordonnées</h3>
            <div className="mt-4 space-y-2 text-accent/80 text-sm">
              <p>45 Boulevard Gouvion-Saint-Cyr, 75017 Paris</p>
              <p>Email : psy.auvray@gmail.com</p>
              <p className="pt-2">RPPS : 10008937095</p>
              <p>SIRET : 90849197000012</p>
            </div>
          </div>

          <div>
             <h3 className="font-heading font-semibold text-xl text-white">Réseaux</h3>
             <div className="mt-4 flex justify-center md:justify-start">
                <a 
                    href="https://www.doctolib.fr/psychologue/paris/johanna-auvray" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Profil Doctolib du Dr Johanna Auvray Unglik"
                    className="text-accent/80 hover:text-white transition-colors"
                >
                    <DoctolibIcon />
                </a>
             </div>
          </div>

        </div>
        <div className="mt-16 border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-accent/60">
          <p>© 2025 Dr Johanna Auvray Unglik. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            {/* These should ideally lead to actual pages in a real project */}
            <a href="#/mentions-legales" onClick={(e) => handleNavClick(e, '#/mentions-legales')} className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#/confidentialite" onClick={(e) => handleNavClick(e, '#/confidentialite')} className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
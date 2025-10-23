
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const values = [
  "Expertise universitaire et clinique",
  "Approche humaine et pragmatique",
  "Résultats mesurables"
];

const TickIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;

const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <img 
              src="https://picsum.photos/seed/johanna-portrait-2/800/900" 
              alt="Portrait du Dr Johanna Auvray" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-bold font-heading text-secondary">À propos du Dr Johanna Auvray</h2>
            <p className="mt-6 text-lg leading-relaxed">
              Docteure en psychologie diplômée de l’Université Paris Descartes, Johanna Auvray a exercé plusieurs années à la Pitié-Salpêtrière. Elle est spécialisée en TCC et en neuropsychologie. Son accompagnement repose sur une écoute bienveillante, des outils concrets et un suivi personnalisé pour chaque patient.
            </p>
            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow">
                    <TickIcon />
                  </div>
                  <p className="text-lg font-medium text-text-dark">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button href="#/contact" variant="primary">Prendre rendez-vous</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

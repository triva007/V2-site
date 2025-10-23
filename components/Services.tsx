
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const ClipboardCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;


const services = [
  {
    icon: <BrainIcon />,
    title: "Thérapies Comportementales et Cognitives (TCC)",
    description: "Approche centrée sur le présent, qui aide à identifier et modifier les pensées et comportements sources de souffrance.",
    tags: ["Anxiété", "Dépression", "TOC", "Phobies", "Confiance en soi"]
  },
  {
    icon: <ClipboardCheckIcon />,
    title: "Bilans neuropsychologiques",
    description: "Évaluation du fonctionnement cognitif : mémoire, attention, raisonnement, fonctions exécutives.",
    tags: ["TDAH", "TSA", "Mémoire", "Concentration", "Évaluation cognitive"]
  },
  {
    icon: <HeartIcon />,
    title: "Thérapie de soutien",
    description: "Espace d’écoute et de parole pour surmonter les périodes de stress, de deuil ou de difficultés personnelles.",
    tags: ["Stress", "Solitude", "Deuil", "Soutien émotionnel"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="prestations" className="py-28 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-bold font-heading text-secondary">Mes accompagnements pour votre bien-être</h2>
          <p className="mt-4 text-xl text-text-dark max-w-3xl mx-auto">Des approches reconnues et adaptées à vos besoins.</p>
        </AnimatedSection>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white/70 p-8 rounded-2xl shadow-lg h-full flex flex-col text-left transition-all duration-300 ease-out-expo hover:shadow-xl hover:-translate-y-2 hover:bg-white">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="mt-6 font-bold font-heading text-secondary">{service.title}</h3>
                <p className="mt-4 text-lg text-text-dark flex-grow">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="bg-primary/20 text-secondary text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-20" delay={450}>
            <Button href="#/accompagnements" variant="primary">Découvrir mes accompagnements</Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;

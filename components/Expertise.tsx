
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const expertiseItems = [
  "Troubles anxieux et dépressifs",
  "TDAH (adulte)",
  "Troubles du spectre de l’autisme (TSA)",
  "Troubles alimentaires / chirurgie bariatrique",
  "Maladies neurodégénératives",
  "Accompagnement des aidants"
];

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold font-heading text-secondary">Mes domaines d’expertise</h2>
        </AnimatedSection>
        <AnimatedSection>
            <div className="mt-12 max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
            {expertiseItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/50 p-4 rounded-lg">
                <CheckIcon />
                <p className="text-lg text-text-dark">{item}</p>
                </div>
            ))}
            </div>
        </AnimatedSection>
        <AnimatedSection className="mt-12 text-center">
            <Button href="#/approche" variant="secondary">Découvrir mon approche en détail</Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Expertise;

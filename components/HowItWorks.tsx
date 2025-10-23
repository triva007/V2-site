
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const steps = [
  { number: 1, title: "Écoute et définition des besoins" },
  { number: 2, title: "Mise en place d’objectifs thérapeutiques" },
  { number: 3, title: "Travail pratique et accompagnement" },
  { number: 4, title: "Suivi et évaluation des progrès" }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="deroulement" className="py-28 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-bold font-heading text-secondary">Le déroulement d'une thérapie</h2>
        </AnimatedSection>
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <AnimatedSection delay={index * 150} className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold font-heading shadow-lg z-10">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/30" />
                      )}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-secondary">{step.title}</h3>
                </AnimatedSection>
              </React.Fragment>
            ))}
          </div>
        </div>
        <AnimatedSection className="mt-20" delay={600}>
          <Button href="#/contact" variant="secondary">Réserver ma séance</Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorks;

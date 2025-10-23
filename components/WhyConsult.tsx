import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const WhyConsult: React.FC = () => {
  return (
    <section id="approche" className="py-20 bg-[#F5E6E0]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img 
              src="https://picsum.photos/seed/therapy-session/800/600" 
              alt="Session de thérapie calme et accueillante" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-heading text-[#5C4033]">Pourquoi consulter ?</h2>
            <p className="mt-6 text-lg leading-relaxed">
              Vous ressentez du stress, un épuisement, un manque de confiance ou un mal-être ? Vous traversez un changement de vie difficile ? Consulter un psychologue, c’est offrir à votre esprit un espace d’écoute et de clarté. Johanna Auvray vous accompagne à votre rythme, avec bienveillance et professionnalisme.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="#/contact" variant="primary">Réserver mon appel découverte offert</Button>
              <Button href="#/contact" variant="secondary">Réserver ma séance</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyConsult;

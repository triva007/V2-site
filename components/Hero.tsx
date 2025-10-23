import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const Hero: React.FC = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-[90vh]">
          <AnimatedSection className="h-[30rem] lg:h-[40rem] w-full">
            <img 
              src="https://picsum.photos/seed/johanna-auvray-portrait/800/1200" 
              alt="Portrait du Dr Johanna Auvray" 
              className="rounded-lg shadow-xl w-full h-full object-cover object-top"
            />
          </AnimatedSection>
          
          <div className="py-12 lg:py-0">
            <AnimatedSection delay={100}>
              <div className="flex items-center space-x-2">
                <MapPinIcon/>
                <p className="font-semibold text-lg text-secondary">Cabinet privé situé à Paris 17 (75017)</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h1 className="mt-4 font-medium font-heading text-secondary tracking-tight">
                Dr. Johanna Auvray Unglik
                <br/>
                <span className="text-7xl lg:text-8xl italic">Psychologue à Paris 17</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="mt-6 text-xl leading-relaxed max-w-xl">
                Psychologue clinicienne et Thérapeute TCC, je vous accompagne avec <strong>bienveillance</strong> pour surmonter vos <strong>difficultés</strong> et retrouver un bien-être <strong>durable</strong>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
                <div>
                  <Button href="#/contact" variant="primary">PRENDRE RDV</Button>
                  <p className="text-center mt-2 text-sm text-secondary">Je prends rendez-vous au cabinet</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import AnimatedSection from './AnimatedSection';

const reviews = [
  "Une psychologue douce, professionnelle et à l’écoute.",
  "Les TCC m’ont permis de reprendre confiance en moi.",
  "Une vraie évolution après quelques séances."
];

const QuoteIcon = () => <svg className="h-20 w-20 text-accent" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.583c-1.041 0-1.958-.334-2.75-.917s-1.375-1.416-1.75-2.416c-.375-1-.542-2.125-.5-3.334.042-1.208.333-2.333.875-3.375s1.292-1.958 2.25-2.75 2.083-1.333 3.375-1.625c1.292-.292 2.583-.292 3.875 0V11.5c-1.25-.333-2.417-.25-3.5.25s-1.958 1.25-2.625 2.25-1.125 2.125-1.375 3.375c-.25 1.25-.167 2.458.25 3.625zM22.667 22.583c-1.042 0-1.958-.334-2.75-.917s-1.375-1.416-1.75-2.416c-.375-1-.542-2.125-.5-3.334.042-1.208.333-2.333.875-3.375s1.292-1.958 2.25-2.75 2.083-1.333 3.375-1.625c1.292-.292 2.583-.292 3.875 0V11.5c-1.25-.333-2.417-.25-3.5.25s-1.958 1.25-2.625 2.25-1.125 2.125-1.375 3.375c-.25 1.25-.167 2.458.25 3.625z"></path></svg>;

const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-bold font-heading text-secondary">Ce que disent mes patients</h2>
        </AnimatedSection>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center items-center relative transition-all duration-300 ease-out-expo hover:shadow-xl hover:-translate-y-2">
                <div className="absolute -top-8 -left-4 opacity-70">
                  <QuoteIcon />
                </div>
                <p className="text-xl italic text-center text-text-dark z-10">"{review}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-16" delay={450}>
          <p className="text-lg font-semibold text-secondary">+100 patients accompagnés à Paris et en ligne</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;

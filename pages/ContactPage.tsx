import React from 'react';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const EnvelopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

const ContactPage: React.FC = () => {
  return (
    <div className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h1 className="text-5xl font-bold font-heading text-secondary">Prendre Rendez-vous</h1>
          <p className="mt-4 text-xl text-text-dark max-w-3xl mx-auto">
            Utilisez le formulaire ci-dessous pour toute demande de renseignement ou pour convenir d'un premier rendez-vous.
          </p>
        </AnimatedSection>

        <div className="mt-20 grid lg:grid-cols-2 gap-16">
          <ContactForm />
          
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <div>
                  <h2 className="text-3xl font-bold font-heading text-secondary">Informations Pratiques</h2>
                  <div className="mt-6 space-y-4 text-lg">
                      <div className="flex items-start space-x-4">
                          <MapPinIcon />
                          <div>
                              <p className="font-semibold text-secondary">Adresse</p>
                              <p>45 Boulevard Gouvion-Saint-Cyr, 75017 Paris</p>
                              <p className="text-base mt-1">Transports : Métro L1 (Porte Maillot), L3 (Porte Champerret), Tram T3b (Thérèse Pierre)</p>
                          </div>
                      </div>
                      <div className="flex items-start space-x-4">
                          <ClockIcon />
                          <div>
                              <p className="font-semibold text-secondary">Horaires</p>
                              <p>Lundi & Mardi : 09h – 20h</p>
                          </div>
                      </div>
                      <div className="flex items-start space-x-4">
                          <EnvelopeIcon />
                          <div>
                              <p className="font-semibold text-secondary">Email</p>
                              <p>psy.auvray@gmail.com</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                <a 
                  href="https://www.google.com/maps/place/45+Bd+Gouvion-Saint-Cyr,+75017+Paris,+France" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block rounded-lg shadow-xl overflow-hidden"
                >
                  <img src="https://picsum.photos/seed/paris-map/800/600" alt="Carte du cabinet à Paris 17" className="w-full h-full object-cover"/>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

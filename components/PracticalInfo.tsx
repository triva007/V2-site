
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const VideoCameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const CreditCardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;


const PracticalInfo: React.FC = () => {
  return (
    <section id="cabinet" className="py-20 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold font-heading text-secondary">Cabinet & informations pratiques</h2>
        </AnimatedSection>
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
                <div className="space-y-6 bg-white/50 p-8 rounded-lg shadow-lg h-full">
                    <div className="flex items-start space-x-4">
                        <MapPinIcon />
                        <div>
                            <h3 className="text-lg font-semibold text-secondary">Adresse</h3>
                            <p>45 Boulevard Gouvion-Saint-Cyr, 75017 Paris</p>
                            <p className="text-sm mt-2">Transports : Métro L1 (Porte Maillot), L3 (Porte Champerret), Tram T3b (Thérèse Pierre)</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <ClockIcon />
                        <div>
                            <h3 className="text-lg font-semibold text-secondary">Horaires</h3>
                            <p>Lundi : 09h – 20h</p>
                            <p>Mardi : 09h – 20h</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <VideoCameraIcon />
                        <div>
                            <h3 className="text-lg font-semibold text-secondary">Consultations</h3>
                            <p>En cabinet ou en visioconsultation via Microsoft Teams.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <CreditCardIcon />
                        <div>
                            <h3 className="text-lg font-semibold text-secondary">Tarifs & Paiement</h3>
                            <p>Consultation individuelle : 90€</p>
                            <p>Bilans neuropsychologiques : 280€ à 380€</p>
                            <p className="text-sm mt-2">Paiement : Espèces, chèques, Lydia, Paylib.</p>
                            <p className="text-sm mt-1">Remboursement possible selon votre contrat de mutuelle.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <img src="https://picsum.photos/seed/paris-map/800/600" alt="Carte du cabinet à Paris 17" className="rounded-lg shadow-xl w-full h-full object-cover"/>
            </AnimatedSection>
        </div>
        <AnimatedSection className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#/contact" variant="primary">Réserver mon appel découverte offert</Button>
            <Button href="#/contact" variant="secondary">Réserver ma séance</Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PracticalInfo;

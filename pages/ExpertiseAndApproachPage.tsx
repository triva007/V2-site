import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import Expertise from '../components/Expertise';

const ExpertiseAndApproachPage: React.FC = () => {
    return (
        <div className="py-20 bg-[#F8F3EF]">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-4xl font-bold font-heading text-[#5C4033]">Mon Approche Thérapeutique</h1>
                    <p className="mt-4 text-xl text-[#3C2E2A] max-w-3xl mx-auto">
                        Une approche intégrative, humaine et basée sur les preuves scientifiques pour un accompagnement sur mesure.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img 
                            src="https://picsum.photos/seed/approach-calm/800/600" 
                            alt="Espace de consultation serein" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="bg-white/50 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold font-heading text-[#5C4033]">Ma philosophie</h2>
                            <p className="mt-4 text-lg leading-relaxed">
                            Je crois en une psychologie concrète et collaborative. Mon rôle est de vous fournir des outils et des clés de compréhension pour que vous deveniez l'acteur principal de votre changement. J'intègre les approches validées des Thérapies Comportementales et Cognitives (TCC) à une écoute empathique et sans jugement, issue de mon expérience clinique.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                            Chaque parcours est unique. C'est pourquoi nous définissons ensemble des objectifs clairs et mesurables, en avançant à votre rythme, dans un cadre sécurisant et de confiance.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-20">
                    <div className="text-center">
                         <h2 className="text-3xl font-bold font-heading text-[#5C4033]">Pour qui ?</h2>
                         <p className="mt-4 text-lg max-w-3xl mx-auto">
                            J'accompagne principalement les adultes et jeunes adultes qui rencontrent des difficultés personnelles, relationnelles ou professionnelles et qui souhaitent retrouver un apaisement.
                         </p>
                    </div>
                    <div className="mt-10 grid md:grid-cols-2 gap-8 text-lg">
                        <div className="bg-white/50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold font-heading text-[#5C4033]">Vous vous sentez...</h3>
                            <ul className="mt-4 list-disc list-inside space-y-2">
                                <li>Dépassé(e) par le stress, l'anxiété ou la tristesse.</li>
                                <li>En situation d'épuisement professionnel ou personnel (burn-out).</li>
                                <li>En manque de confiance en vous ou d'estime de vous.</li>
                                <li>Perdu(e) face à un changement de vie (deuil, rupture, etc.).</li>
                                <li>En difficulté dans vos relations avec les autres.</li>
                            </ul>
                        </div>
                         <div className="bg-white/50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold font-heading text-[#5C4033]">Vous souhaitez...</h3>
                            <ul className="mt-4 list-disc list-inside space-y-2">
                                <li>Mieux comprendre votre fonctionnement (TDAH, TSA, HPI).</li>
                                <li>Apprendre à mieux gérer vos émotions.</li>
                                <li>Modifier des comportements qui vous pèsent au quotidien.</li>
                                <li>Développer des stratégies pour atteindre vos objectifs.</li>
                                <li>Simplement trouver un espace pour parler librement.</li>
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>
                
                {/* Re-using Expertise component and removing its own button */}
                <div className="mt-20">
                     <Expertise />
                </div>


                <AnimatedSection className="mt-12 text-center bg-[#F5E6E0] p-12 rounded-lg">
                     <h3 className="text-2xl font-bold font-heading text-[#5C4033]">Faisons connaissance</h3>
                     <p className="mt-4 text-lg">L'appel découverte de 15 minutes est offert et sans engagement. C'est l'occasion idéale pour voir si mon approche vous correspond.</p>
                     <div className="mt-8">
                        <Button href="#/contact" variant="primary">Je réserve mon appel</Button>
                     </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ExpertiseAndApproachPage;

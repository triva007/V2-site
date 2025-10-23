import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const BilansPage: React.FC = () => {
    return (
        <div>
            <PageHeader 
                title="Bilans Neuropsychologiques pour Adultes"
                subtitle="Pour une meilleure compréhension de votre fonctionnement cognitif et de vos potentiels."
            />
            <div className="py-20 bg-background">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Qu'est-ce qu'un bilan neuropsychologique ?</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            Le bilan neuropsychologique est une évaluation approfondie de vos fonctions cognitives, c'est-à-dire les capacités de votre cerveau qui vous permettent d'interagir avec votre environnement : mémoire, attention, concentration, raisonnement, planification, etc. Il permet de mettre en lumière vos forces et vos faiblesses pour objectiver et comprendre l'origine de certaines difficultés du quotidien.
                        </p>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Pourquoi faire un bilan ?</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                           Un bilan peut être recommandé pour diverses raisons :
                        </p>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
                            <li>Suspicion de Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDAH) à l'âge adulte.</li>
                            <li>Suspicion de Trouble du Spectre de l'Autisme (TSA).</li>
                            <li>Difficultés de mémoire, de concentration ou d'organisation persistantes.</li>
                            <li>Questionnement sur un Haut Potentiel Intellectuel (HPI).</li>
                            <li>Évaluation de l'impact cognitif suite à une maladie neurologique ou un traumatisme crânien.</li>
                        </ul>
                    </AnimatedSection>

                     <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Le déroulement en 3 étapes</h2>
                        <div className="mt-6 space-y-6 border-l-4 border-primary/30 pl-6">
                            <div>
                                <h3 className="text-xl font-semibold text-primary">1. Premier entretien</h3>
                                <p className="text-lg mt-1">Cette première rencontre (environ 1h) nous permet de discuter de votre histoire, de vos difficultés actuelles et de définir précisément l'objectif du bilan.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary">2. Passation des tests</h3>
                                <p className="text-lg mt-1">Cette phase (environ 2 à 3h, parfois en plusieurs fois) consiste en une série de tests standardisés (questionnaires, exercices sur papier ou tablette) pour évaluer les différentes fonctions cognitives.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary">3. Entretien de restitution</h3>
                                <p className="text-lg mt-1">Lors de ce dernier entretien (environ 1h), je vous remets un compte-rendu écrit détaillé, je vous explique les résultats et nous discutons ensemble des conclusions et des préconisations (aménagements, suivi, etc.).</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="!mt-20 text-center bg-accent p-12 rounded-lg">
                         <h3 className="text-2xl font-bold font-heading text-secondary">Demander un premier entretien pour un bilan</h3>
                         <p className="mt-4 text-lg">Contactez-moi pour planifier un premier entretien et discuter de la pertinence d'un bilan neuropsychologique dans votre situation.</p>
                         <div className="mt-8">
                            <Button href="#/contact" variant="primary">Demander un entretien</Button>
                         </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default BilansPage;

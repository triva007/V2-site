import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const TccPage: React.FC = () => {
    return (
        <div>
            <PageHeader 
                title="Thérapies Comportementales et Cognitives (TCC)"
                subtitle="Une approche active et collaborative pour surmonter vos difficultés et atteindre vos objectifs."
            />
            <div className="py-20 bg-background">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Qu'est-ce que les TCC ?</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            Les Thérapies Comportementales et Cognitives (TCC) sont des thérapies brèves, validées par la recherche scientifique. Elles se concentrent sur les difficultés que vous rencontrez "ici et maintenant". L'objectif est de vous aider à comprendre les liens qui existent entre vos pensées, vos émotions et vos comportements, afin de briser les cercles vicieux qui entretiennent votre souffrance.
                        </p>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Pour qui ?</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            Les TCC sont particulièrement indiquées pour un large éventail de difficultés, notamment :
                        </p>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
                            <li>Les troubles anxieux : anxiété sociale, phobies, Trouble Obsessionnel Compulsif (TOC), attaques de panique.</li>
                            <li>Les troubles de l'humeur comme la dépression.</li>
                            <li>Le manque de confiance en soi et d'affirmation de soi.</li>
                            <li>La gestion du stress et des émotions.</li>
                            <li>Les troubles du sommeil.</li>
                        </ul>
                    </AnimatedSection>

                     <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Comment ça marche ?</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            Notre travail est collaboratif. Après une phase d'évaluation pour bien comprendre votre situation, nous définissons ensemble des objectifs thérapeutiques clairs et concrets. Les séances s'articulent autour d'échanges et d'exercices pratiques, que nous réalisons en séance et que vous pouvez appliquer dans votre quotidien. Vous devenez ainsi acteur de votre propre changement.
                        </p>
                    </AnimatedSection>

                     <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Les bénéfices</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                           L'approche TCC vise des résultats concrets et durables. Vous apprendrez à :
                        </p>
                         <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
                            <li>Identifier et modifier vos pensées négatives.</li>
                            <li>Mieux gérer vos émotions et réduire votre anxiété.</li>
                            <li>Adopter de nouveaux comportements plus adaptés à vos objectifs de vie.</li>
                            <li>Développer votre autonomie et prévenir les rechutes.</li>
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="!mt-20 text-center bg-accent p-12 rounded-lg">
                         <h3 className="text-2xl font-bold font-heading text-secondary">Faire le point sur votre situation</h3>
                         <p className="mt-4 text-lg">Contactez-moi pour discuter de votre situation et voir si une approche TCC peut vous aider.</p>
                         <div className="mt-8">
                            <Button href="#/contact" variant="primary">Prendre rendez-vous</Button>
                         </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default TccPage;

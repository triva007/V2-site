import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const TickIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;


const AboutPage: React.FC = () => {
    const philosophyPoints = [
        "Approche collaborative et sur-mesure",
        "Basée sur les preuves scientifiques (TCC)",
        "Cadre d'écoute bienveillant et sans jugement",
        "Objectifs concrets et mesurables",
    ];

    return (
        <div>
            <PageHeader
                title="Dr. Johanna Auvray Unglik"
                subtitle="Psychologue clinicienne, Docteure en psychologie et Thérapeute TCC."
            />
            <div className="py-20 bg-background">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-16">
                        <div className="lg:col-span-3">
                            <AnimatedSection>
                                <h2 className="font-heading text-3xl font-semibold text-secondary">Mon Parcours</h2>
                                <div className="mt-6 space-y-6 text-lg leading-relaxed prose prose-lg max-w-none">
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary">Formation Universitaire & Recherche</h3>
                                        <p>
                                            Diplômée d'un <strong>Doctorat en Psychologie</strong> de l'Université Paris Descartes (aujourd'hui Université Paris Cité), mes recherches se sont concentrées sur les processus cognitifs et émotionnels. Cette base scientifique solide est le fondement de ma pratique clinique. Je poursuis mes activités de recherche au sein du Laboratoire de Psychopathologie et Processus de Santé (LPPS), ce qui me permet de rester à la pointe des avancées thérapeutiques.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary">Expérience Hospitalière</h3>
                                        <p>
                                            J'ai exercé plusieurs années en tant que psychologue à l'<strong>Hôpital de la Pitié-Salpêtrière (AP-HP)</strong>. Cette expérience en milieu hospitalier, notamment dans des services de neurologie et de chirurgie bariatrique, m'a apporté une expertise approfondie dans l'accompagnement de patients confrontés à des maladies chroniques et à des changements de vie majeurs.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary">Enseignement</h3>
                                        <p>
                                            Passionnée par la transmission, je suis également <strong>enseignante à l'Institut de Psychologie</strong> de l'Université Paris Cité. Partager mes connaissances avec les futurs psychologues est une source d'enrichissement constant qui nourrit ma pratique quotidienne.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection className="mt-12">
                                <h2 className="font-heading text-3xl font-semibold text-secondary">Ma Philosophie de Travail</h2>
                                <p className="mt-4 text-lg leading-relaxed">
                                    Je conçois la thérapie comme un travail d'équipe. Mon rôle est de vous offrir un cadre sécurisant et de vous transmettre des outils concrets pour que vous puissiez devenir l'expert(e) de votre propre fonctionnement et l'acteur/actrice de votre changement.
                                </p>
                                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                                    {philosophyPoints.map((point, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow">
                                                <TickIcon />
                                            </div>
                                            <span className="text-lg">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                        <div className="lg:col-span-2">
                             <AnimatedSection delay={200}>
                                <div className="lg:sticky top-32">
                                    <img
                                        src="https://picsum.photos/seed/warm-office-portrait/800/1000"
                                        alt="Portrait professionnel du Dr Johanna Auvray Unglik"
                                        className="rounded-lg shadow-xl w-full h-auto object-cover"
                                    />
                                    <div className="mt-6 bg-accent p-4 rounded-lg text-sm text-center">
                                        <p><strong>Numéro RPPS :</strong> 10008937095</p>
                                        <p><strong>Numéro SIRET :</strong> 90849197000012</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                     <AnimatedSection className="mt-20 text-center bg-accent p-12 rounded-lg">
                         <h3 className="text-2xl font-bold font-heading text-secondary">Prêt(e) à commencer ?</h3>
                         <p className="mt-4 text-lg">Le premier pas est souvent le plus difficile. Je suis là pour vous accompagner.</p>
                         <div className="mt-8">
                            <Button href="#/contact" variant="primary">Prendre rendez-vous</Button>
                         </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
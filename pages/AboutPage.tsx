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
                                <div className="mt-6 space-y-4 text-lg leading-relaxed prose prose-lg max-w-none">
                                    <p>
                                        Diplômée d'un <strong>Doctorat en Psychologie</strong> de l'Université Paris Descartes (Paris Cité), ma pratique est enrichie par une double expertise en <strong>neuropsychologie</strong> et en <strong>Thérapies Comportementales et Cognitives (TCC)</strong>.
                                    </p>
                                    <p>
                                        Mon expérience hospitalière à l'<strong>Hôpital de la Pitié-Salpêtrière (AP-HP)</strong>, notamment dans des services spécialisés en chirurgie bariatrique et en neurologie, m'a permis de développer une expertise dans l'accompagnement de problématiques complexes.
                                    </p>
                                    <p>
                                        En parallèle de mon activité clinique, je suis également <strong>enseignante à l'Institut de Psychologie</strong> de l'Université Paris Cité et mène des activités de recherche au sein du Laboratoire de Psychopathologie et Processus de Santé (LPPS). Cette double casquette me permet de maintenir une pratique constamment mise à jour avec les dernières avancées scientifiques.
                                    </p>
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
                                <img
                                    src="https://picsum.photos/seed/johanna-auvray-portrait/800/1000"
                                    alt="Portrait du Dr Johanna Auvray Unglik"
                                    className="rounded-lg shadow-xl w-full h-auto object-cover sticky top-32"
                                />
                                <div className="mt-6 bg-accent p-4 rounded-lg text-sm text-center">
                                    <p><strong>Numéro RPPS :</strong> 10008937095</p>
                                    <p><strong>Numéro SIRET :</strong> 90849197000012</p>
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

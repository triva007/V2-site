
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

// Icons from Services.tsx
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const ClipboardCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

const servicesDetails = [
    {
      icon: <BrainIcon />,
      title: "Thérapies Comportementales et Cognitives (TCC)",
      content: [
          "Les TCC sont des thérapies brèves, validées scientifiquement, qui se concentrent sur les difficultés du \"ici et maintenant\". L'objectif est de vous aider à comprendre les liens entre vos pensées, vos émotions et vos comportements.",
          "Ensemble, nous identifierons les schémas de pensée négatifs ou les comportements inadaptés qui entretiennent votre souffrance. À travers des exercices concrets et personnalisés, vous apprendrez progressivement à modifier ces schémas pour retrouver un meilleur équilibre de vie.",
          "Cette approche est particulièrement efficace pour les troubles anxieux (phobies, TOC, anxiété sociale), la dépression, la gestion du stress et l'amélioration de la confiance en soi."
      ],
      tags: ["Anxiété", "Dépression", "TOC", "Phobies", "Confiance en soi", "Gestion du stress"]
    },
    {
      icon: <ClipboardCheckIcon />,
      title: "Bilans neuropsychologiques",
      content: [
        "Le bilan neuropsychologique est une évaluation approfondie de vos fonctions cognitives (mémoire, attention, concentration, raisonnement, etc.). Il permet de mettre en lumière vos forces et vos faiblesses cognitives pour mieux comprendre l'origine de certaines difficultés quotidiennes.",
        "Le bilan se déroule en plusieurs étapes : un premier entretien pour cerner votre demande, une ou plusieurs séances de passation de tests standardisés, puis une séance de restitution pour vous expliquer les résultats et vous proposer des pistes d'accompagnement ou d'aménagements.",
        "Il est souvent recommandé pour le diagnostic ou le suivi du TDAH (Trouble du Déficit de l'Attention avec ou sans Hyperactivité) chez l'adulte, des troubles du spectre de l'autisme (TSA), ou pour évaluer l'impact de maladies neurologiques."
      ],
       tags: ["TDAH", "TSA", "Mémoire", "Concentration", "Évaluation cognitive", "Haut Potentiel"]
    },
    {
      icon: <HeartIcon />,
      title: "Thérapie de soutien",
      content: [
        "La thérapie de soutien vous offre un espace d'écoute confidentiel et bienveillant, sans jugement. C'est un lieu où vous pouvez déposer vos soucis, exprimer vos émotions et prendre du recul sur une situation difficile que vous traversez.",
        "Mon rôle est de vous accompagner dans la clarification de vos pensées, de vous aider à mobiliser vos propres ressources pour faire face à l'épreuve. Il ne s'agit pas de trouver des solutions à votre place, mais de vous soutenir dans votre cheminement personnel.",
        "Cet accompagnement est adapté pour traverser des périodes de vie compliquées : deuil, séparation, difficultés professionnelles (burn-out), maladie, ou tout simplement un sentiment de mal-être diffus."
      ],
       tags: ["Stress", "Solitude", "Deuil", "Soutien émotionnel", "Burn-out", "Difficultés relationnelles"]
    }
  ];

const ServicesPage: React.FC = () => {
    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-4xl font-bold font-heading text-secondary">Mes Accompagnements</h1>
                    <p className="mt-4 text-xl text-text-dark max-w-3xl mx-auto">
                        Je propose des approches thérapeutiques modernes et validées, adaptées à vos besoins spécifiques pour vous aider à retrouver un bien-être durable.
                    </p>
                </AnimatedSection>

                <div className="mt-16 space-y-16">
                    {servicesDetails.map((service, index) => (
                        <AnimatedSection key={index}>
                            <div className="bg-white/50 p-8 md:p-12 rounded-lg shadow-lg">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <div className="flex-shrink-0">{service.icon}</div>
                                    <h2 className="text-2xl font-bold font-heading text-secondary">{service.title}</h2>
                                </div>
                                <div className="mt-6 space-y-4 text-lg text-text-dark leading-relaxed border-l-4 border-primary/30 pl-6">
                                    {service.content.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
                                </div>
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="bg-primary/20 text-secondary text-sm font-medium px-3 py-1.5 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="mt-20 text-center bg-accent p-12 rounded-lg">
                     <h3 className="text-2xl font-bold font-heading text-secondary">Prêt(e) à commencer votre parcours ?</h3>
                     <p className="mt-4 text-lg">Contactez-moi pour un premier échange gratuit et sans engagement.</p>
                     <div className="mt-8">
                        <Button href="#/contact" variant="primary">Réserver mon appel découverte</Button>
                     </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ServicesPage;

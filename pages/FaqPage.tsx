import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const faqData = [
    {
      question: "Quelle est la différence entre un psychologue et un psychiatre ?",
      answer: "Le psychologue a une formation universitaire en psychologie (Master 2 ou Doctorat) et se concentre sur l'écoute, l'évaluation psychologique et les thérapies. Il ne prescrit pas de médicaments. Le psychiatre est un médecin spécialisé en santé mentale, il peut poser des diagnostics médicaux, prescrire des traitements médicamenteux et proposer un suivi thérapeutique."
    },
    {
      question: "Combien de séances faut-il prévoir ?",
      answer: "La durée est très variable et dépend de vos besoins et objectifs. Les TCC sont des thérapies généralement brèves (quelques mois). Une thérapie de soutien peut être plus ponctuelle. Nous définissons ensemble le cadre et la durée estimés lors des premières séances."
    },
    {
      question: "Comment se déroule la première séance ?",
      answer: "La première séance est une rencontre. Elle nous permet de faire connaissance, d'explorer les raisons de votre démarche et vos attentes. C'est aussi l'occasion pour moi de vous présenter ma manière de travailler. L'objectif est de s'assurer que vous vous sentez en confiance pour que nous puissions collaborer efficacement."
    },
    {
      question: "Les séances sont-elles confidentielles ?",
      answer: "Absolument. En tant que psychologue, je suis soumise au secret professionnel, comme le stipule le Code de Déontologie des Psychologues. Tout ce qui est échangé en séance reste strictement confidentiel."
    },
    {
        question: "Proposez-vous des consultations en ligne (visioconférence) ?",
        answer: "Oui, je propose des consultations en visioconférence via une plateforme sécurisée. Cela offre plus de flexibilité et permet un suivi même si vous ne pouvez pas vous déplacer au cabinet."
    },
    {
      question: "Les consultations sont-elles remboursées ?",
      answer: "Les consultations chez un psychologue en libéral ne sont pas remboursées par la Sécurité Sociale. Cependant, de plus en plus de mutuelles proposent une prise en charge (forfait annuel ou nombre de séances). Je vous fournirai une facture sur demande pour vos démarches de remboursement."
    }
];

interface FaqItemProps {
    faq: {
      question: string;
      answer: string;
    };
    index: number;
    toggleFAQ: (index: number) => void;
    open: boolean;
  }

const FaqItem: React.FC<FaqItemProps> = ({ faq, index, toggleFAQ, open }) => {
    return (
        <div className={`border-b border-primary/20 transition-colors duration-300 ${open ? 'bg-accent' : 'bg-transparent hover:bg-accent/50'}`}>
            <button 
                onClick={() => toggleFAQ(index)} 
                className="w-full text-left p-6 flex justify-between items-center gap-4"
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
            >
                <span className="text-xl font-semibold text-secondary">{faq.question}</span>
                <span className={`text-3xl text-primary transform transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div 
                id={`faq-answer-${index}`}
                role="region"
                className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="pb-6 px-6 text-lg text-text-dark">
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    )
}

const FaqPage: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        if (openFAQ === index) {
            return setOpenFAQ(null);
        }
        setOpenFAQ(index);
    };

    return (
        <div className="py-28 bg-background">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="font-bold font-heading text-secondary text-5xl">Questions Fréquentes</h1>
                </AnimatedSection>

                <AnimatedSection className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden" delay={200}>
                    {faqData.map((faq, index) => (
                        <FaqItem 
                            key={index}
                            faq={faq}
                            index={index}
                            open={openFAQ === index}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </AnimatedSection>
                
                <AnimatedSection className="mt-20 text-center bg-accent p-12 rounded-2xl" delay={400}>
                     <h3 className="text-2xl font-bold font-heading text-secondary">Vous avez une autre question ?</h3>
                     <p className="mt-4 text-lg">N'hésitez pas à me contacter directement. L'appel découverte est fait pour ça.</p>
                     <div className="mt-8">
                        <Button href="#/contact" variant="primary">Contacter Dr. Auvray</Button>
                     </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default FaqPage;

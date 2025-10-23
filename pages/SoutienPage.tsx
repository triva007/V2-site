import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const SoutienPage: React.FC = () => {
    return (
        <div>
            <PageHeader 
                title="Thérapie de Soutien"
                subtitle="Un espace d'écoute confidentiel et bienveillant pour traverser les épreuves de la vie."
            />
            <div className="py-20 bg-background">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Un espace pour déposer et prendre du recul</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            La thérapie de soutien vous offre un lieu neutre et sécurisant où vous pouvez parler librement de ce qui vous pèse, sans crainte d'être jugé(e). Mon rôle est de vous accompagner par une écoute active et empathique, de vous aider à clarifier vos pensées, à verbaliser vos émotions et à mobiliser vos propres ressources pour faire face à la situation.
                        </p>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Pour qui ?</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            Cet accompagnement est particulièrement adapté si vous traversez une période difficile et ressentez le besoin d'être épaulé(e). Par exemple :
                        </p>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
                            <li>Un deuil, une séparation ou une perte.</li>
                            <li>Des difficultés professionnelles, un burn-out ou une transition de carrière.</li>
                            <li>La maladie d'un proche ou votre propre maladie (soutien aux aidants).</li>
                            <li>Des conflits relationnels (famille, couple, amis).</li>
                            <li>Un sentiment de solitude, de stress ou de mal-être général.</li>
                        </ul>
                    </AnimatedSection>

                     <AnimatedSection>
                        <h2 className="font-heading text-3xl font-semibold text-secondary">Les bénéfices</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                           S'offrir cet espace d'écoute peut vous apporter :
                        </p>
                         <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
                            <li>Un apaisement en soulageant le poids de vos préoccupations.</li>
                            <li>Une meilleure compréhension de ce que vous vivez.</li>
                            <li>Une prise de recul nécessaire pour envisager de nouvelles perspectives.</li>
                            <li>Le sentiment d'être moins seul(e) face à vos difficultés.</li>
                            <li>La mobilisation de vos forces et de votre capacité à trouver vos propres solutions.</li>
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="!mt-20 text-center bg-accent p-12 rounded-lg">
                         <h3 className="text-2xl font-bold font-heading text-secondary">Besoin de parler ?</h3>
                         <p className="mt-4 text-lg">Je suis à votre écoute. Prenez rendez-vous pour une première consultation.</p>
                         <div className="mt-8">
                            <Button href="#/contact" variant="primary">Prendre rendez-vous</Button>
                         </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default SoutienPage;

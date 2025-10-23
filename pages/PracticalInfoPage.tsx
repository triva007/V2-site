import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

// FIX: Define props with an interface for better readability and to resolve potential tooling issues.
interface InfoCardProps {
    title: string;
    children: React.ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => (
    <div className="bg-white/60 p-8 rounded-lg shadow-lg">
        <h2 className="font-heading text-3xl font-semibold text-secondary">{title}</h2>
        <div className="mt-4 text-lg leading-relaxed space-y-3 prose prose-lg max-w-none">
            {children}
        </div>
    </div>
);

const PracticalInfoPage: React.FC = () => {
    return (
        <div>
            <PageHeader
                title="Tarifs & Informations Pratiques"
                subtitle="Retrouvez ici toutes les informations concernant les consultations."
            />
            <div className="py-20 bg-background">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        <AnimatedSection>
                            {/* FIX: Added children to the InfoCard component to provide content and resolve the missing 'children' prop error. */}
                            <InfoCard title="Tarifs des Consultations">
                                <ul className="!p-0">
                                    <li><strong>Consultation individuelle (50 min) :</strong> 90€</li>
                                    <li><strong>Bilan neuropsychologique :</strong> 280€ - 380€ (selon la demande, incluant entretien, passation, analyse et restitution)</li>
                                </ul>
                            </InfoCard>
                        </AnimatedSection>
                        
                        <AnimatedSection>
                            {/* FIX: Added children to the InfoCard component to provide content and resolve the missing 'children' prop error. */}
                            <InfoCard title="Remboursement">
                                <p>Les consultations de psychologue en libéral ne sont pas remboursées par la Sécurité Sociale. Cependant, de nombreuses <strong>mutuelles</strong> proposent une prise en charge partielle ou totale. Renseignez-vous auprès de la vôtre. Je vous fournirai une facture à cet effet.</p>
                            </InfoCard>
                        </AnimatedSection>

                        <AnimatedSection>
                             {/* FIX: Added children to the InfoCard component to provide content and resolve the missing 'children' prop error. */}
                             <InfoCard title="Visioconsultations">
                                <p>Je propose également des consultations à distance via une plateforme vidéo sécurisée. Le déroulement et le tarif sont les mêmes que pour une consultation en présentiel.</p>
                            </InfoCard>
                        </AnimatedSection>

                        <AnimatedSection>
                             {/* FIX: Added children to the InfoCard component to provide content and resolve the missing 'children' prop error. */}
                             <InfoCard title="Moyens de Paiement">
                                <p>Le règlement s'effectue à la fin de chaque séance par espèces, chèque, Lydia ou Paylib.</p>
                            </InfoCard>
                        </AnimatedSection>

                        <AnimatedSection>
                             {/* FIX: Added children to the InfoCard component to provide content and resolve the missing 'children' prop error. */}
                             <InfoCard title="Politique d'Annulation">
                                <p>Votre temps est précieux, tout comme le mien. Toute consultation non annulée <strong>48 heures à l'avance</strong> est due, sauf en cas de force majeure. Cela permet de proposer le créneau à une autre personne en attente.</p>
                            </InfoCard>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection className="mt-20 text-center bg-accent p-12 rounded-lg">
                         <h3 className="text-2xl font-bold font-heading text-secondary">Une question ? Un rendez-vous ?</h3>
                         <div className="mt-8">
                            <Button href="#/contact" variant="primary">Me contacter</Button>
                         </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default PracticalInfoPage;

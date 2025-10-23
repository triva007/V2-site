import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

// New Components for HomePage
const ReassuranceBand = () => {
    const items = [
        { title: "Docteur en Psychologie", subtitle: "Université de Paris Cité" },
        { title: "Ancienne Psychologue", subtitle: "Hôpital Pitié-Salpêtrière" },
        { title: "Enseignante Universitaire", subtitle: "Institut de Psychologie" },
    ];
    return (
        <section className="bg-accent py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-center font-heading text-3xl font-semibold text-secondary">
                        Une Expertise Reconnue et un Cadre de Confiance
                    </h2>
                </AnimatedSection>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 150} className="text-center bg-white/60 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                            <p className="mt-1 text-secondary">{item.subtitle}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PatientProfiles = () => {
    const AnxietyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 12 2s10 4.477 10 10z" /></svg>;
    const DepressionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    const PuzzleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>;
    const ConfidenceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
    const RelationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    const CognitiveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

    const profiles = [
      { 
        icon: <AnxietyIcon />,
        title: "Anxiété & Stress",
        description: "Gérer le stress chronique, les phobies, les crises d'angoisse ou le trouble panique." 
      },
      { 
        icon: <DepressionIcon />,
        title: "Dépression & Épreuves",
        description: "Surmonter une dépression, un burn-out, un deuil, une séparation ou un traumatisme." 
      },
      { 
        icon: <PuzzleIcon />,
        title: "TDAH, TSA & HPI",
        description: "Mieux comprendre et vivre avec un TDAH, un trouble du spectre de l'autisme ou un haut potentiel." 
      },
      { 
        icon: <ConfidenceIcon />,
        title: "Confiance & Estime de soi",
        description: "Renforcer l'affirmation de soi, dépasser la timidité et développer une meilleure image de vous-même." 
      },
      { 
        icon: <RelationsIcon />,
        title: "Difficultés relationnelles",
        description: "Améliorer la communication et apaiser les conflits dans votre couple, votre famille ou au travail." 
      },
      { 
        icon: <CognitiveIcon />,
        title: "Bilans cognitifs",
        description: "Clarifier un diagnostic ou évaluer votre fonctionnement intellectuel et attentionnel." 
      }
    ];
    
    return (
       <section className="py-28">
           <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h2 className="font-heading text-4xl font-semibold text-secondary">J'accompagne les adultes et jeunes adultes</h2>
                    <p className="mt-4 text-xl text-text-dark max-w-3xl mx-auto">
                        Mon expertise se concentre sur l'accompagnement des problématiques qui peuvent impacter votre bien-être personnel, relationnel et professionnel.
                    </p>
                </AnimatedSection>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profiles.map((profile, index) => (
                         <AnimatedSection key={index} delay={index * 100}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg h-full text-center transition-all duration-300 ease-out-expo hover:shadow-xl hover:-translate-y-2 flex flex-col">
                                {profile.icon}
                               <h3 className="text-2xl mt-4 font-semibold text-secondary font-heading">{profile.title}</h3>
                               <p className="mt-2 text-text-dark flex-grow">{profile.description}</p>
                            </div>
                         </AnimatedSection>
                    ))}
                </div>
           </div>
       </section>
    );
}


const ApproachSummary = () => {
    const approaches = [
        { title: "Thérapies TCC", description: "Pour des outils concrets et une thérapie active.", href: "#/tcc" },
        { title: "Bilans Neuropsychologiques", description: "Pour comprendre votre fonctionnement cognitif.", href: "#/bilans" },
        { title: "Thérapie de Soutien", description: "Pour un espace d'écoute bienveillant.", href: "#/soutien" },
    ];
    return (
        <section className="bg-accent py-28">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                 <AnimatedSection className="text-center">
                    <h2 className="font-heading text-4xl font-semibold text-secondary">Des approches sur-mesure pour vous aider à avancer</h2>
                </AnimatedSection>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {approaches.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 150}>
                            <div className="bg-white/70 p-8 rounded-2xl shadow-lg h-full flex flex-col text-center">
                                <h3 className="text-2xl font-bold font-heading text-secondary">{item.title}</h3>
                                <p className="mt-4 text-lg text-text-dark flex-grow">{item.description}</p>
                                <div className="mt-6">
                                    <Button href={item.href} variant="secondary">En savoir plus</Button>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

const AboutSummary = () => {
    return (
        <section className="py-28 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <AnimatedSection>
                        <img 
                        src="https://picsum.photos/seed/johanna-portrait-2/800/900" 
                        alt="Portrait du Dr Johanna Auvray Unglik" 
                        className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </AnimatedSection>
                    <AnimatedSection>
                        <h2 className="font-bold font-heading text-secondary text-4xl">Dr Johanna Auvray Unglik, votre psychologue à Paris 17ème</h2>
                        <p className="mt-6 text-lg leading-relaxed">
                        Docteure en psychologie et spécialiste des TCC et de la neuropsychologie, je crois en une approche collaborative et pragmatique. Mon objectif est de vous accompagner avec écoute et bienveillance pour vous aider à atteindre vos objectifs.
                        </p>
                        <div className="mt-10">
                            <Button href="#/a-propos" variant="primary">Lire mon parcours complet</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

const FinalCTA = () => {
    return (
        <section className="bg-accent py-20">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <h2 className="font-heading text-4xl font-semibold text-secondary">Prêt(e) à faire le premier pas ?</h2>
                    <p className="mt-4 text-xl">
                        Contactez-moi pour un premier échange. L'appel découverte est gratuit, confidentiel et sans engagement.
                    </p>
                    <div className="mt-8">
                        <Button href="#/contact" variant="primary" className="text-lg">Prendre rendez-vous</Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ReassuranceBand />
      <PatientProfiles />
      <ApproachSummary />
      <AboutSummary />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default HomePage;
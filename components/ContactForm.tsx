
import React, { useState } from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        message: '',
        typeDemande: 'Appel découverte offert'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here (e.g., API call)
        console.log('Form data submitted:', formData);
        alert('Votre message a bien été envoyé ! (Simulation)');
        setFormData({
            nom: '',
            email: '',
            telephone: '',
            message: '',
            typeDemande: 'Appel découverte offert'
        });
    };

    return (
        <section id="contact" className="py-20 bg-transparent">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">Faites le premier pas vers votre bien-être</h2>
                    <p className="mt-4 text-lg">
                        Profitez d’un appel découverte offert de 15 minutes pour échanger avec le Dr Johanna Auvray et découvrir si son accompagnement vous correspond.
                    </p>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                    <form onSubmit={handleSubmit} className="mt-12 bg-white/50 p-8 rounded-lg shadow-lg space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nom" className="block text-sm font-medium text-secondary mb-1">Nom</label>
                                <input type="text" id="nom" name="nom" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" value={formData.nom} onChange={handleChange} />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="telephone" className="block text-sm font-medium text-secondary mb-1">Téléphone <span className="text-gray-500">(Optionnel)</span></label>
                            <input type="tel" id="telephone" name="telephone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" value={formData.telephone} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="typeDemande" className="block text-sm font-medium text-secondary mb-1">Type de demande</label>
                            <select id="typeDemande" name="typeDemande" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white" value={formData.typeDemande} onChange={handleChange}>
                                <option>Appel découverte offert</option>
                                <option>Réserver une séance</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Votre message <span className="text-gray-500">(Optionnel)</span></label>
                            <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <div className="text-center pt-4">
                            <Button type="submit" variant="primary" className="w-full md:w-auto">Envoyer ma demande</Button>
                        </div>
                        <p className="text-center text-sm text-secondary">Réponse sous 48h</p>
                    </form>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ContactForm;

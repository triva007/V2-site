import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="py-20 bg-accent">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-5xl font-bold font-heading text-secondary">{title}</h1>
                    {subtitle && (
                        <p className="mt-4 text-xl text-text-dark max-w-3xl mx-auto">
                           {subtitle}
                        </p>
                    )}
                </AnimatedSection>
            </div>
        </div>
    );
};

export default PageHeader;

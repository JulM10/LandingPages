'use client';

import { useEffect, useRef } from 'react';
import { useAnalytics } from '@/lib/analytics';

export type Plan = {
    icon: string;
    name: string;
    title: string;
    platform: string;
    features: string[];
    featured?: boolean;
};

export function PlanCard({ icon, name, title, platform, features, featured = false }: Plan) {
    const { trackPlanSelection } = useAnalytics();
    const tracked = useRef(false);

    useEffect(() => {
        if (!tracked.current) {
            trackPlanSelection(name);
            tracked.current = true;
        }
    }, [name, trackPlanSelection]);

    return (
        <article className={`relative border ${featured
            ? 'border-primary ring-2 ring-primary shadow-xl bg-dark'
            : 'border-dark/10 hover:border-primary/30 bg-white'} rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition`}>
            {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    ⭐ Más elegido
                </span>
            )}
            <span aria-hidden="true" className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-2xl mb-5">{icon}</span>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-2">{name}</p>
            <h3 className={`font-heading font-bold text-xl md:text-2xl tracking-tight mb-3 ${featured ? "text-white" : "text-dark"}`}>{title}</h3>
            <p className={`text-sm md:text-base leading-relaxed mb-6 ${featured ? "text-white/80" : "text-muted"}`}>{platform}</p>
            <ul className="flex flex-col gap-2">
                {features.map((feature) => (
                    <li key={feature} className={`text-sm ${featured ? "text-white/80" : "text-dark/70"} flex items-start gap-2 before:content-['•'] before:text-primary before:font-bold`}>
                        {feature}
                    </li>
                ))}
            </ul>
        </article>
    );
}
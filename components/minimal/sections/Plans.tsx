import { PlanCard, type Plan } from "@/components/minimal/ui/PlanCard";

export function Plans({ eyebrow, title, subtitle, items }:
    { eyebrow?: string; title?: string; subtitle?: string; items:Plan[] }) {
    return (
        <section id="planes" aria-labelledby={title ? "plans-heading" : undefined} className="bg-light py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <header className="max-w-3xl mx-auto text-center">
                {eyebrow && <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-2">{eyebrow}</p>}
                {title && <h2 id="plans-heading" className="font-heading font-bold text-dark text-3xl md:text-4xl tracking-tight mb-4">{title}</h2>}
                {subtitle && <p className="text-lg text-muted leading-relaxed mb-8">{subtitle}</p>}
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item) => (
                    <PlanCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
}
import { Button } from "../ui/Button";
import { Fragment } from "react";
import type { RoadmapConfig } from "@/types/minimal.config.types";

export function Cta({ eyebrow, title, subtitle, steps, cta, secondaryCta, disclaimer }:RoadmapConfig) {
    return (
        <section id="contacto" aria-labelledby="cta-heading" className="bg-dark py-16 md:py-24 px-6 md:px-12 lg:px-24 text-white">
            <header className="max-w-3xl mx-auto text-center">
                {eyebrow && <p className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-2">{eyebrow}</p>}
                <h2 id="cta-heading" className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-4">{title}</h2>
                {subtitle && <p className="text-lg text-white/60 leading-relaxed mb-8">{subtitle}</p>}
            </header>
            {steps && (
                <div className="max-w-4xl mx-auto mb-12 bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    {steps.map((step, index) => (
                        <Fragment key={step.number}>
                            <div className="flex items-center gap-3">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 border border-primary/30 text-primary font-bold shrink-0">
                                    {step.number}
                                </div>
                                <div className="text-center">
                                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent">{step.week}</div>
                                    <div className="text-sm font-semibold text-white/80">{step.name}</div>
                                </div>
                            </div>
                            {index < steps.length - 1 && (
                                <span aria-hidden="true" className="text-white/20 text-xl">→</span>
                            )}
                        </Fragment>
                    ))}
                </div>
            )}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Button label={cta.label} href={cta.href} />
                {secondaryCta && <Button label={secondaryCta.label} href={secondaryCta.href} variant="secondary" />}
            </div>
            {disclaimer && <p className="text-xs text-white/80 mt-4 max-w-2xl mx-auto text-center">{disclaimer}</p>}
        </section>
    );
}

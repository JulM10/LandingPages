import { AgendaConfig } from "@/types/config.types";

export function Cta({ eyebrow, title, subtitle, cta }: AgendaConfig) {
  return (
    <section id="contacto" className="relative bg-dark text-white px-6 py-20 md:py-28 overflow-hidden">
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
      <div className="relative max-w-3xl mx-auto text-center">
        {eyebrow && <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">{eyebrow}</p>}
        <h2 className="font-heading font-black text-3xl md:text-5xl leading-tight">{title}</h2>
        {subtitle && <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto">{subtitle}</p>}
        <a href={cta.href}
           className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base md:text-lg font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary/90 transition mt-10">
          {cta.label}
        </a>
      </div>
    </section>
  );
}
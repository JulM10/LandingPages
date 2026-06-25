import type { BenefitsConfig } from "@/types/conversion.config.types";

export function Benefits({eyebrow, title, subtitle, items }: BenefitsConfig) {
  return (
    <section className="py-16 px-[6%] bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        {eyebrow && <p className="text-sm font-semibold text-primary uppercase">{eyebrow}</p>}
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
      </div>
      <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {items.map((item) => (
          <article key={item.title} className="bg-white border border-dark/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition">
            <span aria-hidden="true" className="text-4xl mb-4 block">{item.icon}</span>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
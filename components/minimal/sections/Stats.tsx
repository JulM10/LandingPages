import { StatCard, type Stat } from "@/components/minimal/ui/StatCard";

export function Stats({ eyebrow, title, subtitle, items }: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: Stat[];
}) {
  return (
    <section
      aria-labelledby={title ? "stats-heading" : undefined}
      className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-dark"
    >
      {/* HEADER de la sección — eyebrow + title + subtitle */}
      <div className="max-w-3xl mb-12 md:mb-16">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            id="stats-heading"
            className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4"
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* GRID de cards — usa StatCard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
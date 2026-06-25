import { StatCard } from "../ui/StatCard";
import { Button } from "../ui/Button";
import type { HeroConfig } from "@/types/minimal.config.types";

export function Hero({ badge, headline, highlight, subtitle, cta, secondaryCta, stats }:HeroConfig) {
  const [before, after] = highlight ? headline.split(highlight) : ["", ""];

  return (
    <section aria-labelledby="hero-heading" className="min-h-[80vh] flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 pt-24 pb-8">
      <div className={stats ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full" : "w-full"}>
        <div>
          {badge && (
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 before:content-['•'] before:text-primary before:font-bold">{badge}</span>
          )}
          <h1 id="hero-heading" className="font-heading font-black text-white tracking-tight leading-tight text-4xl md:text-6xl lg:text-7xl max-w-3xl">
            {highlight ? (
              <>
                {before}
                <span className="text-primary">{highlight}</span>
                {after}
              </>
            ) : (
              headline
            )}
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl mt-6 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Button label={cta.label} href={cta.href} />
            {secondaryCta && (
              <Button label={secondaryCta.label} href={secondaryCta.href} variant="secondary" />
            )}
          </div>
        </div>
        {stats && (
          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
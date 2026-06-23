import { MetricasConfig } from "@/types/config.types"

export function Metricas({ stats }: MetricasConfig) {
  return (
    <section className="bg-dark px-6 py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-primary text-4xl md:text-5xl font-black">{stat.value}</p>
            <p className="text-white/50 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import { PlansConfigConversion } from "@/types/config.types";

export function Plans({ eyebrow, title, subtitle, items }: PlansConfigConversion) {
  return (
    <section id="planes" className="bg-dark text-white px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {eyebrow && <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">{eyebrow}</p>}
          {title && <h2 className="font-heading font-bold text-white text-3xl md:text-4xl">{title}</h2>}
          {subtitle && <p className="text-white/50 mt-3 max-w-xl mx-auto text-sm">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title}
                 className={`rounded-2xl p-6 flex flex-col relative ${item.featured
                   ? "border-2 border-primary bg-primary/10 shadow-xl shadow-primary/20 lg:-translate-y-2"
                   : "border border-white/10 bg-white/5 hover:border-primary/40 transition"}`}>
              {item.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow">⭐ Más elegido</span>
                </div>
              )}
              <div className="mb-4 mt-2">
                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.featured ? "text-primary/70" : "text-white/40"}`}>{item.name}</p>
                <h3 className="font-heading font-bold text-white text-lg leading-tight">{item.title}</h3>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-4">{item.platform}</div>
                <ul className="space-y-2 text-sm text-white/60">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary mt-0.5">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
              <a href="#form"
                 className={`mt-6 block text-center rounded-lg px-4 py-2.5 text-sm font-bold transition ${item.featured
                   ? "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
                   : "border border-white/20 text-white hover:border-primary hover:text-primary"}`}>
                Consultar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
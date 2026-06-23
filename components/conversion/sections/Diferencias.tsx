import { DiferenciasConfig } from "@/types/config.types";

export function Diferencias({ eyebrow, title, subtitle, columnas }: DiferenciasConfig) {
    return (
        <section className="py-16 px-[6%] bg-light">
            <div className="max-w-4xl mx-auto text-center mb-12">
                {eyebrow && <p className="text-sm font-semibold text-primary uppercase">{eyebrow}</p>}
                {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
                {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {columnas.map((columna) => (
                    <article key={columna.title} className={`bg-white border ${columna.destacado ? "border-primary" : "border-dark/10"} rounded-2xl p-8`}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className={`w-2 h-2 rounded-full ${columna.destacado ? "bg-success" : "bg-red-400"}`}></span>
                            <h3 className={`text-xl font-semibold ${columna.destacado ? "text-primary" : "text-dark"}`}>
                                {columna.title}
                            </h3>
                        </div>
                        <ul className="space-y-2 text-muted">
                            {columna.puntos.map((punto, index) => (
                                <li key={index} className="flex gap-2">
                                    <span className={columna.destacado ? "text-success font-bold" : "text-red-400 font-bold"}>
                                        {columna.destacado ? "✓" : "✗"}
                                    </span>
                                    <span>{punto}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

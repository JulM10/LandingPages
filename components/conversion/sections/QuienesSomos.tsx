import { QuienesSomosConfig } from "@/types/conversion.config.types";
import Image from "next/image";

export function QuienesSomos({ eyebrow, title, subtitle, people, stat }: QuienesSomosConfig) {
    return (
        <section className="relative bg-white py-16 overflow-hidden">
            <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative">
                {/* Columna 1: texto */}
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{eyebrow}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3">{title}</h2>
                    <p className="mt-4 text-lg text-dark/60">{subtitle}</p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        {stat.map((s, i) => (
                            <div key={i} className="rounded-xl border border-dark/10 bg-light p-5">
                                <p className="font-bold text-dark">{s.title}</p>
                                <p className="text-muted text-sm mt-1">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Columna 2: el equipo */}
                <div className="space-y-4">
                    {people.map((p) => (
                        <div key={p.name} className="flex gap-4 rounded-2xl border border-dark/10 p-5">
                            <Image src={p.imagesrc} alt={p.name} width={56} height={56}
                                className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                            <div>
                                <p className="font-bold text-dark">{p.name}</p>
                                <p className="text-primary text-sm font-semibold">{p.subtitle}</p>
                                <p className="text-muted text-sm mt-1">{p.description}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {p.bullets.map((b, i) => (
                                        <span key={i} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">{b}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
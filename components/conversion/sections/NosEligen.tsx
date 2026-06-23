import { NosEligenConfig } from "@/types/config.types";

export function NosEligen({ eyebrow, title, subtitle, company }: NosEligenConfig) {
    return (
        <section className="bg-white px-6 py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
                {eyebrow && <p className="text-sm font-semibold text-primary uppercase">{eyebrow}</p>}
                {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
                {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {company.map((company) => (
                    <a key={company.name}
                        href={company.instagram}
                        rel="noopener"
                        className="group rounded-xl border border-dark/10 bg-white overflow-hidden hover:border-primary/40 hover:shadow-md transition">
                        <div className="h-20.bg-primary/5.border-b.border-dark/5.flex.items-center.justify-center">
                            <span className="font-heading font-black text-primary text-2xl">
                                {company.logoSrc}
                            </span>
                        </div>
                        <div className="p-5">
                            <p className="font-heading font-bold text-dark text-sm group-hover:text-primary transition">{company.name}</p>
                            <p className="text-xs text-muted mt-1 leading-relaxed">{company.description}</p>
                            <p className="text-xs text-primary font-semibold mt-3">@{company.instagram.split("/").pop()} →</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
export type Service = {
  icon: string;         
  tag: string;         
  title: string;       
  description: string;  
  features: string[];  
};

export function ServiceCard({ icon, tag, title, description, features }: Service) {
  return (
    <article className="bg-white border border-dark/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition">
        <span aria-hidden="true" className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-2xl mb-5">{icon}</span>
        <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-2">{tag}</p>
        <h3 className="font-heading font-bold text-dark text-xl md:text-2xl tracking-tight mb-3">{title}</h3>
        <p className="text-sm md:text-base text-muted leading-relaxed mb-6">{description}</p>
        <ul className="flex flex-col gap-2">
            {features.map((feature) => (
                <li key={feature} className="text-sm text-dark/70 flex items-start gap-2 before:content-['•'] before:text-primary before:font-bold">{feature}
                </li>
            ))}
        </ul>
    </article>
);
}
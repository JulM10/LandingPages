export type Stat = {
    value: string;
    label: string;
    meta?: string
};

export function StatCard({ value, label, meta }: Stat) {
    return (
        <article className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-primary/30 hover:bg-primary/[0.05] transition">
            <p className="font-heading font-black text-white text-4xl md:text-5xl tracking-tight leading-none mb-3">{value}</p>
            <p className="text-sm text-white/70 leading-relaxed">{label}</p>
            {meta && <p className="text-xs font-semibold text-primary mt-3">{meta}</p>}
        </article>
    );
}
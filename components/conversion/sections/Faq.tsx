"use client";
import { useState } from "react";
import { FAQConfig } from "@/types/config.types";

export function Faq({ eyebrow, title, subtitle, questions }: FAQConfig) {
    const [abierto, setAbierto] = useState<number | null>(null);

    return (
        <section className="bg-white px-6 py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
                {eyebrow && <p className="text-sm font-semibold text-primary uppercase">{eyebrow}</p>}
                {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">{title}</h2>}
                {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
                {questions.map((q, i) => (
                    <div key={i} className="rounded-xl border border-dark/10 bg-light p-5">
                        <button onClick={() => setAbierto(abierto === i ? null : i)} className="flex w-full items-center justify-between text-left font-semibold text-dark">
                            {q.question}
                            <span className="text-primary text-xl">{abierto === i ? "−" : "+"}</span>
                        </button>
                        {abierto === i && (
                            <p className="text-sm text-muted mt-3">{q.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
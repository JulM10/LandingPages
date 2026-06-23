"use client"
import { ConversionHeroConfig } from "@/types/config.types";
import { useState, FormEvent } from "react";

export function Hero({ eyebrow, title, subtitle, highlight, bullets, form }: ConversionHeroConfig) {
    const [empresa, setEmpresa] = useState("");
    const [contacto, setContacto] = useState("");
    const [inversion, setInversion] = useState("");
    const [enviado, setEnviado] = useState(false)

    //configuracion web3forms cambiar la access_key
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setEnviado(data.success)
    };

    return (
        <section id="hero" className="relative bg-dark py-16 overflow-hidden">
            <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {eyebrow}
                    </span>
                    <h1 className="mt-2 text-4xl font-extrabold text-white">
                        {title} <span className="text-primary">{highlight}</span>
                    </h1>
                    <p className="mt-4 text-lg text-white/60">{subtitle}</p>
                    <ul className="mt-6 space-y-3">
                        {bullets?.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-sucess text-xs font-bold">
                                    ✓
                                </span> {b}
                            </li>
                        ))}
                    </ul>
                </div>
                {form && (
                    <div className="bg-white p-6 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-success/40 animate-pulse"></span>
                            <p className="text-xs font-semibold text-success uppercase tracking-wide">{form.eyebrow}</p>
                        </div>
                        <h2 className="text-2xl font-bold text-dark">{form.title}</h2>
                        {form.subtitle && <p className="text-lg text-dark/60">{form.subtitle}</p>}
                        <form className="mt-4" onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label htmlFor="empresa" className="block text-sm font-medium text-muted">
                                    {form.empresa}
                                </label>
                                <input
                                    name="empresa"
                                    value={empresa}
                                    onChange={(e) => setEmpresa(e.target.value)}
                                    type="text"
                                    id="empresa"
                                    placeholder={form.empresa}
                                    className="px-4 py-3 mt-1 block w-full border border-dark/15 rounded-md shadow-sm focus:outline-none focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contacto" className="block text-sm font-medium text-muted">
                                    {form.contacto}
                                </label>
                                <input
                                    name="contacto"
                                    value={contacto}
                                    onChange={(e) => setContacto(e.target.value)}
                                    type="text"
                                    id="contacto"
                                    placeholder={form.contacto}
                                    className="px-4 py-3 mt-1 block w-full border border-dark/15 rounded-md shadow-sm focus:outline-none focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                            {form.dropdownOptions && (
                                <div className="mb-4">
                                    <label htmlFor="dropdown" className="block text-sm font-medium text-muted">
                                        {form.dropdownlabel}
                                    </label>
                                    <select
                                        name="inversion"
                                        value={inversion}
                                        onChange={(e) => setInversion(e.target.value)}
                                        id="dropdown"
                                        className="px-4 py-3 mt-1 block w-full border border-dark/15 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    >
                                        {form.dropdownOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <button type="submit" className="w-full rounded-lg bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
                                {form.cta.label}
                            </button>
                            {enviado && <p className="text-success text-sm mt-3 text-center">Gracias te contactamos pronto.</p>}
                            <p className="text-xs text-muted text-center mt-3">{form.ctasubtitle}</p>
                        </form>
                    </div>
                )}
            </div>
        </section>
    )
}
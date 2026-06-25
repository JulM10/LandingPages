"use client"
import { ConversionHeroConfig } from "@/types/conversion.config.types";
import { useState, FormEvent, useEffect } from "react";
import { useAnalytics } from "@/lib/analytics";

export function Hero({ eyebrow, title, subtitle, highlight, bullets, form }: ConversionHeroConfig) {
    const { trackFormSubmit } = useAnalytics();
    const [empresa, setEmpresa] = useState("");
    const [contacto, setContacto] = useState("");
    const [email, setEmail] = useState("");
    const [inversion, setInversion] = useState("");
    const [descripcion, setDescripcion] = useState(() => {
        if (typeof window !== 'undefined') {
            const planSeleccionado = localStorage.getItem('planSeleccionado');
            if (planSeleccionado) {
                localStorage.removeItem('planSeleccionado');
                return `Plan: ${planSeleccionado}`;
            }
        }
        return '';
    });
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    // Escuchar custom event cuando se selecciona un plan
    useEffect(() => {
        const handlePlanSeleccionado = (event: CustomEvent<string>) => {
            setDescripcion(`Plan: ${event.detail}`);
        };

        window.addEventListener('planSeleccionado', handlePlanSeleccionado as EventListener);
        return () => window.removeEventListener('planSeleccionado', handlePlanSeleccionado as EventListener);
    }, []);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB!);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                trackFormSubmit("hero", { empresa, contacto, email, inversion, descripcion });
                setEnviado(true);
                setEmpresa("");
                setContacto("");
                setEmail("");
                setInversion("");
                setDescripcion("");
                setTimeout(() => setEnviado(false), 5000);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="hero" className="relative bg-dark py-16 overflow-hidden">
            <div id="form" className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
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
                                    required
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
                                    required
                                    className="px-4 py-3 mt-1 block w-full border border-dark/15 rounded-md shadow-sm focus:outline-none focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-muted">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    placeholder="tu@email.com"
                                    required
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
                            <div className="mb-4">
                                <label htmlFor="descripcion" className="block text-sm font-medium text-muted">
                                    Descripción (opcional)
                                </label>
                                <textarea
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    id="descripcion"
                                    placeholder="Cuéntanos más sobre tu proyecto..."
                                    className="px-4 py-3 mt-1 block w-full border border-dark/15 rounded-md shadow-sm focus:outline-none focus:ring-primary/20 focus:border-primary resize-none"
                                    rows={2}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading || enviado}
                                className="w-full rounded-lg bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Enviando...' : enviado ? '✓ Enviado!' : form.cta.label}
                            </button>
                            {enviado && <p className="text-success text-sm mt-3 text-center">¡Gracias! Te contactaremos a la brevedad.</p>}
                            <p className="text-xs text-muted text-center mt-3">Tu información es privada y segura</p>
                        </form>
                    </div>
                )}
            </div>
        </section>
    )
}
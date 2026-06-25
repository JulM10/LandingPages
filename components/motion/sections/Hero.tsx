"use client";

import { motion, Variants } from "framer-motion";
import { ConversionHeroConfig } from "@/types/motion.config.types";
import { useState, FormEvent, useEffect } from "react";
import { useAnalytics } from "@/lib/analytics";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ✨ Shine effect animation for highlight text
const shineVariants: Variants = {
    animate: {
        backgroundPosition: ["300% center", "-300% center"],
        transition: { duration: 15, repeat: Infinity, repeatType: "loop" },
    },
};

export function Hero({ eyebrow, title, subtitle, highlight, bullets, form }: ConversionHeroConfig) {
    const { trackFormSubmit } = useAnalytics();
    const [empresa, setEmpresa] = useState("");
    const [contacto, setContacto] = useState("");
    const [email, setEmail] = useState("");
    const [numero, setNumero] = useState("");
    const [inversion, setInversion] = useState("");
    const [descripcion, setDescripcion] = useState("");
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
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                trackFormSubmit("hero", { empresa, contacto, email, numero, inversion, descripcion });
                setEnviado(true);
                setEmpresa("");
                setContacto("");
                setEmail("");
                setNumero("");
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
        <section id="hero" className="relative bg-dark pt-32 pb-20 overflow-hidden">
            {/* Glows decorativos */}
            <div id="form" className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(43,169,247,.22) 0%, transparent 70%)", filter: "blur(40px)" }} />
            <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(24,184,204,.15) 0%, transparent 70%)", filter: "blur(40px)" }} />

            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-start relative">
            {/* COLUMNA 1: Texto */}
            <div className="space-y-6">
                {/* Badge */}
                {eyebrow && (
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold text-primary">
                            <span className="animate-pulse">🔥</span>
                            {eyebrow}
                        </span>
                    </motion.div>
                )}

                {/* Headline */}
                <motion.h1
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                    {title}
                    {highlight && (
                        <motion.span
                            className="bg-clip-text text-transparent inline-block"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #2ba9f7 0%, #2ba9f7 20%, #ffffff 50%, #18b8cc 80%, #18b8cc 100%)',
                                backgroundSize: "300% 100%",
                                backgroundPosition: "300% center",
                            }}
                            variants={shineVariants}
                            animate="animate"
                        >
                            {highlight}
                        </motion.span>
                    )}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="text-lg text-white/60"
                >
                    {subtitle}
                </motion.p>

                {/* Bullets */}
                {bullets && (
                    <motion.ul className="space-y-3">
                        {bullets.map((bullet, i) => (
                            <motion.li
                                key={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="flex items-start gap-3 text-sm text-white/80"
                            >
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-success text-xs">✓</span>
                                {bullet}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}

                {/* Avatares + Rating */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 }}
                    className="mt-9 flex items-center gap-4"
                >
                    <div className="flex -space-x-2.5">
                        {[
                            { initials: "iW", bg: "#1a3a52", color: "#2ba9f7" },
                            { initials: "UT", bg: "#1a3d36", color: "#00d4c8" },
                            { initials: "GG", bg: "#2a1a38", color: "#a78bfa" },
                            { initials: "+", bg: "#1f3020", color: "#4ade80" },
                        ].map((avatar, i) => (
                            <div
                                key={i}
                                className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                                style={{ background: avatar.bg, borderColor: "#080f18", color: avatar.color }}
                            >
                                {avatar.initials}
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-sm text-white/80">
                            <span className="text-accent font-bold">+15 negocios cordobeses</span> ya crecen con Quanty
                        </p>
                        <div className="flex items-center gap-1 mt-0.5">
                            <span style={{ color: "#f59e0b" }}>★★★★★</span>
                            <span className="text-xs text-white/40">promedio de clientes activos</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* COLUMNA 2: Form */}
            {form && (
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="w-full md:w-[420px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-2xl sticky top-24"
                >
                    <motion.div className="flex items-center gap-2 mb-2" variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>
                        <span className="w-2 h-2 rounded-full bg-success/40 animate-pulse" />
                        <p className="text-xs font-semibold text-success uppercase">{form.eyebrow}</p>
                    </motion.div>

                    <motion.h2 variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.75 }} className="text-xl md:text-2xl font-bold text-dark">
                        {form.title}
                    </motion.h2>
                    <motion.p variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }} className="text-sm text-dark/60 mt-1">
                        {form.subtitle}
                    </motion.p>

                    <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-muted mb-1">{form.empresa}</label>
                            <input
                                type="text"
                                name="empresa"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                placeholder={form.empresa}
                                required
                                className="w-full px-4 py-2 border border-dark/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-muted mb-1">{form.contacto}</label>
                            <input
                                type="text"
                                name="contacto"
                                value={contacto}
                                onChange={(e) => setContacto(e.target.value)}
                                placeholder={form.contacto}
                                required
                                className="w-full px-4 py-2 border border-dark/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-muted mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                required
                                className="w-full px-4 py-2 border border-dark/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-muted mb-1">Teléfono</label>
                            <input
                                type="tel"
                                name="numero"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                placeholder="+54 9 XXXX-XXXX"
                                required
                                className="w-full px-4 py-2 border border-dark/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        {form.dropdownOptions && (
                            <div>
                                <label className="block text-sm font-medium text-muted mb-1">{form.dropdownlabel}</label>
                                <select
                                    name="inversion"
                                    value={inversion}
                                    onChange={(e) => setInversion(e.target.value)}
                                    className="w-full px-4 py-2 border border-dark/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    {form.dropdownOptions.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-muted mb-1">Descripción (opcional)</label>
                            <textarea
                                name="descripcion"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                placeholder="Cuéntanos más sobre tu proyecto..."
                                className="w-full px-4 py-2 border border-dark/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                rows={2}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading || enviado}
                            className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {loading ? 'Enviando...' : enviado ? '✓ Enviado!' : form.cta.label}
                        </motion.button>

                        {enviado && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-success text-sm text-center mt-2"
                            >
                                ✓ Gracias, te contactamos pronto.
                            </motion.p>
                        )}

                        <p className="text-xs text-muted text-center">{form.ctasubtitle}</p>
                    </form>
                </motion.div>
            )}
        </div>
        </section >
    );
}
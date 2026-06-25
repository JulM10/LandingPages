'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useAnalytics } from '@/lib/analytics';
import type { PortfolioContactConfig } from '@/types/portfolio.config.types';

export function Contact({
  eyebrow,
  title,
  subtitle,
  formFields,
  submitButton,
}: PortfolioContactConfig) {
  const { trackFormSubmit } = useAnalytics();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [informacion, setInformacion] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  // Escuchar custom event cuando se clickea "Contactarse" desde servicios
  useEffect(() => {
    const handleServiceContact = (event: CustomEvent<string>) => {
      setInformacion(event.detail);
    };

    window.addEventListener('serviceContact', handleServiceContact as EventListener);
    return () => window.removeEventListener('serviceContact', handleServiceContact as EventListener);
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB!);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        trackFormSubmit('contact', { nombre, telefono, email, informacion });
        setEnviado(true);
        setNombre('');
        setTelefono('');
        setEmail('');
        setInformacion('');
        setTimeout(() => setEnviado(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 sm:mb-3">
              {eyebrow}
            </p>
          )}
          <h2
            className="font-black text-2xl sm:text-3xl lg:text-4xl text-dark mb-3 sm:mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[1100px] mx-auto bg-light rounded-2xl p-6 sm:p-8 lg:p-12 border-2 border-gray-200 hover:border-primary transition-colors">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-bold text-dark mb-2">
                {formFields.nombre}
              </label>
              <input
                type="text"
                name="nombre"
                placeholder={formFields.nombre}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Teléfono y Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-dark mb-2">
                  {formFields.telefono}
                </label>
                <input
                  type="tel"
                  name="telefono"
                  placeholder={formFields.telefono}
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark mb-2">
                  {formFields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={formFields.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Información adicional */}
            <div>
              <label className="block text-sm font-bold text-dark mb-2">
                {formFields.informacion}
              </label>
              <textarea
                name="informacion"
                placeholder={formFields.informacion}
                value={informacion}
                onChange={(e) => setInformacion(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                rows={5}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading || enviado}
              className="w-full bg-primary text-white px-6 py-4 rounded-lg font-bold text-base hover:bg-opacity-90 transition shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : enviado ? '✓ Enviado!' : submitButton}
            </button>

            {/* Success Message */}
            {enviado && (
              <p className="text-center text-primary font-semibold text-sm">
                ¡Gracias! Te contactaremos pronto.
              </p>
            )}

            {/* Hidden fields */}
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
            <input type="hidden" name="subject" value="Nueva solicitud de contacto" />
          </form>
        </div>
      </div>
    </section>
  );
}

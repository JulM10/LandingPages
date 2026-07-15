'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useState, FormEvent, useEffect } from 'react';
import { useAnalytics } from '@/lib/analytics'; // 📊 Analytics

export function SaasPricingForm() {
  // 📊 ANALYTICS: Inicializar tracking
  const { trackGAEvent } = useAnalytics();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
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

    // 📊 ANALYTICS: Trackear intento de envío de formulario
    trackGAEvent('pricing_form_submit_attempt', {
      form_type: 'pricing_contact',
      email: email,
      empresa: empresa || 'sin_empresa',
      descripcion: descripcion || 'sin_plan',
      page: 'saas_pricing',
    });

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB!);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        // 📊 ANALYTICS: Trackear envío exitoso
        trackGAEvent('pricing_form_submit_success', {
          form_type: 'pricing_contact',
          email: email,
          empresa: empresa || 'sin_empresa',
          descripcion: descripcion || 'sin_plan',
          page: 'saas_pricing',
        });

        setEnviado(true);
        setNombre('');
        setEmail('');
        setEmpresa('');
        setDescripcion('');
        setTimeout(() => setEnviado(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  return (
    <motion.div
      className="rounded-2xl p-6 sm:p-8 border-2 h-full flex flex-col"
      style={{
        background: 'linear-gradient(135deg, #f4f6f8, rgba(82, 183, 136, 0.12))',
        borderColor: '#52b788',
      }}
      variants={itemVariants}
      whileHover={{ y: -8, boxShadow: '0 0 20px rgba(82, 183, 136, 0.3)' }}
      id="form"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-black text-lg sm:text-xl text-dark mb-2" style={{ color: '#0b1c2d' }}>
          ¿Listo para comenzar?
        </h3>
        <p className="text-xs sm:text-sm" style={{ color: 'rgba(11, 28, 45, 0.7)' }}>
          Contáctanos para una demostración personalizada
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-4 flex-1 flex flex-col">
        {/* Nombre */}
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            autoComplete="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{
              background: 'white',
              borderColor: '#52b788',
              color: '#0b1c2d',
              border: '2px solid',
            }}
            className="w-full px-4 py-3 rounded-xl text-dark placeholder-gray-400 focus:outline-none transition-all text-sm"
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(82, 183, 136, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              background: 'white',
              borderColor: '#52b788',
              color: '#0b1c2d',
              border: '2px solid',
            }}
            className="w-full px-4 py-3 rounded-xl text-dark placeholder-gray-400 focus:outline-none transition-all text-sm"
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(82, 183, 136, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Empresa */}
        <div>
          <input
            type="text"
            name="empresa"
            placeholder="Tu empresa (opcional)"
            autoComplete="off"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            style={{
              background: 'white',
              borderColor: '#52b788',
              color: '#0b1c2d',
              border: '2px solid',
            }}
            className="w-full px-4 py-3 rounded-xl text-dark placeholder-gray-400 focus:outline-none transition-all text-sm"
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(82, 183, 136, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Descripción */}
        <div>
          <textarea
            name="descripcion"
            placeholder="¿Qué plan te interesa? (opcional)"
            value={descripcion}
            autoComplete="off"
            onChange={(e) => setDescripcion(e.target.value)}
            style={{
              background: 'white',
              borderColor: '#52b788',
              color: '#0b1c2d',
              border: '2px solid',
            }}
            className="w-full px-4 py-3 rounded-xl text-dark placeholder-gray-400 focus:outline-none transition-all text-sm resize-none"
            rows={2}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(82, 183, 136, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading || enviado}
          style={{
            background: '#52b788',
            opacity: loading || enviado ? 0.6 : 1,
            cursor: loading || enviado ? 'not-allowed' : 'pointer',
          }}
          className="w-full mt-auto py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base transition-all"
          onMouseEnter={(e) => {
            if (!loading && !enviado) {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(82, 183, 136, 0.5)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {loading ? 'Enviando...' : enviado ? '✓ Enviado!' : 'Solicitar Demo'}
        </button>

        {/* Hidden field */}
        <input type="hidden" name="from_name" value="SaaS Pricing Form" />
        <input type="hidden" name="subject" value="Nueva solicitud de demo" />
      </form>

      {/* Message */}
      {enviado && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: '#52b788',
            borderColor: '#52b788',
            color: 'white',
          }}
          className="mt-4 p-3 rounded-lg border text-xs text-center font-bold"
        >
          ¡Gracias! Te contactaremos pronto.
        </motion.div>
      )}
    </motion.div>
  );
}

'use client';

import { useState } from 'react';
import type { TickerClientesConfig } from '@/types/motion.config.types';

export function Clients({ companies = [] }: TickerClientesConfig) {
  const [isHovered, setIsHovered] = useState(false);

  if (!companies || companies.length === 0) return null;

  return (
    <section
      className="border-b border-white/6 overflow-hidden"
      style={{ background: '#070d15', padding: '28px 0' }}
    >
      <div className="relative">
        {/* Mask gradient para fade in/out */}
        <div
          className="absolute inset-y-0 left-0 right-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #070d15 0%, transparent 10%, transparent 90%, #070d15 100%)',
            zIndex: 10,
          }}
        />

        {/* Ticker container */}
        <div
          className="flex overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Track animado */}
          <style>{`
            @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ticker-track {
              animation: ticker 22s linear infinite;
              animation-play-state: ${isHovered ? 'paused' : 'running'};
            }
          `}</style>

          <div className="ticker-track flex gap-8 w-max">
            {/* Primera vuelta */}
            {companies.map((company, idx) => (
              <div key={`first-${idx}`} className="flex-shrink-0">
                <div
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 transition-all duration-200"
                  style={{
                    borderColor: 'rgba(255,255,255,.08)',
                    background: 'rgba(255,255,255,.03)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(255,255,255,.15)';
                    (e.currentTarget as HTMLElement).style.background =
                      'rgba(255,255,255,.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(255,255,255,.08)';
                    (e.currentTarget as HTMLElement).style.background =
                      'rgba(255,255,255,.03)';
                  }}
                >
                  <span className="font-bold text-sm text-primary">
                    {company.name}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,.2)', fontSize: '12px' }}>·</span>
                  <span style={{ color: 'rgba(255,255,255,.4)', fontSize: '12px' }}>
                    {company.logo}
                  </span>
                </div>
              </div>
            ))}

            {/* Segunda vuelta (para loop infinito) */}
            {companies.map((company, idx) => (
              <div key={`second-${idx}`} className="flex-shrink-0">
                <div
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 transition-all duration-200"
                  style={{
                    borderColor: 'rgba(255,255,255,.08)',
                    background: 'rgba(255,255,255,.03)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(255,255,255,.15)';
                    (e.currentTarget as HTMLElement).style.background =
                      'rgba(255,255,255,.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(255,255,255,.08)';
                    (e.currentTarget as HTMLElement).style.background =
                      'rgba(255,255,255,.03)';
                  }}
                >
                  <span className="font-bold text-sm text-primary">
                    {company.name}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,.2)', fontSize: '12px' }}>·</span>
                  <span style={{ color: 'rgba(255,255,255,.4)', fontSize: '12px' }}>
                    {company.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

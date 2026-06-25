'use client';

import Image from 'next/image';
import type { FooterConfig } from '@/types/saas.config.types';

export function Footer({ nombre, contacts, isologoSrc }: FooterConfig) {
  return (
    <footer
      className="py-6 md:py-10 px-6 border-t border-white/10"
      style={{ background: '#0b1c2d' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-3 text-center md:text-left">
          {isologoSrc && (
            <Image
              src={isologoSrc}
              alt={nombre || 'Logo'}
              width={32}
              height={32}
              className="h-8 w-8 flex-shrink-0"
            />
          )}
          <p className="text-xs md:text-sm text-white/40">
            © {new Date().getFullYear()} {nombre || 'Quanty Ads'}
          </p>
        </div>

        {/* Right: Links */}
        {contacts && contacts.length > 0 && (
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-white/50 hover:text-primary transition"
              >
                {contact.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}

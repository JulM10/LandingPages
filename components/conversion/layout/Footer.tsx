'use client';

import Image from "next/image"
import { useAnalytics } from "@/lib/analytics";
import { FooterConfig } from "@/types/conversion.config.types";

export function Footer({ nombre, contacts, isologoSrc }:FooterConfig) {
  const { trackSocialClick } = useAnalytics();

  const handleContactClick = (label: string, href: string) => {
    const platform = label.toLowerCase() === 'whatsapp' ? 'WhatsApp' : label.toLowerCase() === 'email' ? 'Email' : label;
    trackSocialClick(platform, label, href);
  };

  return (
    <footer className="bg-dark py-10 px-[6%] border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          {isologoSrc && <Image src={isologoSrc} alt={nombre || "Quanty Ads"} className="h-8 w-8" width={500} height={350} />}
          <p className="text-sm text-white/40">© {new Date().getFullYear()} {nombre || "Quanty Ads"}</p>
        </div>
        {contacts && (
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                onClick={() => handleContactClick(contact.label, contact.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-primary transition"
              >
                {contact.label}
              </a>
            ))}
          </div>
        )}
      </div>
          <p className="text-xs sm:text-sm text-white/40">
            Powered by{' '}
            <a
              href="https://maderowebs.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition font-semibold"
            >
              Julio Madero
            </a>
          </p>
    </footer>
  );
}
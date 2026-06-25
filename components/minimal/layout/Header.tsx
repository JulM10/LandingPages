"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import type { HeaderConfig } from "@/types/minimal.config.types";

export function Header({ logoSrc, nombre, links, textButton }:HeaderConfig) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md">
      <div className="flex justify-between items-center py-4 px-[6%]">
        {logoSrc && <img src={logoSrc} alt={nombre ?? "Quanty Ads"} width={120} height={40} />}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center space-x-8">
            {links?.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white hover:text-white/80 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button label={textButton.label} href={textButton.href} />
        </nav>
        <button
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-white/10">
          <ul className="flex flex-col py-4 px-[6%] space-y-4">
            {links?.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-white/80 transition block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

    </header>
  );
}   
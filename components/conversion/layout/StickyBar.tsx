"use client";
import { useEffect, useRef, useState } from "react";

export function StickyBar({ cta }: { cta: { label: string; href: string } }) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el hero se va (no está visible), muestra la barra
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-40 transition-transform duration-300 bg-dark/96 backdrop-blur-sm border-b border-white/10 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 py-3">
        <p className="text-sm text-white font-semibold hidden sm:block">
          ✦ Diagnóstico gratuito · sin compromiso
        </p>
        <a
          href={cta.href}
          className="ml-auto inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}
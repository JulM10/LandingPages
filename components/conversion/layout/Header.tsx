import { HeaderConfig } from "@/types/conversion.config.types";

export function Header({ logoSrc, nombre, textButton }: HeaderConfig) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-6">
        <img src={logoSrc} alt={nombre} className="h-8" />
        <a href={textButton.href}
           className="bg-primary text-white px-4 py-2 text-sm rounded-lg font-semibold hover:bg-primary/90 transition">
          {textButton.label}
        </a>
      </div>
    </header>
  );
}
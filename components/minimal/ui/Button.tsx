type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";   // ← union type
};

export function Button({ label, href, variant = "primary" }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition";
  const styles = variant === "primary"
    ? "bg-primary text-white hover:bg-primary/90"
    : "border border-white/20 text-white/80 hover:border-white/45 hover:text-white hover:bg-white/5";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {label}
    </a>
  );
}
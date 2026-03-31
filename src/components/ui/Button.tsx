import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-sunny-red text-white hover:bg-red-600 shadow-lg hover:shadow-xl animate-pulse-glow",
  secondary:
    "bg-sunny-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-xl",
  outline:
    "bg-white text-sunny-blue border-2 border-sunny-blue hover:bg-sunny-blue hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-[family-name:var(--font-nunito)] font-bold text-lg transition-all duration-300 cursor-pointer";

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

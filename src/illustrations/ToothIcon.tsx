export default function ToothIcon({ className = "w-12 h-12", color = "#1E88E5" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 4C24 4 18 8 16 14C14 20 14 26 16 32C18 38 20 44 22 50C24 56 26 60 28 60C30 60 31 56 32 52C33 56 34 60 36 60C38 60 40 56 42 50C44 44 46 38 48 32C50 26 50 20 48 14C46 8 40 4 32 4Z"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="22" r="2" fill={color} opacity="0.6" />
      <circle cx="38" cy="22" r="2" fill={color} opacity="0.6" />
      <path d="M26 30C28 33 36 33 38 30" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

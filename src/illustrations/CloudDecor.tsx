export default function CloudDecor({ className = "w-32 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="50" rx="50" ry="25" fill="white" opacity="0.7" />
      <ellipse cx="100" cy="45" rx="40" ry="22" fill="white" opacity="0.6" />
      <ellipse cx="80" cy="38" rx="35" ry="20" fill="white" opacity="0.8" />
    </svg>
  );
}

export default function SunRays({ className = "w-96 h-96" }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.12">
        {rays.map((angle) => (
          <line
            key={angle}
            x1="200"
            y1="200"
            x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
            y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
            stroke="#FDD835"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  );
}

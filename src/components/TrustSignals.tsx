"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";

const signals = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FDD835" className="w-8 h-8">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
    ),
    bg: "bg-yellow-50",
    title: "5-Star Rated",
    description: "1,600+ glowing Google reviews from happy families",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#43A047" className="w-8 h-8">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516 11.209 11.209 0 01-7.877-3.08z" clipRule="evenodd" />
      </svg>
    ),
    bg: "bg-green-50",
    title: "Medi-Cal & PPO Accepted",
    description: "We accept Denti-Cal, PPO insurance, and offer affordable care",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1E88E5" className="w-8 h-8">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
      </svg>
    ),
    bg: "bg-blue-50",
    title: "Se Habla Español",
    description: "Bilingual staff to make every family feel welcome and understood",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E53935" className="w-8 h-8">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    bg: "bg-red-50",
    title: "Special Needs Friendly",
    description: "Autism-friendly care with patience and understanding for every child",
  },
];

export default function TrustSignals() {
  return (
    <SectionWrapper id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-nunito)] font-extrabold text-3xl sm:text-4xl text-center text-text-dark mb-4">
          Why Families{" "}
          <span className="text-sunny-blue">Choose Us</span>
        </h2>
        <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
          Trusted by thousands of families across Pomona and Compton for gentle, fun dental care
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, i) => (
            <Card key={i} className="text-center">
              <div className={`w-16 h-16 rounded-2xl ${signal.bg} flex items-center justify-center mx-auto mb-4`}>
                {signal.icon}
              </div>
              <h3 className="font-[family-name:var(--font-nunito)] font-bold text-lg text-text-dark mb-2">
                {signal.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{signal.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

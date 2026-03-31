"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import ToothIcon from "@/illustrations/ToothIcon";
import { services } from "@/data/services";

const colorMap: Record<string, { border: string; tooth: string; bg: string }> = {
  "sunny-blue": { border: "#1E88E5", tooth: "#1E88E5", bg: "bg-blue-50" },
  "sunny-red": { border: "#E53935", tooth: "#E53935", bg: "bg-red-50" },
  "sunny-green": { border: "#43A047", tooth: "#43A047", bg: "bg-green-50" },
  "sunny-orange": { border: "#FB8C00", tooth: "#FB8C00", bg: "bg-orange-50" },
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="py-20 px-4 bg-bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-nunito)] font-extrabold text-3xl sm:text-4xl text-center text-text-dark mb-4">
          Our{" "}
          <span className="text-sunny-green">Services</span>
        </h2>
        <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
          Comprehensive dental care designed especially for kids — from first tooth to braces
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color] || colorMap["sunny-blue"];
            return (
              <Card key={i} borderColor={colors.border} className="group">
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ToothIcon className="w-8 h-8" color={colors.tooth} />
                </div>
                <h3 className="font-[family-name:var(--font-nunito)] font-bold text-lg text-text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

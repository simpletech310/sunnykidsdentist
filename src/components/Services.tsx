"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import ToothIcon from "@/illustrations/ToothIcon";
import { services } from "@/data/services";

const colorMap: Record<string, { border: string; tooth: string }> = {
  "sunny-blue": { border: "#1E88E5", tooth: "#1E88E5" },
  "sunny-red": { border: "#E53935", tooth: "#E53935" },
  "sunny-green": { border: "#43A047", tooth: "#43A047" },
  "sunny-orange": { border: "#FB8C00", tooth: "#FB8C00" },
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
              <Card key={i} borderColor={colors.border}>
                <div className="mb-3">
                  <ToothIcon className="w-10 h-10" color={colors.tooth} />
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

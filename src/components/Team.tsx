"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";

const team = [
  {
    name: "Dr. Jung",
    role: "Pediatric Dentist",
    color: "#1E88E5",
    initials: "DJ",
    bio: "Dedicated to making every child's dental visit a positive, comfortable experience with gentle care and a warm smile.",
  },
  {
    name: "Dr. Park",
    role: "Pediatric Dentist",
    color: "#43A047",
    initials: "DP",
    bio: "Passionate about children's oral health, specializing in creating fun, stress-free appointments for kids of all ages.",
  },
  {
    name: "Our Friendly Staff",
    role: "Dental Team",
    color: "#FB8C00",
    initials: "SK",
    bio: "Our bilingual team is here to make your family feel at home. From check-in to checkout, we've got you covered!",
  },
];

export default function Team() {
  return (
    <SectionWrapper id="team" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[family-name:var(--font-nunito)] font-extrabold text-3xl sm:text-4xl text-center text-text-dark mb-4">
          Meet Our{" "}
          <span className="text-sunny-orange">Team</span>
        </h2>
        <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
          Friendly, experienced professionals who love working with kids
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Card key={i} className="text-center">
              <div
                className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-[family-name:var(--font-nunito)] font-extrabold text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                  boxShadow: `0 8px 24px ${member.color}33`,
                }}
              >
                {member.initials}
              </div>
              <h3 className="font-[family-name:var(--font-nunito)] font-bold text-xl text-text-dark mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

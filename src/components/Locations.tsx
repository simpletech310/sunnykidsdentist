"use client";

import SectionWrapper from "./ui/SectionWrapper";
import { locations } from "@/data/locations";

export default function Locations() {
  return (
    <SectionWrapper id="locations" className="py-20 px-4 bg-bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-nunito)] font-extrabold text-3xl sm:text-4xl text-center text-text-dark mb-4">
          Visit{" "}
          <span className="text-sunny-blue">Our Locations</span>
        </h2>
        <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
          Two convenient locations to serve your family
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Map embed */}
              <div className="h-56 bg-gray-100">
                <iframe
                  title={`Sunny Kids Dental ${loc.name}`}
                  src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-[family-name:var(--font-nunito)] font-bold text-sm"
                    style={{ backgroundColor: i === 0 ? "#1E88E5" : "#43A047" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-nunito)] font-bold text-xl text-text-dark">
                    {loc.name} Office
                  </h3>
                </div>
                <p className="text-text-dark font-medium">{loc.address}</p>
                <p className="text-text-muted mb-3">{loc.city}</p>
                <a
                  href={loc.phoneHref}
                  className="inline-flex items-center gap-2 text-sunny-blue font-[family-name:var(--font-nunito)] font-bold text-lg hover:text-blue-700 transition-colors mb-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {loc.phone}
                </a>

                {/* Hours */}
                <div className="border-t pt-4 mt-2">
                  <h4 className="font-[family-name:var(--font-nunito)] font-bold text-sm text-text-dark mb-2">Office Hours</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    {loc.hours.map((h) => (
                      <div key={h.day} className="contents">
                        <span className="text-text-muted">{h.day}</span>
                        <span className={`text-right ${h.time === "Closed" ? "text-sunny-red" : "text-text-dark"}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

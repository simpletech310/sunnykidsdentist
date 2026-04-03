import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Locations from "@/components/Locations";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WaveDivider from "@/illustrations/WaveDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WaveDivider color="#ffffff" />
        <TrustSignals />
        <WaveDivider color="#FFF8F0" />
        <Services />
        <WaveDivider color="#ffffff" />
        <Team />
        <WaveDivider color="#FFF8F0" />
        <Testimonials />
        <WaveDivider color="#ffffff" />
        <InstagramFeed />
        <WaveDivider color="#FFF8F0" />
        <Locations />
        <WaveDivider color="#1E88E5" />
        <CallToAction />
        <Footer />
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Sunny Kids Dental",
              url: "https://sdk.4everforward.net",
              logo: "https://sdk.4everforward.net/sunnykidsdental.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-909-417-5369",
                contactType: "customer service"
              },
              makesOffer: [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dental Exams & Cleanings" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cavity Treatment & Fillings" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Preventive Care & Sealants" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Dental Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Orthodontic Evaluations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sedation Dentistry" } }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Sunny Kids Dental - Pomona",
              image: "https://sdk.4everforward.net/sunnykidsdental.jpg",
              telephone: "+1-909-417-5369",
              address: {
                "@type": "PostalAddress",
                streetAddress: "819 E Mission Blvd",
                addressLocality: "Pomona",
                addressRegion: "CA",
                postalCode: "91766",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "1600",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              priceRange: "$$",
              url: "https://sdk.4everforward.net",
            },
            {
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Sunny Kids Dental - Compton",
              image: "https://sdk.4everforward.net/sunnykidsdental.jpg",
              telephone: "+1-424-785-6995",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1308 E Alondra Blvd",
                addressLocality: "Compton",
                addressRegion: "CA",
                postalCode: "90222",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "1600",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              priceRange: "$$",
              url: "https://sdk.4everforward.net",
            },
          ]),
        }}
      />
    </>
  );
}

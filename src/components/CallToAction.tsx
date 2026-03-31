"use client";

import SectionWrapper from "./ui/SectionWrapper";
import SparkleIcon from "@/illustrations/SparkleIcon";

export default function CallToAction() {
  return (
    <SectionWrapper
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-sunny-blue via-sunny-blue to-blue-700 relative overflow-hidden"
    >
      {/* Decorative sparkles */}
      <div className="absolute top-10 left-10 animate-twinkle opacity-30">
        <SparkleIcon className="w-8 h-8" color="white" />
      </div>
      <div className="absolute bottom-16 right-16 animate-twinkle delay-1000 opacity-20">
        <SparkleIcon className="w-12 h-12" color="white" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-twinkle delay-500 opacity-25">
        <SparkleIcon className="w-6 h-6" color="white" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-[family-name:var(--font-nunito)] font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
          Ready for a Brighter Smile?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Give us a call to schedule your child&apos;s appointment. Our friendly team is ready to help!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Pomona */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="font-[family-name:var(--font-nunito)] font-bold text-xl text-white mb-1">Pomona</h3>
            <p className="text-blue-100 text-sm mb-4">819 E Mission Blvd</p>
            <a
              href="tel:+19094175369"
              className="inline-flex items-center gap-3 bg-white text-sunny-blue px-8 py-4 rounded-full font-[family-name:var(--font-nunito)] font-extrabold text-xl hover:bg-sunny-yellow hover:text-text-dark transition-all shadow-lg hover:shadow-xl w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              909-417-5369
            </a>
          </div>

          {/* Compton */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="font-[family-name:var(--font-nunito)] font-bold text-xl text-white mb-1">Compton</h3>
            <p className="text-blue-100 text-sm mb-4">1308 E Alondra Blvd</p>
            <a
              href="tel:+14247856995"
              className="inline-flex items-center gap-3 bg-white text-sunny-blue px-8 py-4 rounded-full font-[family-name:var(--font-nunito)] font-extrabold text-xl hover:bg-sunny-yellow hover:text-text-dark transition-all shadow-lg hover:shadow-xl w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              (424) 785-6995
            </a>
          </div>
        </div>

        <p className="text-blue-200 text-sm mt-8">
          Walk-ins welcome! We also accept Medi-Cal (Denti-Cal) and most PPO insurance plans.
        </p>
      </div>
    </SectionWrapper>
  );
}

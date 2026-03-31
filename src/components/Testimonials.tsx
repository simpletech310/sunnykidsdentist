"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import StarRating from "@/illustrations/StarRating";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="reviews" className="py-20 px-4 bg-bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-nunito)] font-extrabold text-3xl sm:text-4xl text-center text-text-dark mb-4">
          What Parents{" "}
          <span className="text-sunny-yellow">Say</span>
        </h2>

        {/* Rating badge */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <div className="bg-white rounded-2xl shadow-md px-6 py-3 flex items-center gap-3">
            <span className="font-[family-name:var(--font-nunito)] font-extrabold text-4xl text-text-dark">5.0</span>
            <div>
              <StarRating count={5} />
              <p className="text-text-muted text-xs mt-0.5">1,600+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonial carousel */}
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFCCBC" className="w-10 h-10 mx-auto mb-4">
                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
              </svg>
              <p className="text-text-dark text-lg md:text-xl leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <StarRating count={testimonials[current].rating} className="justify-center mb-2" />
              <p className="font-[family-name:var(--font-nunito)] font-bold text-text-dark">
                {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? "bg-sunny-yellow scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

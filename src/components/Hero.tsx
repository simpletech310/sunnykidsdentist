"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import SunRays from "@/illustrations/SunRays";
import CloudDecor from "@/illustrations/CloudDecor";
import SparkleIcon from "@/illustrations/SparkleIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg-cream via-white to-bg-cream pt-20">
      {/* Animated sun rays behind logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-spin-slow">
          <SunRays className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]" />
        </div>
      </div>

      {/* Floating clouds */}
      <div className="absolute top-24 left-4 md:left-20 animate-drift opacity-60">
        <CloudDecor className="w-28 h-16 md:w-40 md:h-24" />
      </div>
      <div className="absolute top-40 right-8 md:right-24 animate-drift delay-2000 opacity-50">
        <CloudDecor className="w-24 h-14 md:w-36 md:h-20" />
      </div>
      <div className="absolute bottom-32 left-12 md:left-40 animate-drift delay-3000 opacity-40">
        <CloudDecor className="w-20 h-12 md:w-32 md:h-18" />
      </div>

      {/* Sparkles */}
      <div className="absolute top-32 right-1/4 animate-twinkle delay-500">
        <SparkleIcon className="w-5 h-5 md:w-7 md:h-7" />
      </div>
      <div className="absolute top-1/3 left-16 animate-twinkle delay-1000">
        <SparkleIcon className="w-4 h-4 md:w-6 md:h-6" color="#FB8C00" />
      </div>
      <div className="absolute bottom-1/3 right-12 animate-twinkle delay-1500">
        <SparkleIcon className="w-6 h-6 md:w-8 md:h-8" color="#E53935" />
      </div>
      <div className="absolute bottom-44 left-1/3 animate-twinkle delay-700">
        <SparkleIcon className="w-3 h-3 md:w-5 md:h-5" color="#43A047" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 100, duration: 0.8 }}
          className="mb-6"
        >
          <div className="animate-float inline-block">
            <Image
              src="/sunnykidsdental.jpg"
              alt="Sunny Kids Dental Logo"
              width={180}
              height={180}
              className="mx-auto rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-[family-name:var(--font-nunito)] font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-dark mb-4"
        >
          Where Smiles{" "}
          <span className="bg-gradient-to-r from-sunny-red via-sunny-orange to-sunny-yellow bg-clip-text text-transparent">
            Shine Bright
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl text-text-muted mb-8 max-w-xl mx-auto"
        >
          Pomona &amp; Compton&apos;s favorite kids dentist — 5&#8209;star care your family will love
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button href="#contact" variant="primary">
            Book an Appointment
          </Button>
          <Button href="tel:+19094175369" variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Call Us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-text-muted"
        >
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FDD835" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>
            5.0 Rating
          </span>
          <span>|</span>
          <span>1,600+ Reviews</span>
          <span>|</span>
          <span>Medi-Cal Accepted</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-text-muted/50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  );
}

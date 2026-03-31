"use client";

import Image from "next/image";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const posts = [
  { src: "/instagram/IMG_2501.jpg", alt: "Easter Party at Sunny Kids Dental" },
  { src: "/instagram/IMG_2502.jpg", alt: "Happy kids at the dentist" },
  { src: "/instagram/IMG_2503.jpg", alt: "Sunny Kids Dental office fun" },
  { src: "/instagram/IMG_2505.jpg", alt: "Our team with happy patients" },
  { src: "/instagram/IMG_2506.jpg", alt: "Smiling kids after dental visit" },
  { src: "/instagram/IMG_2507.jpg", alt: "Fun times at Sunny Kids Dental" },
  { src: "/instagram/IMG_2508.jpg", alt: "Sunny Kids Dental team holiday party" },
  { src: "/instagram/IMG_2509.jpg", alt: "Happy families at the office" },
];

export default function InstagramFeed() {
  return (
    <SectionWrapper id="instagram" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-nunito)] font-extrabold text-3xl sm:text-4xl text-center text-text-dark mb-4">
          Follow the Fun{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">@sunnykidsdental</span>
        </h2>
        <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
          See what&apos;s happening at our office — smiles, fun, and happy kids!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/sunnykidsdental"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-2xl overflow-hidden relative group shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex items-center gap-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-sm font-semibold">View Post</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/sunnykidsdental"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-3.5 rounded-full font-[family-name:var(--font-nunito)] font-bold text-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

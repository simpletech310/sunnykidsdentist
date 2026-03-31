"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  borderColor,
}: {
  children: ReactNode;
  className?: string;
  borderColor?: string;
}) {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md p-6 ${className}`}
      style={borderColor ? { borderTop: `4px solid ${borderColor}` } : undefined}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  statDeploy: string;
  statTs: string;
  photoLabel: string;
};

export function PhotoFrame({ statDeploy, statTs, photoLabel: _photoLabel }: Props) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer decorative rings */}
      <motion.div
        className="absolute h-80 w-80 rounded-full border border-[rgba(0,255,180,0.05)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full border border-[rgba(191,0,255,0.03)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Main photo container */}
      <motion.div
        className="relative h-72 w-56 lg:h-80 lg:w-64"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {/* Frame — neon glow border */}
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            border: "1px solid rgba(0,255,180,0.35)",
            boxShadow:
              "0 0 20px rgba(0,255,180,0.12), 0 0 60px rgba(0,255,180,0.05), inset 0 0 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* Zdjęcie */}
          <Image
            src="/images/my-photo.jpg"
            alt="Profile photo"
            fill
            priority
            className="object-cover object-[center_20%]"
            style={{
              filter: "grayscale(25%) brightness(0.85) contrast(1.1) saturate(0.75)",
            }}
          />

          {/* Cyan color grading */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: "rgba(0,180,140,0.15)", mixBlendMode: "color" }}
            aria-hidden="true"
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Hexagon pattern */}
          <div
            className="absolute inset-0 z-20 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%2300ffb4' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 52px",
            }}
            aria-hidden="true"
          />

          {/* Scan line */}
          <motion.div
            className="absolute right-0 left-0 z-30"
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,255,180,0) 10%, rgba(0,255,180,0.75) 50%, rgba(0,255,180,0) 90%, transparent 100%)",
              boxShadow: "0 0 8px rgba(0,255,180,0.6), 0 0 16px rgba(0,255,180,0.2)",
            }}
            animate={{ top: ["-1%", "101%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          />

          {/* Corner TL — cyan */}
          <div
            className="absolute top-0 left-0 z-40 h-5 w-5"
            style={{
              borderTop: "2px solid #00ffb4",
              borderLeft: "2px solid #00ffb4",
            }}
          />
          {/* Corner BR — purple */}
          <div
            className="absolute right-0 bottom-0 z-40 h-5 w-5"
            style={{
              borderBottom: "2px solid #bf00ff",
              borderRight: "2px solid #bf00ff",
            }}
          />
          {/* Corner TR — blue */}
          <div
            className="absolute top-0 right-0 z-40 h-5 w-5"
            style={{ borderTop: "2px solid #00b4ff", borderRight: "2px solid #00b4ff" }}
          />
          {/* Corner BL — blue */}
          <div
            className="absolute bottom-0 left-0 z-40 h-5 w-5"
            style={{ borderBottom: "2px solid #00b4ff", borderLeft: "2px solid #00b4ff" }}
          />
        </div>

        {/* Stat — deployed */}
        <motion.div
          className="absolute top-4 -right-16 z-10 border border-[rgba(0,255,180,0.25)] px-3 py-2 text-left"
          style={{ background: "rgba(5,8,16,0.92)" }}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <span
            className="block text-base font-bold"
            style={{ color: "#00ffb4", letterSpacing: 0 }}
          >
            live
          </span>
          <span
            className="text-[9px] tracking-[1.5px]"
            style={{ color: "rgba(0,255,180,0.5)", textTransform: "uppercase" }}
          >
            {statDeploy}
          </span>
        </motion.div>

        {/* Stat — CI */}
        <motion.div
          className="absolute bottom-8 -left-16 z-10 border border-[rgba(191,0,255,0.25)] px-3 py-2 text-left"
          style={{ background: "rgba(5,8,16,0.92)" }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
        >
          <span
            className="block text-base font-bold"
            style={{ color: "#bf00ff", letterSpacing: 0 }}
          >
            CI
          </span>
          <span
            className="text-[9px] tracking-[1.5px]"
            style={{ color: "rgba(191,0,255,0.5)", textTransform: "uppercase" }}
          >
            {statTs}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

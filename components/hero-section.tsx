"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pb-40 overflow-hidden">

      {/* Ghost watermark lightning bolt */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[400px] opacity-[0.03] select-none">⚡</span>
      </div>

      {/* Gold radial glow behind logo */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 40px rgba(245,168,0,0.15)",
            "0 0 80px rgba(245,168,0,0.35)",
            "0 0 40px rgba(245,168,0,0.15)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8 z-10"
      >
        <Image
          src="/images/logo-emedia.jpeg"
          alt="EmeDiaClub Logo"
          width={160}
          height={160}
          className="rounded-2xl"
          priority
        />

        {/* Gold pulse ripple */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
        />
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-center z-10 mb-4"
      >
        <h1 className="font-tagline font-extrabold text-5xl md:text-7xl text-foreground leading-tight">
          Business
        </h1>
        <h1 className="font-tagline font-extrabold text-5xl md:text-7xl text-foreground leading-tight">
          <span className="relative inline-block mr-4">
            <span>boring</span>
            {/* Gold strikethrough */}
            <span className="absolute left-[-8px] right-[-8px] top-1/2 h-[5px] bg-primary -rotate-3 rounded-full" />
          </span>
          nahi hota!
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="text-muted-foreground text-lg md:text-xl text-center max-w-xl z-10 mb-10"
      >
        Startup memes. Founder humor. News — but actually entertaining.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 z-10 mb-12"
      >
        <motion.button
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 24px rgba(245,168,0,0.5)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-primary text-black font-bold px-8 py-4 rounded-full text-base cursor-pointer"
        >
          Join the Club
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.04,
            backgroundColor: "rgba(245,168,0,0.1)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-full text-base cursor-pointer"
        >
          Read the Memes
        </motion.button>
      </motion.div>

      {/* Floating dot 1 */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[40%] w-3 h-3 rounded-full bg-primary opacity-60 z-10"
      />

      {/* Floating dot 2 */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute right-[20%] top-[35%] w-2 h-2 rounded-full bg-primary opacity-40 z-10"
      />

      {/* Floating dot 3 */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute left-[30%] bottom-[30%] w-2 h-2 rounded-full bg-primary opacity-30 z-10"
      />

      {/* Bouncing scroll arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-36 text-primary text-2xl z-10 select-none"
      >
        ↓
      </motion.div>

    </section>
  )
}
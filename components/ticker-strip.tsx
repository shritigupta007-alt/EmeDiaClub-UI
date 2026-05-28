"use client"

import { motion } from "framer-motion"

const tickerItems = [
  "Shark Tank India reject raises ₹50Cr 🔥",
  "Founder sleeps 4 hours sends 47 emails",
  "Series A meme > Series A deck",
  "Pivot incoming 👀",
  "Bootstrapped and boujee",
  "Your startup idea but funded",
  "Breaking: Founder discovers work-life balance is a myth",
]

export function TickerStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full h-12 bg-card overflow-hidden"
    >
      <div className="animate-marquee flex items-center h-full whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="text-primary mx-4">◆</span>
            <span className="font-mono text-sm uppercase tracking-wider text-primary">
              {item}
            </span>
          </span>
        ))}
      </div>
    </motion.div>
  )
}

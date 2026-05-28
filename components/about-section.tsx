"use client"

import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: "12K+", label: "Memes Posted" },
  { value: "₹500Cr+", label: "Funding Covered" },
  { value: "8K+", label: "Newsletter Subscribers" },
]

export function AboutSection(){
const ref = useScrollReveal() 
  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-primary font-mono text-sm uppercase tracking-widest mb-6"
        >
          [ ABOUT ]
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Text content */}
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-tagline font-extrabold text-3xl md:text-5xl text-foreground mb-6"
            >
              We make startup culture actually fun.
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {"EmeDiaClub is India's most entertaining startup media platform. We cover funding rounds, founder drama, startup memes, and job opportunities — all with a desi twist."}
            </motion.p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-card rounded-xl p-6 border border-border text-center cursor-pointer"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2 break-all">
                  {stat.value}
                </p>
                <p className="text-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
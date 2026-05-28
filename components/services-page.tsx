"use client"

import { motion } from "framer-motion"
import { FileText, Smile, Mail } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    icon: FileText,
    title: "Sponsored Content",
    description: "We write your story the way the internet actually reads it.",
  },
  {
    icon: Smile,
    title: "Meme Marketing",
    description: "Turn your brand into a meme. The good kind.",
  },
  {
    icon: Mail,
    title: "Newsletter Feature",
    description: "Get in front of 8,000+ founders in one send.",
  },
]

export function ServicesPage() {
  const ref= useScrollReveal()
  return (
    <section ref={ref} className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4"
        >
          <span className="font-mono text-sm uppercase tracking-wider text-primary">
            [ SERVICES ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-tagline font-extrabold text-3xl md:text-4xl text-foreground mb-2"
        >
          We help startups get seen.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-12"
        >
          Content. Distribution. Memes. All of it.
        </motion.p>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-[1.03] transition-transform">
                  Get Started →
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center"
        >
          <h3 className="font-tagline font-extrabold text-2xl md:text-3xl text-foreground mb-6">
            {"Want to work with us? Let's talk."}
          </h3>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,168,0,0.4)] transition-all duration-200 mb-4">
            Contact Us →
          </button>
          <p className="font-mono text-primary">hello@emediaclub.com</p>
        </motion.div>
      </div>
    </section>
  )
}

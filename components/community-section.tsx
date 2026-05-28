"use client"

import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const socialPlatforms = [
  {
    name: "Twitter/X",
    handle: "@emediaclub",
    followers: "45K",
    icon: Twitter,
    url: "https://twitter.com/emediaclub",
  },
  {
    name: "Instagram",
    handle: "@emediaclub",
    followers: "120K",
    icon: Instagram,
    url: "https://instagram.com/emediaclub",
  },
  {
    name: "LinkedIn",
    handle: "EmeDiaClub",
    followers: "85K",
    icon: Linkedin,
    url: "https://linkedin.com/company/emediaclub",
  },
  {
    name: "YouTube",
    handle: "EmeDiaClub",
    followers: "25K",
    icon: Youtube,
    url: "https://youtube.com/@emediaclub",
  },
]

export function CommunitySection() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="font-mono text-sm uppercase tracking-wider text-primary">
            [ COMMUNITY ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-tagline font-extrabold text-3xl md:text-5xl text-foreground mb-4"
        >
          Join 10,000+ founders, hustlers, and meme lords.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-12"
        >
          Follow us. Screenshot us. Share us.
        </motion.p>

        {/* Social cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 group"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-3xl font-bold text-primary mb-1">{platform.followers}</p>
                <p className="text-foreground font-medium mb-4">{platform.name}</p>
                <button className="w-full py-2 border border-primary text-primary rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                  Follow →
                </button>
              </motion.a>
            )
          })}
        </div>

        {/* Social handles */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="font-mono text-sm">{platform.handle}</span>
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

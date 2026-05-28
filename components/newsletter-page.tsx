"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const pastIssues = [
  {
    title: "The ₹500Cr Pivot That Worked",
    date: "May 23, 2026",
    snippet: "How a food delivery startup became India's largest EV charging network...",
  },
  {
    title: "Founders Who Left Big Tech (And Regret It?)",
    date: "May 16, 2026",
    snippet: "We interviewed 12 founders who quit FAANG. Here's what they really think...",
  },
  {
    title: "The Shark Tank Effect Is Real",
    date: "May 9, 2026",
    snippet: "Data shows pitches on national TV increase sales by 847% on average...",
  },
]

const stats = [
  { value: "8K+", label: "Subscribers" },
  { value: "47%", label: "Open Rate" },
  { value: "Every Thursday", label: "Delivery" },
]

export function NewsletterPage() {
  const ref = useScrollReveal()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription
    console.log("Subscribing:", email)
    setEmail("")
  }

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4 text-center"
        >
          <span className="font-mono text-sm uppercase tracking-wider text-primary">
            [ THE BRIEF ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-tagline font-extrabold text-3xl md:text-5xl text-foreground mb-4 text-center text-balance"
        >
          Get the freshest startup chaos in your inbox.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-center mb-10"
        >
          Weekly. No fluff. Just memes, news, and ₹ drama.
        </motion.p>

        {/* Email form */}
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 h-[52px] px-6 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="h-[52px] px-8 bg-primary text-primary-foreground rounded-full font-medium hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,168,0,0.4)] transition-all duration-200"
          >
            Subscribe →
          </button>
        </motion.form>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full"
            >
              <span className="text-primary font-bold">{stat.value}</span>
              <span className="text-muted-foreground ml-2 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Past issues */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-6">
            Past Issues
          </h3>
          <div className="space-y-4">
            {pastIssues.map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 cursor-pointer group"
              >
                <p className="text-muted-foreground text-xs mb-2">{issue.date}</p>
                <h4 className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {issue.title}
                </h4>
                <p className="text-muted-foreground text-sm">{issue.snippet}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground text-xs mt-12"
        >
          No spam. Unsubscribe anytime. Powered by Beehiiv.
        </motion.p>
      </div>
    </section>
  )
}

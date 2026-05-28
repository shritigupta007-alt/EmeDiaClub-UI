"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const categories = ["All", "Remote", "Bangalore", "Mumbai", "Delhi", "Engineering", "Design", "Marketing"]

const jobs = [
  {
    id: 1,
    company: "Zepto",
    initials: "ZP",
    title: "Senior Frontend Engineer",
    tags: ["Remote", "Full-time", "Engineering"],
    salary: "₹35-50 LPA",
    posted: "2 days ago",
  },
  {
    id: 2,
    company: "CRED",
    initials: "CR",
    title: "Product Designer",
    tags: ["Bangalore", "Full-time", "Design"],
    salary: "₹25-40 LPA",
    posted: "1 day ago",
  },
  {
    id: 3,
    company: "Razorpay",
    initials: "RP",
    title: "Growth Marketing Lead",
    tags: ["Mumbai", "Full-time", "Marketing"],
    salary: "₹30-45 LPA",
    posted: "3 days ago",
  },
  {
    id: 4,
    company: "Meesho",
    initials: "MS",
    title: "Backend Engineer (Golang)",
    tags: ["Remote", "Full-time", "Engineering"],
    salary: "₹40-60 LPA",
    posted: "Today",
  },
]

export function JobsPage() {
  const ref = useScrollReveal() 
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4"
        >
          <span className="font-mono text-sm uppercase tracking-wider text-primary">
            [ JOBS ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-tagline font-extrabold text-3xl md:text-4xl text-foreground mb-2"
        >
          Startup Jobs for Real Ones.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-8"
        >
          No MNC nonsense. Remote-first. Updated daily.
        </motion.p>

        {/* Filter pills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Jobs grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  {job.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-muted-foreground text-sm mb-1">{job.company}</p>
                  <h3 className="text-foreground font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-card border border-border rounded-full text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-success font-semibold">{job.salary}</p>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-[1.03] transition-transform">
                      Apply Now →
                    </button>
                  </div>
                  <p className="text-muted-foreground text-xs mt-3 text-right">{job.posted}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

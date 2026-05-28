"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const categories = ["All", "Funding", "IPO", "Layoffs", "Product Launches", "Acquisitions"]

const featuredNews = {
  tag: "BREAKING",
  title: "Zomato acquires Paytm's movie ticketing business in ₹1,500 Cr deal",
  excerpt: "The food delivery giant continues its entertainment push with this strategic acquisition, marking one of the biggest deals in India's startup ecosystem this quarter.",
  author: "Rahul Sharma",
  date: "May 27, 2026",
}

const sideNews = [
  {
    tag: "FUNDING",
    title: "D2C brand raises ₹200Cr Series C from Tiger Global",
    date: "May 26, 2026",
  },
  {
    tag: "LAYOFFS",
    title: "EdTech startup lets go of 300 employees amid restructuring",
    date: "May 25, 2026",
  },
  {
    tag: "IPO",
    title: "PharmEasy files draft papers for ₹6,250 Cr IPO",
    date: "May 24, 2026",
  },
]

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="font-mono text-sm uppercase tracking-wider text-primary">
            [ LATEST NEWS ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-tagline font-extrabold text-3xl md:text-4xl text-foreground mb-10"
        >
          Startup News. But Make It Entertaining.
        </motion.h2>

        {/* News grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">

          {/* Featured card */}
          <motion.article
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 group cursor-pointer"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-primary/30"
                  viewBox="0 0 100 120"
                  fill="currentColor"
                >
                  <path d="M60 0L20 50h25L30 120l50-60H55L60 0z" />
                </svg>
              </div>
              {/* Breaking tag pulse */}
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4"
              >
                <span className="inline-block px-2 py-1 bg-destructive text-white text-xs font-mono uppercase rounded">
                  {featuredNews.tag}
                </span>
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {featuredNews.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                  RS
                </div>
                <div>
                  <p className="text-sm text-foreground">{featuredNews.author}</p>
                  <p className="text-xs text-muted-foreground">{featuredNews.date}</p>
                </div>
              </div>
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block mt-4 text-primary text-sm font-medium hover:underline"
              >
                Read More →
              </motion.a>
            </div>
          </motion.article>

          {/* Side news stack */}
          <div className="flex flex-col gap-4">
            {sideNews.map((news, index) => (
              <motion.article
                key={index}
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, borderColor: "rgba(245,168,0,1)" }}
                className="flex gap-4 bg-card rounded-xl p-4 border border-border transition-all duration-200 cursor-pointer group"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary/30"
                    viewBox="0 0 100 120"
                    fill="currentColor"
                  >
                    <path d="M60 0L20 50h25L30 120l50-60H55L60 0z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span
                      className={`inline-block px-2 py-0.5 text-xs font-mono uppercase rounded mb-2 ${
                        news.tag === "FUNDING"
                          ? "bg-green-500/20 text-green-400"
                          : news.tag === "LAYOFFS"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {news.tag}
                    </span>
                    <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{news.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Filter tags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-black font-bold"
                  : "border border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
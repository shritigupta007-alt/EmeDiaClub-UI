"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ThumbsUp } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const categories = ["All", "Funding", "Founder Life", "Product", "Hiring", "Shark Tank"]

const memes = [
  {
    id: 1,
    caption: "When the investor asks 'What's your exit strategy?' and you haven't even figured out your entry",
    tags: ["#fundinglife", "#startups"],
    upvotes: 2847,
  },
  {
    id: 2,
    caption: "POV: You're a founder explaining your 47th pivot to your parents",
    tags: ["#founderlife", "#pivot"],
    upvotes: 1923,
  },
  {
    id: 3,
    caption: "Product team: 'It'll take 3 sprints' — Founder: 'Cool, so by Friday?'",
    tags: ["#productmemes", "#startuplife"],
    upvotes: 3201,
  },
  {
    id: 4,
    caption: "Shark Tank India judges after rejecting a ₹500Cr idea for ₹2L equity",
    tags: ["#sharktank", "#india"],
    upvotes: 4521,
  },
  {
    id: 5,
    caption: "Hiring senior devs be like: '10 years of experience in a 5 year old technology'",
    tags: ["#hiring", "#tech"],
    upvotes: 2156,
  },
  {
    id: 6,
    caption: "Startup culture: Free snacks but no salary this month",
    tags: ["#startuplife", "#culture"],
    upvotes: 3678,
  },
]

export function MemesPage() {
  const ref = useScrollReveal() 
  const [activeCategory, setActiveCategory] = useState("All")
  const [upvotedMemes, setUpvotedMemes] = useState<number[]>([])

  const handleUpvote = (memeId: number) => {
    setUpvotedMemes((prev) =>
      prev.includes(memeId) ? prev.filter((id) => id !== memeId) : [...prev, memeId]
    )
  }

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
            [ MEMES ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-tagline font-extrabold text-3xl md:text-4xl text-foreground mb-4"
        >
          {"The Internet's Favorite Startup Memes."}
        </motion.h2>

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

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {memes.map((meme, index) => (
            <motion.div
              key={meme.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="break-inside-avoid bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1"
            >
              {/* Shimmer placeholder */}
              <div
                className="w-full bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden"
                style={{ height: `${180 + (index % 3) * 60}px` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary/30" viewBox="0 0 100 120" fill="currentColor">
                    <path d="M60 0L20 50h25L30 120l50-60H55L60 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <p className="text-foreground text-sm mb-3">{meme.caption}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {meme.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleUpvote(meme.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    upvotedMemes.includes(meme.id)
                      ? "bg-primary text-primary-foreground"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  {meme.upvotes + (upvotedMemes.includes(meme.id) ? 1 : 0)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all duration-200">
            Load More Memes →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

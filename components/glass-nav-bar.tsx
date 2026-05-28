"use client"

import { Home, Smile, Briefcase, Zap, Mail } from "lucide-react"
import { motion } from "framer-motion"

interface GlassNavBarProps {
  activePage: string
  onNavigate: (page: string) => void
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "memes", icon: Smile, label: "Memes" },
  { id: "jobs", icon: Briefcase, label: "Jobs" },
  { id: "services", icon: Zap, label: "Services" },
  { id: "newsletter", icon: Mail, label: "Newsletter" },
]

export function GlassNavBar({ activePage, onNavigate }: GlassNavBarProps) {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 glass rounded-3xl px-6 py-3 md:px-8 md:py-4"
    >
      <div className="flex items-center gap-4 md:gap-8">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 group relative"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Icon
                  className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </motion.div>
              <span
                className={`text-[10px] font-mono uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}

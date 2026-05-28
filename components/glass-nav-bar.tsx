"use client"

import { Home, Smile, Briefcase, Zap, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO TEXT */}
        <button
          onClick={() => onNavigate("home")}
          className="font-mono text-sm font-bold text-primary tracking-widest uppercase"
        >
          EMe<span className="text-white">Dia</span>Club
        </button>

        {/* NAV LINKS */}
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs
                            font-mono uppercase tracking-wider transition-all duration-200
                            ${isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate("newsletter")}
          className="bg-primary text-black text-xs font-bold px-4 py-2
                     rounded-full uppercase tracking-wider hidden md:block"
        >
          Subscribe 🔥
        </motion.button>
      </div>
    </motion.nav>
  )
}
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Home, Laugh, Newspaper, Briefcase, Zap, Mail, Users, Phone, X, Menu, ChevronRight } from "lucide-react"

interface HamburgerSidebarProps {
  activePage: string
  onNavigate: (page: string) => void
}

const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "memes", label: "Memes", icon: Laugh },
  { id: "news", label: "News", icon: Newspaper },
  { id: "jobs", label: "Jobs Board", icon: Briefcase },
  { id: "services", label: "Our Services", icon: Zap },
  { id: "newsletter", label: "Newsletter", icon: Mail },
  { id: "about", label: "About Us", icon: Users },
  { id: "contact", label: "Contact Us", icon: Phone },
]

const socialLinks = [
  { name: "Twitter/X", url: "https://twitter.com/emediaclub" },
  { name: "Instagram", url: "https://instagram.com/emediaclub" },
  { name: "LinkedIn", url: "https://linkedin.com/company/emediaclub" },
  { name: "YouTube", url: "https://youtube.com/@emediaclub" },
]

export function HamburgerSidebar({ activePage, onNavigate }: HamburgerSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (page: string) => {
    if (page === "news") {
      onNavigate("home")
    } else if (page === "about") {
      onNavigate("home")
    } else if (page === "contact") {
      onNavigate("home")
    } else {
      onNavigate(page)
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,168,0,0.3)] group"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(16px)",
        }}
        aria-label="Open menu"
      >
        <Menu className="h-[18px] w-[18px] text-white transition-colors duration-300 group-hover:text-gold" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 z-50 h-screen w-[300px] max-w-[85vw] flex flex-col"
            style={{
              background: "rgba(13,13,13,0.95)",
              backdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-white transition-colors duration-300 hover:text-gold"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Logo */}
            <div className="flex justify-center pt-8 pb-4">
              <Image
                src="/images/logo-emedia.jpeg"
                alt="EmeDiaClub"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>

            {/* Tagline */}
            <p className="text-center text-[13px] font-display font-extrabold text-gold px-4">
              Business <span className="relative inline-block">
                <span className="relative z-10">boring</span>
                <span 
                  className="absolute left-0 top-1/2 w-full h-[2px] bg-gold -rotate-12 z-20"
                  style={{ transform: "translateY(-50%) rotate(-12deg)" }}
                />
              </span> nahi hota!
            </p>

            {/* Gold Divider */}
            <div className="mx-6 my-4 h-px bg-gold/30" />

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activePage === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavigate(link.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                      isActive 
                        ? "bg-gold/10 text-gold" 
                        : "text-white hover:bg-gold/[0.08] hover:text-gold"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? "text-gold" : "text-gold group-hover:text-gold"}`} />
                    <span className="flex-1 text-left text-[15px] font-sans">{link.label}</span>
                    <ChevronRight className={`h-4 w-4 transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-muted group-hover:text-gold"
                    }`} />
                  </button>
                )
              })}
            </nav>

            {/* Gold Divider */}
            <div className="mx-6 my-4 h-px bg-gold/30" />

            {/* About Us Section */}
            <div className="px-6">
              <span className="text-[10px] font-mono text-gold tracking-wider">[ ABOUT US ]</span>
              <p className="mt-2 text-[13px] text-muted leading-relaxed">
                EmeDiaClub is India&apos;s most entertaining startup media platform. Memes. News. Jobs. All with a desi twist.
              </p>
            </div>

            {/* Gold Divider */}
            <div className="mx-6 my-4 h-px bg-gold/30" />

            {/* Socials */}
            <div className="flex justify-center gap-5 px-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-gold"
                  aria-label={social.name}
                >
                  {social.name === "Twitter/X" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.name === "Instagram" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.name === "LinkedIn" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.name === "YouTube" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Handle */}
            <p className="text-center text-[11px] font-mono text-gold mt-3">@emediaclub</p>

            {/* Copyright */}
            <p className="text-center text-[11px] text-muted pb-5 pt-4">
              &copy; 2025 EmeDiaClub
            </p>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

"use client"

import { AnimatePresence, motion } from "framer-motion"
import { GlassNavBar } from "@/components/glass-nav-bar"
import { HeroSection } from "@/components/hero-section"
import { TickerStrip } from "@/components/ticker-strip"
import { NewsSection } from "@/components/news-section"
import { CommunitySection } from "@/components/community-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { MemesPage } from "@/components/memes-page"
import { JobsPage } from "@/components/jobs-page"
import { ServicesPage } from "@/components/services-page"
import { NewsletterPage } from "@/components/newsletter-page"
import { HamburgerSidebar } from "@/components/hamburger-sidebar"
import { useState, useEffect } from "react"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function HomePage() {
  const [activePage, setActivePage] = useState("home")
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" })
  }, [activePage])

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <HeroSection />
            <TickerStrip />
            <NewsSection />
            <CommunitySection />
            <AboutSection />
            <Footer />
          </motion.div>
        )
      case "memes":
        return (
          <motion.div
            key="memes"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <MemesPage />
          </motion.div>
        )
      case "jobs":
        return (
          <motion.div
            key="jobs"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <JobsPage />
          </motion.div>
        )
      case "services":
        return (
          <motion.div
            key="services"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ServicesPage />
          </motion.div>
        )
      case "newsletter":
        return (
          <motion.div
            key="newsletter"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <NewsletterPage />
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-16 pb-8">
      <HamburgerSidebar activePage={activePage} onNavigate={setActivePage} />
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      <GlassNavBar activePage={activePage} onNavigate={setActivePage} />
    </main>
  )
}

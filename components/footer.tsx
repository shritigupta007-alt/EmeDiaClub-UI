"use client"

import Image from "next/image"
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  content: [
    { label: "Memes", href: "#memes" },
    { label: "News", href: "#news" },
    { label: "Newsletter", href: "#newsletter" },
    { label: "Services", href: "#services" },
  ],
  community: [
    { label: "Twitter/X (@emediaclub)", href: "https://twitter.com/emediaclub" },
    { label: "Instagram (@emediaclub)", href: "https://instagram.com/emediaclub" },
    { label: "LinkedIn (EmeDiaClub)", href: "https://linkedin.com/company/emediaclub" },
    { label: "YouTube (EmeDiaClub)", href: "https://youtube.com/@emediaclub" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Disclaimer", href: "#disclaimer" },
  ],
}

const socialIcons = [
  { icon: Twitter, href: "https://twitter.com/emediaclub" },
  { icon: Instagram, href: "https://instagram.com/emediaclub" },
  { icon: Linkedin, href: "https://linkedin.com/company/emediaclub" },
  { icon: Youtube, href: "https://youtube.com/@emediaclub" },
]

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] pt-16 pb-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/images/logo-emedia.jpeg"
            alt="EmeDiaClub Logo"
            width={100}
            height={100}
            className="rounded-xl mb-4"
          />
          <p className="font-tagline font-extrabold text-xl text-primary">
            Business <span className="strikethrough-gold">boring</span> nahi hota!
          </p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-primary mb-4">Content</h4>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-primary mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E1E] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs text-center md:text-left">
              © 2025 EmeDiaClub. All rights reserved. Built with ⚡ in India.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

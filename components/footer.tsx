'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'GitHub', icon: Github, url: 'https://github.com' },
    { label: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { label: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { label: 'Email', icon: Mail, url: 'mailto:hello@example.com' },
  ]

  return (
    <footer className="border-t border-border bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent mb-2">
              Ashish Khadka
            </h3>
            <p className="text-foreground/60 text-sm">ML Engineer & Backend Developer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-foreground/10 rounded-lg transition-colors text-foreground/60 hover:text-indigo-400"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-sm">
              &copy; {currentYear} Ashish Khadka. All rights reserved.
            </p>
            <p className="text-foreground/50 text-sm">
              Built with Next.js, Framer Motion & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

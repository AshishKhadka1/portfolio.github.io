'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { navItems } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const sectionId = href.slice(1)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold font-heading bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
            AK
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === item.href.slice(1)
                    ? 'text-indigo-400'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-foreground/10 rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-slate-600" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-foreground/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? 'text-indigo-400 bg-indigo-500/10'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const roles = ['ML Engineer', 'Backend Developer', 'Full Stack Builder', 'AI Enthusiast']

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const currentRole = roles[roleIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedText !== currentRole) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        setTypingSpeed(100)
      }, typingSpeed)
    } else if (isDeleting && displayedText !== '') {
      // Deleting backwards
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
        setTypingSpeed(50)
      }, typingSpeed)
    } else if (displayedText === currentRole) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (displayedText === '') {
      // Move to next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, typingSpeed, currentRole])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6">
          <span className="block text-white mb-2">Hi, I&apos;m Ashish Khadka</span>
          <span className="h-20 inline-block">
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          I build intelligent systems and scalable backend infrastructure. Specializing in machine learning, cloud architecture,
          and full-stack development to solve complex problems.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-foreground/10 hover:bg-foreground/20 text-foreground font-medium rounded-lg transition-all duration-300 border border-foreground/20"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={24} className="text-foreground/50" />
      </motion.div>
    </section>
  )
}

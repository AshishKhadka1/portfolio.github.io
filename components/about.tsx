'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Zap } from 'lucide-react'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const highlights = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Deep expertise in building and deploying ML models in production environments.',
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Crafting robust, scalable APIs and microservices with Python and modern frameworks.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing systems for speed, efficiency, and reliability at scale.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I&apos;m a passionate engineer with 5+ years of experience in machine learning and backend development. I love
                building systems that combine cutting-edge AI with robust infrastructure to create meaningful impact.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey started with a curiosity about how things work—from neural networks to distributed systems. Today,
                I focus on bridging the gap between research and production, ensuring ML models not only perform well but scale
                reliably.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source, and mentoring junior
                developers.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-background border border-border rounded-xl hover:border-indigo-500/50 transition-colors duration-300"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                        <p className="text-foreground/70 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

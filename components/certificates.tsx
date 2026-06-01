'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { certificates } from '@/lib/constants'

export function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">Certifications</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group relative p-6 bg-background border border-border rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400 flex-shrink-0 mt-1">
                        <Award size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-indigo-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-foreground/60 mb-2">{cert.issuer}</p>
                        <p className="text-xs text-foreground/50">{cert.date}</p>
                      </div>
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-foreground/10 rounded-lg transition-colors flex-shrink-0"
                      >
                        <ExternalLink size={20} className="text-indigo-400" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

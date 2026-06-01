'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/constants'

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={categoryVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={categoryVariants}
                className="group p-8 bg-background border border-border rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 10px 25px rgba(99, 102, 241, 0.2)',
                      }}
                      className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

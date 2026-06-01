'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/constants'
import { ProjectModal } from './project-modal'
import type { Project } from '@/lib/types'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('all')

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

  // Get unique tags for filtering
  const allTags = ['all', ...new Set(projects.flatMap((p) => p.tags))]

  // Filter projects
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">Featured Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" />
          </motion.div>

          {/* Filter Tags */}
          <motion.div variants={itemVariants} className="mb-12 flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  filter === tag
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                    : 'bg-foreground/10 text-foreground/70 hover:bg-foreground/20'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative overflow-hidden rounded-xl border border-border bg-background p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-indigo-400 text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Project image placeholder */}
                  <div className="w-full h-40 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg mb-4 flex items-center justify-center border border-indigo-500/20">
                    <span className="text-foreground/30 text-center px-4 text-sm">{project.title}</span>
                  </div>

                  <h3 className="text-xl font-semibold font-heading mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-foreground/10 text-foreground/60 rounded-md">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <p className="text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    View Details →
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-foreground/60 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

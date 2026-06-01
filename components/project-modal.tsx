'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right p-2 hover:bg-foreground/10 rounded-lg transition-colors z-10 mb-4 mr-4"
          >
            <X size={24} />
          </button>

          {/* Project Image */}
          {project.image && (
            <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-foreground/5 flex items-center justify-center text-foreground/40">
                {project.title}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold font-heading mb-4">{project.title}</h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{project.longDescription}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-foreground/10 rounded-full text-foreground/70 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.github || project.link) && (
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                    View Project
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

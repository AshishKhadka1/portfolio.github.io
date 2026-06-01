'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setIsLoading(false)

      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const socialLinks = [
    { label: 'GitHub', icon: Github, url: 'https://github.com' },
    { label: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { label: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { label: 'Email', icon: Mail, url: 'mailto:hello@example.com' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">Let&apos;s Connect</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" />
            <p className="mt-4 text-lg text-foreground/70">
              Have a project in mind or just want to chat? I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    'Message Sent! ✓'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect on Social</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 bg-background border border-border rounded-lg hover:border-indigo-500/50 transition-all duration-300 flex items-center gap-3 hover:shadow-lg hover:shadow-indigo-500/10"
                      >
                        <Icon className="text-indigo-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                        <span className="text-sm font-medium group-hover:text-indigo-400 transition-colors">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 bg-background border border-indigo-500/30 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Quick Contact</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  You can also reach out directly via email at{' '}
                  <a href="mailto:hello@example.com" className="text-indigo-400 hover:underline">
                    hello@example.com
                  </a>
                </p>
                <p className="text-foreground/70 text-sm">
                  I typically respond to inquiries within 24 hours. Looking forward to collaborating!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

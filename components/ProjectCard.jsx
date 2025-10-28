'use client'

import { motion } from 'framer-motion'

export default function ProjectCard({ title, desc, tech, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative p-8 bg-dark-secondary rounded-xl border border-gray-800 hover:border-accent-cyan/50 transition-all duration-300 overflow-hidden group"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-cyan transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">{desc}</p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-dark-tertiary border border-accent-purple/30 rounded-full text-accent-cyan"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-accent-cyan/5 rounded-bl-full pointer-events-none" />
    </motion.div>
  )
}


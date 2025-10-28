'use client'

import { motion } from 'framer-motion'

export default function StepCard({ step, IconComponent, title, desc, index, iconColor = "text-accent-cyan" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-12 pb-12 border-l-2 border-accent-purple/30 last:pb-0"
    >
      {/* Step number with hexagon */}
      <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-accent-purple drop-shadow-[0_0_8px_rgba(162,70,255,0.6)]">
          <motion.path
            d="M12 2L20 7L20 17L12 22L4 17L4 7L12 2Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          />
        </svg>
        <span className="absolute text-black font-bold text-lg">{step}</span>
      </div>
      
      {/* Content */}
      <div className="pt-2">
        {/* Icon */}
        {IconComponent && (
          <div className="mb-3 inline-block">
            <div className={`relative p-2 rounded-lg border border-accent-cyan/30 bg-dark/60 hover:shadow-[0_0_12px_rgba(45,232,181,.3)] transition-shadow duration-300`}>
              <IconComponent className={`w-8 h-8 ${iconColor} drop-shadow-[0_0_6px_currentColor]`} />
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
      
      {/* Connecting line glow with pulse */}
      <motion.div
        className="absolute left-0 top-12 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple/50 to-transparent pointer-events-none"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        style={{ transformOrigin: 'top' }}
      />
    </motion.div>
  )
}


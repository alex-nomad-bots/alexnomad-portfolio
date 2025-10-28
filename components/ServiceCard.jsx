'use client'

import { motion } from 'framer-motion'

export default function ServiceCard({ IconComponent, title, desc, index, iconColor = "text-accent-cyan" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-8 bg-dark-secondary rounded-xl border border-gray-800 hover:border-accent-purple/50 transition-all duration-300 overflow-hidden group"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Icon with glowing frame */}
        <div className="mb-6 inline-block">
          <div className={`relative p-3 rounded-xl border border-accent-purple/40 bg-dark/80 group-hover:shadow-[0_0_20px_rgba(162,70,255,.4)] transition-shadow duration-300`}>
            <IconComponent className={`w-12 h-12 ${iconColor} drop-shadow-[0_0_8px_currentColor]`} />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent-cyan/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent-cyan/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent-cyan/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent-cyan/50" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
      
      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-tl-full pointer-events-none" />
    </motion.div>
  )
}


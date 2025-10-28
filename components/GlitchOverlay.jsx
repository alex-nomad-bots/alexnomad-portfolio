'use client'

import { motion } from 'framer-motion'

export default function GlitchOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px)'
        }}
      />
      
      {/* RGB shift layer 1 - Purple */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(162,70,255,0.4) 0%, transparent 60%)'
        }}
        animate={{
          x: [0, 4, -3, 2, 0],
          y: [0, -2, 3, -1, 0],
          skewX: [0, 3, -2, 2, 0],
          opacity: [0.2, 0.5, 0.4, 0.6, 0.2]
        }}
        transition={{ duration: 1, ease: 'linear' }}
      />
      
      {/* RGB shift layer 2 - Cyan */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 80% 70%, rgba(45,232,181,0.4) 0%, transparent 60%)'
        }}
        animate={{
          x: [0, -5, 2, -3, 0],
          y: [0, 3, -2, 1, 0],
          skewX: [0, -4, 3, -2, 0],
          opacity: [0.15, 0.4, 0.3, 0.5, 0.15]
        }}
        transition={{ duration: 1, ease: 'linear' }}
      />
      
      {/* White flash center */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)'
        }}
        animate={{
          opacity: [0, 0.3, 0, 0.2, 0],
          scale: [1, 1.1, 0.9, 1.05, 1]
        }}
        transition={{ duration: 1, ease: 'linear' }}
      />
      
      {/* Glitch bars */}
      <motion.div
        className="absolute left-0 right-0 h-1 bg-accent-cyan/50"
        style={{ top: '30%' }}
        animate={{
          x: [0, 10, -8, 5, 0],
          opacity: [0, 0.8, 0, 0.6, 0]
        }}
        transition={{ duration: 1, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute left-0 right-0 h-1 bg-accent-purple/50"
        style={{ top: '70%' }}
        animate={{
          x: [0, -10, 8, -5, 0],
          opacity: [0, 0.7, 0, 0.5, 0]
        }}
        transition={{ duration: 1, ease: 'linear' }}
      />
      
      {/* Boot message */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1, times: [0, 0.2, 0.8, 1] }}
      >
        <div className="text-accent-cyan font-mono text-sm md:text-base text-center px-4">
          ESTABLISHING SECURE CONNECTION...
        </div>
      </motion.div>
    </motion.div>
  )
}

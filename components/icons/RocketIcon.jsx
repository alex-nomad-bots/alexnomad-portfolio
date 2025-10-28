'use client'

import { motion } from 'framer-motion'

export default function RocketIcon({ className = "w-12 h-12" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      animate={{ y: [-2, 0, -2] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Rocket body */}
      <path d="M12 2L14 8L16 10L16 16L14 18L12 20L10 18L8 16L8 10L10 8L12 2Z" />
      
      {/* Window */}
      <motion.circle
        cx="12"
        cy="8"
        r="2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      
      {/* Wings */}
      <path d="M8 12L4 14L4 16L8 14" />
      <path d="M16 12L20 14L20 16L16 14" />
      
      {/* Exhaust flames */}
      <motion.path
        d="M10 20L9 22L10 24"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      />
      <motion.path
        d="M12 20L12 24"
        animate={{ opacity: [0.7, 1, 0.7], y: [0, 1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      />
      <motion.path
        d="M14 20L15 22L14 24"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }}
      />
      
      {/* Circuit pattern on body */}
      <line x1="10" y1="12" x2="14" y2="12" strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="14" x2="14" y2="14" strokeWidth="1" opacity="0.5" />
      
      {/* Power nodes */}
      <motion.circle
        cx="10"
        cy="12"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.circle
        cx="14"
        cy="12"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
    </motion.svg>
  )
}


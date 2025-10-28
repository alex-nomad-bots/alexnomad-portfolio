'use client'

import { motion } from 'framer-motion'

export default function BotIcon({ className = "w-12 h-12" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Hexagonal head */}
      <motion.path
        d="M12 3L16 5.5L16 10.5L12 13L8 10.5L8 5.5L12 3Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Eyes - glowing dots */}
      <motion.circle
        cx="10"
        cy="8"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="14"
        cy="8"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
      />
      
      {/* Antenna */}
      <motion.line
        x1="12"
        y1="3"
        x2="12"
        y2="1"
        animate={{ y2: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle
        cx="12"
        cy="1"
        r="0.5"
        fill="currentColor"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Body - circuit pattern */}
      <path d="M8 13L8 17L10 19M16 13L16 17L14 19" />
      <rect x="10" y="14" width="4" height="5" />
      
      {/* Circuit nodes */}
      <circle cx="9" cy="15" r="0.5" fill="currentColor" />
      <circle cx="15" cy="15" r="0.5" fill="currentColor" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      
      {/* Arms */}
      <path d="M8 14L6 15L6 17" />
      <path d="M16 14L18 15L18 17" />
      
      {/* Power indicator */}
      <motion.circle
        cx="12"
        cy="11"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.svg>
  )
}


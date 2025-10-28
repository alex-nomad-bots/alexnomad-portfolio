'use client'

import { motion } from 'framer-motion'

export default function TerminalIcon({ className = "w-12 h-12" }) {
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
      {/* Terminal window frame */}
      <rect x="2" y="4" width="20" height="16" rx="2" />
      
      {/* Header bar */}
      <line x1="2" y1="8" x2="22" y2="8" />
      
      {/* Window controls */}
      <circle cx="5" cy="6" r="0.5" fill="currentColor" />
      <circle cx="7" cy="6" r="0.5" fill="currentColor" />
      <circle cx="9" cy="6" r="0.5" fill="currentColor" />
      
      {/* Command prompt arrow */}
      <motion.path
        d="M6 12L9 14L6 16"
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Blinking cursor */}
      <motion.line
        x1="11"
        y1="13"
        x2="11"
        y2="15"
        strokeWidth="2"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      
      {/* Code lines */}
      <motion.line
        x1="6"
        y1="18"
        x2="12"
        y2="18"
        strokeWidth="1"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.line
        x1="14"
        y1="18"
        x2="18"
        y2="18"
        strokeWidth="1"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
      />
    </motion.svg>
  )
}


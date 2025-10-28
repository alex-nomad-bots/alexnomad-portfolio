'use client'

import { motion } from 'framer-motion'

export default function CodeIcon({ className = "w-12 h-12" }) {
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
      {/* Left bracket */}
      <motion.path
        d="M8 4L4 12L8 20"
        animate={{ x: [-1, 0, -1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Right bracket */}
      <motion.path
        d="M16 4L20 12L16 20"
        animate={{ x: [1, 0, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Code slash */}
      <motion.line
        x1="14"
        y1="6"
        x2="10"
        y2="18"
        strokeDasharray="2 1"
        animate={{ strokeDashoffset: [0, -3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Circuit nodes */}
      <motion.circle
        cx="8"
        cy="12"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="16"
        cy="12"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="12"
        cy="8"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle
        cx="12"
        cy="16"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
      />
    </motion.svg>
  )
}


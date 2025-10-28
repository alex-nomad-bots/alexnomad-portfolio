'use client'

import { motion } from 'framer-motion'

export default function DashboardIcon({ className = "w-12 h-12" }) {
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
      {/* Outer frame */}
      <rect x="3" y="3" width="18" height="18" rx="2" />
      
      {/* Grid panels */}
      <rect x="5" y="5" width="6" height="6" rx="1" />
      <rect x="13" y="5" width="6" height="6" rx="1" />
      <rect x="5" y="13" width="6" height="6" rx="1" />
      <rect x="13" y="13" width="6" height="6" rx="1" />
      
      {/* Animated data bars in top-left panel */}
      <motion.line
        x1="6"
        y1="10"
        x2="6"
        y2="8"
        strokeWidth="1"
        animate={{ y1: [10, 9, 10] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.line
        x1="8"
        y1="10"
        x2="8"
        y2="7"
        strokeWidth="1"
        animate={{ y1: [10, 8, 10] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      />
      <motion.line
        x1="10"
        y1="10"
        x2="10"
        y2="6"
        strokeWidth="1"
        animate={{ y1: [10, 7, 10] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      
      {/* Activity indicator - top-right panel */}
      <motion.circle
        cx="16"
        cy="8"
        r="1.5"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle
        cx="16"
        cy="8"
        r="2.5"
        fillOpacity="0"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Data flow - bottom-left panel */}
      <motion.path
        d="M6 14L8 16L10 14"
        strokeWidth="1"
        strokeDasharray="2 1"
        animate={{ strokeDashoffset: [0, -3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M6 17L8 19L10 17"
        strokeWidth="1"
        strokeDasharray="2 1"
        animate={{ strokeDashoffset: [0, -3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />
      
      {/* Signal waves - bottom-right panel */}
      <motion.path
        d="M14 16H18"
        strokeWidth="1"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.path
        d="M14 18H18"
        strokeWidth="1"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
      />
      
      {/* Power indicators */}
      <motion.circle
        cx="19"
        cy="5"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.svg>
  )
}


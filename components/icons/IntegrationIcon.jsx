'use client'

import { motion } from 'framer-motion'

export default function IntegrationIcon({ className = "w-12 h-12" }) {
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
      {/* Central hub */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Node connections - animated flowing */}
      <motion.path
        d="M12 3L12 9"
        strokeDasharray="2 2"
        animate={{ strokeDashoffset: [0, -4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M12 15L12 21"
        strokeDasharray="2 2"
        animate={{ strokeDashoffset: [0, -4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
      />
      <motion.path
        d="M3 12L9 12"
        strokeDasharray="2 2"
        animate={{ strokeDashoffset: [0, -4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.4 }}
      />
      <motion.path
        d="M15 12L21 12"
        strokeDasharray="2 2"
        animate={{ strokeDashoffset: [0, -4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.6 }}
      />
      
      {/* Corner nodes */}
      <motion.circle
        cx="12"
        cy="3"
        r="2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="12"
        cy="21"
        r="2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="3"
        cy="12"
        r="2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="21"
        cy="12"
        r="2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
      
      {/* Inner circuit pattern */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <motion.circle
        cx="12"
        cy="3"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.circle
        cx="12"
        cy="21"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.25 }}
      />
      <motion.circle
        cx="3"
        cy="12"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="21"
        cy="12"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.75 }}
      />
    </motion.svg>
  )
}


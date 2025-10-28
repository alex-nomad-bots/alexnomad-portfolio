'use client'

import { motion } from 'framer-motion'

export default function AutomationIcon({ className = "w-12 h-12" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {/* Outer gear */}
      <motion.path
        d="M12 2L13 4L15 4L16 2L18 3L18 5L20 6L19 8L21 9L20 11L22 12L20 13L21 15L19 16L20 18L18 19L18 21L16 22L15 20L13 20L12 22L11 20L9 20L8 22L6 21L6 19L4 18L5 16L3 15L4 13L2 12L4 11L3 9L5 8L4 6L6 5L6 3L8 2L9 4L11 4L12 2Z"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Inner gear ring */}
      <motion.circle
        cx="12"
        cy="12"
        r="6"
        animate={{ scale: [1, 0.95, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Center hub with circuit pattern */}
      <circle cx="12" cy="12" r="3" />
      
      {/* Circuit nodes in center */}
      <motion.circle
        cx="12"
        cy="10"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.circle
        cx="14"
        cy="12"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.33 }}
      />
      <motion.circle
        cx="12"
        cy="14"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.66 }}
      />
      <motion.circle
        cx="10"
        cy="12"
        r="0.5"
        fill="currentColor"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 1 }}
      />
      
      {/* Power lines */}
      <line x1="12" y1="10" x2="12" y2="9" strokeWidth="1" />
      <line x1="14" y1="12" x2="15" y2="12" strokeWidth="1" />
      <line x1="12" y1="14" x2="12" y2="15" strokeWidth="1" />
      <line x1="10" y1="12" x2="9" y2="12" strokeWidth="1" />
      
      {/* Center core */}
      <motion.circle
        cx="12"
        cy="12"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  )
}


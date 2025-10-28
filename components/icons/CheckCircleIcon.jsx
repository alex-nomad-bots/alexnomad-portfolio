'use client'

import { motion } from 'framer-motion'

export default function CheckCircleIcon({ className = "w-12 h-12" }) {
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
      {/* Outer hexagon */}
      <motion.path
        d="M12 2L20 7L20 17L12 22L4 17L4 7L12 2Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Inner circle */}
      <motion.circle
        cx="12"
        cy="12"
        r="7"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Checkmark */}
      <motion.path
        d="M8 12L11 15L16 9"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      />
      
      {/* Glowing corners */}
      <motion.circle
        cx="12"
        cy="2"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="20"
        cy="12"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.66 }}
      />
      <motion.circle
        cx="12"
        cy="22"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.33 }}
      />
    </motion.svg>
  )
}


'use client'

import { motion } from 'framer-motion'

export default function BootScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="rounded-xl border border-[#A246FF40] bg-[#0A0A0F]/90 p-4 max-w-[260px] w-[90%] font-mono text-[11px] leading-relaxed text-[#2DE8B5] text-left"
        style={{ boxShadow: '0 0 40px rgba(162, 70, 255, 0.4)' }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-[#A246FF] text-[10px] mb-2">[ SYSTEM ALERT ]</div>
        <div>&gt; establishing secure channel...</div>
        <div>&gt; connecting to ALEX NOMAD core...</div>
        <div>&gt; access level: CLIENT</div>
      </motion.div>
    </motion.div>
  )
}

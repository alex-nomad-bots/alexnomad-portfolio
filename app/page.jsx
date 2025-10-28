'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LanguageSelector() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0A0A0F] overflow-hidden">
      {/* Animated background glow - Purple */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(162, 70, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '20%',
          left: '10%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated background glow - Cyan */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(45, 232, 181, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '20%',
          right: '10%',
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Terminal Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[360px] mx-4 rounded-xl border border-[#A246FF40] bg-[rgba(10,10,15,0.9)] p-6 md:p-8 font-mono"
        style={{ boxShadow: '0 0 40px rgba(162, 70, 255, 0.4)' }}
      >
        {/* Terminal Header */}
        <div className="text-[#2DE8B5] text-xs mb-6">
          alex@nomad:~$ access --init
        </div>

        {/* System Info Block */}
        <div className="text-[#2DE8B5] text-sm space-y-1 mb-6">
          <div className="text-[#A246FF] text-xs mb-2">
            [ ALEX NOMAD ACCESS PANEL ]
          </div>
          <div>&gt; system: Telegram Bots & Automation</div>
          <div>&gt; status: online</div>
          <div>&gt; privilege: CLIENT</div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#A246FF40] to-transparent my-6" />

        {/* Language Selection Prompt */}
        <div className="text-[#2DE8B5] text-sm mb-4">
          &gt; select interface language:
        </div>

        {/* Language Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
          {/* Russian Button */}
          <Link href="/ru" className="flex-1">
            <motion.div
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-lg border border-[#A246FF40] bg-gradient-to-r from-[#A246FF] to-[#2DE8B5] text-black text-center py-3 px-4 transition cursor-pointer"
              style={{ boxShadow: '0 0 30px rgba(162, 70, 255, 0.6)' }}
            >
              <div className="font-semibold text-sm md:text-base">
                РУССКИЙ / RU
              </div>
              <div className="text-xs opacity-80 mt-1 font-mono">
                Интерфейс на русском
              </div>
            </motion.div>
          </Link>

          {/* English Button */}
          <Link href="/en" className="flex-1">
            <motion.div
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-lg border border-[#A246FF40] bg-gradient-to-r from-[#A246FF] to-[#2DE8B5] text-black text-center py-3 px-4 transition cursor-pointer"
              style={{ boxShadow: '0 0 30px rgba(162, 70, 255, 0.6)' }}
            >
              <div className="font-semibold text-sm md:text-base">
                ENGLISH / EN
              </div>
              <div className="text-xs opacity-80 mt-1 font-mono">
                Interface in English
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Footer Hint */}
        <div className="text-[#2DE8B5] text-xs opacity-60 text-center">
          &gt; press to continue<span className="blink">_</span>
        </div>
      </motion.div>
    </div>
  )
}


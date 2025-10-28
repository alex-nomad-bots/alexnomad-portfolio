'use client'

import { motion } from 'framer-motion'

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated blob 1 - Purple */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(162, 70, 255, 0.35) 0%, rgba(162, 70, 255, 0.15) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: ['-20%', '60%', '-20%'],
          y: ['0%', '50%', '0%'],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '-20%', y: '0%' }}
      />

      {/* Animated blob 2 - Cyan */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(45, 232, 181, 0.3) 0%, rgba(45, 232, 181, 0.12) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: ['80%', '10%', '80%'],
          y: ['30%', '70%', '30%'],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '80%', y: '30%' }}
      />

      {/* Animated blob 3 - Purple/Cyan mix */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(120, 150, 220, 0.25) 0%, rgba(162, 70, 255, 0.1) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: ['40%', '20%', '40%'],
          y: ['60%', '10%', '60%'],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '40%', y: '60%' }}
      />

      {/* Additional glow layer */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(162, 70, 255, 0.2) 0%, rgba(45, 232, 181, 0.1) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['50%', '30%', '50%'],
          y: ['50%', '40%', '50%'],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '50%', y: '50%' }}
      />

      {/* Blob 5 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(162, 70, 255, 0.25) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: ['20%', '70%', '20%'],
          y: ['80%', '20%', '80%'],
          scale: [1.1, 1.3, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '20%', y: '80%' }}
      />

      {/* Blob 6 - cyan accent */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(45, 232, 181, 0.28) 0%, transparent 60%)',
          filter: 'blur(55px)',
        }}
        animate={{
          x: ['70%', '20%', '70%'],
          y: ['15%', '85%', '15%'],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '70%', y: '15%' }}
      />
    </div>
  )
}


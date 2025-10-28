'use client'

import { motion } from 'framer-motion'

export default function SolutionCard({ name, desc, price, tag, index, onOrder, language = 'ru' }) {
  const handleOrder = () => {
    if (onOrder) {
      onOrder(name)
    }
  }

  const buttonText = {
    ru: 'Заказать',
    en: 'Order Now'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative p-8 bg-dark-secondary rounded-xl border border-gray-800 hover:border-accent-purple/50 transition-all duration-300 overflow-hidden group"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Tag */}
        <div className="inline-block px-3 py-1 mb-4 text-xs bg-accent-purple/10 border border-accent-purple/30 rounded-full text-accent-purple">
          {tag}
        </div>
        
        {/* Name */}
        <h3 className="text-2xl font-bold mb-3 text-white">{name}</h3>
        
        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">{desc}</p>
        
        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent-cyan">{price}</div>
          <button
            onClick={handleOrder}
            className="px-6 py-2 bg-dark-tertiary border border-accent-purple/30 hover:border-accent-cyan rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-glow-md"
          >
            {buttonText[language]}
          </button>
        </div>
      </div>
      
      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-tl-full pointer-events-none" />
    </motion.div>
  )
}


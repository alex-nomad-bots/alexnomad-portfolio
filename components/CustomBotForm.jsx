'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomBotForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: '',
    budget: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          name: '',
          contact: '',
          description: '',
          budget: ''
        })
        setIsSuccess(false)
        setIsClosing(false)
      }, 300)
    }
  }, [isOpen])

  // ESC key to close
  useEffect(() => {
    if (!isOpen) return
    
    function handleKeyDown(e) {
      if (e.key === 'Escape' && !isSubmitting && !isClosing) {
        handleClose()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, isSubmitting, isClosing])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submitRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'custom_bot_request'
        })
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
      } else {
        alert('Ошибка отправки. Попробуйте снова.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Ошибка отправки. Попробуйте снова.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (isSubmitting || isClosing) return
    
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
        style={{ 
          background: 'rgba(10, 10, 15, 0.9)',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Glitch lines background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(162, 70, 255, 0.3) 0px, transparent 2px, transparent 4px, rgba(162, 70, 255, 0.3) 6px)',
            animation: 'glitch-lines 8s linear infinite'
          }}
        />

        {/* Pulsating background glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(162, 70, 255, 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: isClosing ? 0.95 : 1, 
            opacity: isClosing ? 0 : 1 
          }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[560px] bg-[#0A0A0F] border-2 border-[#A246FF] rounded-xl overflow-hidden"
          style={{ boxShadow: '0 0 60px rgba(162, 70, 255, 0.6)' }}
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(162, 70, 255, 0.5), transparent)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Terminal Header */}
          <div className="relative px-4 py-3 bg-[#120020] border-b-2 border-[#A246FF]/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              
              <motion.div
                className="text-[#2DE8B5] text-sm font-mono flex items-center gap-2"
                animate={{
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="text-[#A246FF]">&gt;</span> CUSTOM BOT REQUEST
              </motion.div>
              
              <button
                onClick={handleClose}
                disabled={isSubmitting || isClosing}
                className="text-gray-500 hover:text-[#2DE8B5] transition-colors disabled:opacity-50"
                title="Press ESC to close"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="p-6 terminal-scrollbar max-h-[80vh]">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="text-[#2DE8B5] text-6xl mb-6"
                >
                  ✓
                </motion.div>
                <div className="text-[#2DE8B5] text-lg font-mono mb-4">
                  [ SUCCESS ] Заявка принята
                </div>
                <div className="text-gray-400 text-sm font-mono mb-8">
                  Я свяжусь с вами в течение 24 часов для обсуждения деталей проекта
                </div>
                <button
                  onClick={handleClose}
                  className="px-8 py-2 border-2 border-[#2DE8B5]/50 rounded-lg text-[#2DE8B5] hover:bg-[#2DE8B5]/10 transition font-mono"
                >
                  [ CLOSE ]
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono">
                {/* System Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#A246FF] text-xs mb-4 p-3 bg-[#120020]/50 rounded border border-[#A246FF]/30"
                >
                  <div>[ PREMIUM SERVICE ]</div>
                  <div className="text-[#2DE8B5] mt-1">
                    Индивидуальная разработка Telegram-ботов под ваши задачи
                  </div>
                </motion.div>

                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> Ваше имя:'}
                    {showCursor && formData.name === '' && <span className="cursor-blink">_</span>}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isClosing}
                    className="terminal-input w-full px-4 py-2 bg-[#0A0A0F] border-2 border-[#A246FF]/30 rounded text-[#2DE8B5] focus:border-[#2DE8B5] focus:ring-2 focus:ring-[#2DE8B5]/30 disabled:opacity-50 font-mono"
                    placeholder="Иван Петров"
                  />
                </motion.div>

                {/* Contact Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> Контакт (Telegram или Email):'}
                    {showCursor && formData.contact === '' && <span className="cursor-blink">_</span>}
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isClosing}
                    className="terminal-input w-full px-4 py-2 bg-[#0A0A0F] border-2 border-[#A246FF]/30 rounded text-[#2DE8B5] focus:border-[#2DE8B5] focus:ring-2 focus:ring-[#2DE8B5]/30 disabled:opacity-50 font-mono"
                    placeholder="@username или email@example.com"
                  />
                </motion.div>

                {/* Description Textarea */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> Описание проекта:'}
                    {showCursor && formData.description === '' && <span className="cursor-blink">_</span>}
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isClosing}
                    rows="4"
                    className="terminal-input w-full px-4 py-2 bg-[#0A0A0F] border-2 border-[#A246FF]/30 rounded text-[#2DE8B5] focus:border-[#2DE8B5] focus:ring-2 focus:ring-[#2DE8B5]/30 disabled:opacity-50 font-mono resize-none"
                    placeholder="Опишите задачи бота, функционал, интеграции..."
                  />
                </motion.div>

                {/* Budget Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> Ориентировочный бюджет:'}
                    {showCursor && formData.budget === '' && <span className="cursor-blink">_</span>}
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting || isClosing}
                    className="terminal-input w-full px-4 py-2 bg-[#0A0A0F] border-2 border-[#A246FF]/30 rounded text-[#2DE8B5] focus:border-[#2DE8B5] focus:ring-2 focus:ring-[#2DE8B5]/30 disabled:opacity-50 font-mono"
                    placeholder="от 50 000 ₽ или укажите ваш диапазон"
                  />
                  <div className="text-gray-500 text-xs mt-1 font-mono">
                    Необязательное поле, но помогает в планировании
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isClosing}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ opacity: (isSubmitting || isClosing) ? 1 : 0.9 }}
                  whileTap={{ scale: (isSubmitting || isClosing) ? 1 : 0.98 }}
                  className="w-full py-3 text-black text-sm font-bold rounded-lg bg-gradient-to-r from-[#A246FF] to-[#2DE8B5] transition disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                  style={{ boxShadow: '0 0 30px rgba(162, 70, 255, 0.6)' }}
                >
                  {isSubmitting ? '[ SENDING... ]' : '[ ENTER TO SUBMIT ]'}
                </motion.button>

                {/* Footer hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-gray-500 text-center mt-4 font-mono"
                >
                  Press ESC to cancel • Конфиденциальность гарантирована
                </motion.div>
              </form>
            )}
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-[#A246FF] via-[#2DE8B5] to-[#A246FF]"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ backgroundSize: '200% 100%' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


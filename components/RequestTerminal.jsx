'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlitchOverlay from './GlitchOverlay'
import BootScreen from './BootScreen'

export default function RequestTerminal({ isOpen, onClose, initialBotType = '' }) {
  // Single phase state machine instead of multiple booleans
  const [phase, setPhase] = useState('idle') // "idle" | "glitch" | "boot" | "form"
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    botType: initialBotType,
    comment: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  // Computed: sessionActive is true when form is visible
  const sessionActive = phase === 'form'

  const botOptions = [
    'Work Report Bot',
    'Order & Delivery Bot',
    'Booking Bot',
    'Feedback & Support Bot',
    'Другое'
  ]
  
  // Update botType when initialBotType changes
  useEffect(() => {
    if (initialBotType && isOpen) {
      setFormData(prev => ({ ...prev, botType: initialBotType }))
    }
  }, [initialBotType, isOpen])
  
  // Deterministic phase sequence controlled by parent timeouts
  useEffect(() => {
    if (!isOpen) {
      setPhase('idle')
      setIsClosing(false)
      return
    }
    
    console.log('🚀 Modal opened, starting phase sequence')
    setPhase('glitch')
    
    // Glitch phase: 1000ms
    const t1 = setTimeout(() => {
      console.log('⚡ Phase: glitch → boot')
      setPhase('boot')
    }, 1000)
    
    // Boot phase: starts at 1000ms, runs for 800ms, total 1800ms
    const t2 = setTimeout(() => {
      console.log('💻 Phase: boot → form')
      setPhase('form')
    }, 1800)
    
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [isOpen])

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
          botType: '',
          comment: ''
        })
        setIsSuccess(false)
      }, 300)
    }
  }, [isOpen])

  // ESC key to close (graceful disconnect)
  useEffect(() => {
    if (!isOpen || phase !== 'form') return
    
    function handleKeyDown(e) {
      if (e.key === 'Escape' && !isSubmitting && !isClosing) {
        console.log('⌨️ ESC pressed, closing session')
        handleClose()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, phase, isSubmitting, isClosing])

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
        body: JSON.stringify(formData)
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
    
    console.log('🔓 Closing session')
    setIsClosing(true)
    
    // Animate out, then close
    setTimeout(() => {
      setPhase('idle')
      setIsSuccess(false)
      onClose()
    }, 300)
  }

  // Early return if not open
  if (!isOpen) return null

  return (
    <>
      {/* Phase: Glitch */}
      {phase === 'glitch' && (
        <GlitchOverlay />
      )}
      
      {/* Phase: Boot */}
      {phase === 'boot' && (
        <BootScreen />
      )}
      
      {/* Secure Session Background Layer - only visible when form is shown */}
      <AnimatePresence>
        {sessionActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isClosing ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[40] bg-black/70 backdrop-blur-sm pointer-events-none"
          >
            {/* Pulsating purple glow */}
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(162, 70, 255, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                top: '20%',
                left: '15%',
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
            
            {/* Pulsating cyan glow */}
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(45, 232, 181, 0.12) 0%, transparent 70%)',
                filter: 'blur(80px)',
                bottom: '20%',
                right: '15%',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Phase: Form - Terminal Modal */}
      <AnimatePresence>
        {phase === 'form' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isClosing ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          style={{ pointerEvents: isClosing ? 'none' : 'auto' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: isClosing ? 0.95 : 1, 
              opacity: isClosing ? 0 : 1 
            }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[480px] bg-dark border border-[#A246FF40] rounded-xl overflow-hidden"
            style={{ boxShadow: '0 0 40px rgba(162, 70, 255, 0.4)' }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-dark-secondary border-b border-accent-purple/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-accent-cyan text-xs font-mono flex items-center gap-2">
                {sessionActive && (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[10px]"
                  >
                    🔒 SECURE
                  </motion.span>
                )}
                <span>alex@nomad:~$ request_bot --interactive</span>
              </div>
              <button
                onClick={handleClose}
                disabled={isSubmitting || isClosing}
                className="text-gray-500 hover:text-accent-cyan transition-colors disabled:opacity-50"
                title="Press ESC to close"
              >
                ✕
              </button>
            </div>

            <div className="p-6 terminal-scrollbar max-h-[80vh]">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="text-accent-cyan text-lg font-mono mb-8">
                    ✅ Заявка отправлена. Я свяжусь с вами в Telegram.
                  </div>
                  <button
                    onClick={handleClose}
                    className="px-8 py-2 border border-accent-cyan/50 rounded-lg text-accent-cyan hover:bg-accent-cyan/10 transition font-mono"
                  >
                    Закрыть
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-accent-cyan mb-2 text-sm">
                      {'> Имя:'}
                      {showCursor && formData.name === '' && <span className="cursor-blink">_</span>}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isClosing}
                      className="terminal-input w-full px-4 py-2 bg-dark border border-accent-purple/30 rounded text-accent-cyan focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 disabled:opacity-50 font-mono"
                      placeholder="Ваше имя"
                    />
                  </motion.div>

                  {/* Contact Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-accent-cyan mb-2 text-sm">
                      {'> Контакт (Email или Telegram):'}
                      {showCursor && formData.contact === '' && <span className="cursor-blink">_</span>}
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isClosing}
                      className="terminal-input w-full px-4 py-2 bg-dark border border-accent-purple/30 rounded text-accent-cyan focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 disabled:opacity-50 font-mono"
                      placeholder="@username или email@example.com"
                    />
                  </motion.div>

                  {/* Bot Type Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-accent-cyan mb-2 text-sm">
                      {'> Какой бот нужен:'}
                      {showCursor && formData.botType === '' && <span className="cursor-blink">_</span>}
                    </label>
                    <select
                      name="botType"
                      value={formData.botType}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isClosing}
                      className="terminal-input w-full px-4 py-2 bg-dark border border-accent-purple/30 rounded text-accent-cyan focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 disabled:opacity-50 font-mono appearance-none pr-8"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232DE8B5' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                      }}
                    >
                      <option value="" disabled>Выберите бота</option>
                      {botOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Comment Textarea */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-accent-cyan mb-2 text-sm">
                      {'> Комментарий:'}
                      {showCursor && formData.comment === '' && <span className="cursor-blink">_</span>}
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      disabled={isSubmitting || isClosing}
                      rows="3"
                      className="terminal-input w-full px-4 py-2 bg-dark border border-accent-purple/30 rounded text-accent-cyan focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 disabled:opacity-50 font-mono"
                      placeholder="Расскажите подробнее..."
                    />
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
                    className="w-full py-3 text-black text-sm font-medium rounded-lg bg-gradient-to-r from-[#A246FF] to-[#2DE8B5] transition disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ boxShadow: '0 0 30px rgba(162, 70, 255, 0.6)' }}
                  >
                    {isSubmitting ? '[ ОТПРАВКА... ]' : '[ ENTER to submit ]'}
                  </motion.button>

                  {/* Footer hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-gray-500 text-center mt-4"
                  >
                    Нажмите ESC для отмены
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

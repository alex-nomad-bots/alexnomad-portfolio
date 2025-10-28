'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomBotForm({ isOpen, onClose, scrollToButton = null, language = 'ru' }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: '',
    budget: ''
  })
  
  // Локализация
  const texts = {
    ru: {
      premiumService: '[ PREMIUM SERVICE ]',
      premiumDescription: 'Индивидуальная разработка Telegram-ботов под ваши задачи',
      successTitle: '[ SUCCESS ] Заявка принята',
      successMessage: 'Ваш запрос успешно отправлен. Я свяжусь с вами в ближайшее время.',
      nameLabel: 'Ваше имя:',
      namePlaceholder: 'Иван Иванов',
      contactLabel: 'Контакт (Telegram или Email):',
      contactPlaceholder: '@username или email@example.com',
      descriptionLabel: 'Описание проекта:',
      descriptionPlaceholder: 'Опишите функционал бота, задачи, особенности...',
      budgetLabel: 'Ориентировочный бюджет:',
      budgetPlaceholder: 'от 100 000 ₽',
      submitButton: '[ ENTER TO SUBMIT ]',
      submitting: '[ ОТПРАВКА... ]',
      footerHint: 'ESC - закрыть • ENTER - отправить'
    },
    en: {
      premiumService: '[ PREMIUM SERVICE ]',
      premiumDescription: 'Custom Telegram bot development tailored to your needs',
      successTitle: '[ SUCCESS ] Request received',
      successMessage: 'Your request has been successfully submitted. I will contact you soon.',
      nameLabel: 'Your name:',
      namePlaceholder: 'John Doe',
      contactLabel: 'Contact (Telegram or Email):',
      contactPlaceholder: '@username or email@example.com',
      descriptionLabel: 'Project description:',
      descriptionPlaceholder: 'Describe bot features, tasks, requirements...',
      budgetLabel: 'Estimated budget:',
      budgetPlaceholder: 'from $2,000',
      submitButton: '[ ENTER TO SUBMIT ]',
      submitting: '[ SUBMITTING... ]',
      footerHint: 'ESC - close • ENTER - submit'
    }
  }
  
  const t = texts[language]
  
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

  // Block scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

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
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0F]/90 backdrop-blur-sm"
      >
        {/* Glitch lines background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(162, 70, 255, 0.3) 0px, transparent 2px, transparent 4px, rgba(162, 70, 255, 0.3) 6px)',
            animation: 'glitch-lines 8s linear infinite'
          }}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: isClosing ? 0.95 : 1, 
            opacity: isClosing ? 0 : 1 
          }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[90%] max-w-md rounded-2xl border border-[#A246FF50] bg-[#0A0A0F]/95 p-6 text-[#2DE8B5]"
        >
          {/* Terminal Header */}
          <div className="rounded-t-2xl bg-[#0C0C0F] border-b border-[#2DE8B540] p-3 flex items-center justify-between">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* CENTER SECTION */}
            <div className="text-[#2DE8B5] font-mono text-[10px] whitespace-nowrap">
              alex@nomad:~$ <span className="text-[#2DE8B5]">request_bot --interactive</span>
            </div>

            {/* RIGHT SIDE */}
            <button
              onClick={handleClose}
              disabled={isSubmitting || isClosing}
              className="text-gray-500 hover:text-gray-300 transition disabled:opacity-50"
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="text-[#2DE8B5] text-6xl mb-6"
                >
                  ✓
                </motion.div>
                <div className="text-[#2DE8B5] text-lg font-mono mb-4">
                  {t.successTitle}
                </div>
                <div className="text-gray-400 text-sm font-mono mb-8">
                  {t.successMessage}
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
                  <div>{t.premiumService}</div>
                  <div className="text-[#2DE8B5] mt-1">
                    {t.premiumDescription}
                  </div>
                </motion.div>

                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> ' + t.nameLabel}
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
                    placeholder={t.namePlaceholder}
                  />
                </motion.div>

                {/* Contact Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> ' + t.contactLabel}
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
                    placeholder={t.contactPlaceholder}
                  />
                </motion.div>

                {/* Description Textarea */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> ' + t.descriptionLabel}
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
                    placeholder={t.descriptionPlaceholder}
                  />
                </motion.div>

                {/* Budget Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-[#2DE8B5] mb-2 text-sm">
                    {'> ' + t.budgetLabel}
                    {showCursor && formData.budget === '' && <span className="cursor-blink">_</span>}
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting || isClosing}
                    className="terminal-input w-full px-4 py-2 bg-[#0A0A0F] border-2 border-[#A246FF]/30 rounded text-[#2DE8B5] focus:border-[#2DE8B5] focus:ring-2 focus:ring-[#2DE8B5]/30 disabled:opacity-50 font-mono"
                    placeholder={t.budgetPlaceholder}
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
                  className="w-full py-3 text-black text-sm font-bold rounded-lg bg-gradient-to-r from-[#A246FF] to-[#2DE8B5] transition disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                  style={{ boxShadow: '0 0 30px rgba(162, 70, 255, 0.6)' }}
                >
                  {isSubmitting ? t.submitting : t.submitButton}
                </motion.button>

                {/* Footer hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-gray-500 text-center mt-4 font-mono"
                >
                  {t.footerHint}
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


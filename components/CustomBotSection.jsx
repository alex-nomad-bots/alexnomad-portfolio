'use client'

import { motion } from 'framer-motion'
import BotIcon from '@/components/icons/BotIcon'
import IntegrationIcon from '@/components/icons/IntegrationIcon'
import DashboardIcon from '@/components/icons/DashboardIcon'
import AutomationIcon from '@/components/icons/AutomationIcon'

export default function CustomBotSection({ onOpenForm, language = 'ru', buttonRef = null }) {
  const content = {
    ru: {
      title: 'CUSTOM BOT DEVELOPMENT',
      subtitle: 'Создание уникальных Telegram-ботов под задачи вашего бизнеса',
      buttonText: 'СОЗДАТЬ КАСТОМНЫЙ БОТ',
      footerText: 'Индивидуальный подход • Премиум качество • Полное сопровождение',
      features: [
        {
          icon: BotIcon,
          title: 'AI-интеграции',
          desc: 'ChatGPT, GPT API, умные ассистенты с обработкой естественного языка',
          color: 'text-accent-cyan'
        },
        {
          icon: IntegrationIcon,
          title: 'CRM & Google Sheets',
          desc: 'Полная синхронизация с вашими системами учёта и базами данных',
          color: 'text-accent-purple'
        },
        {
          icon: DashboardIcon,
          title: 'Мультиюзерные дашборды',
          desc: 'Интерактивные панели с правами доступа для разных ролей',
          color: 'text-accent-cyan'
        },
        {
          icon: AutomationIcon,
          title: 'Безопасность & Аналитика',
          desc: 'Защищённая передача данных, детальная статистика, логирование',
          color: 'text-accent-purple'
        }
      ]
    },
    en: {
      title: 'CUSTOM BOT DEVELOPMENT',
      subtitle: 'Building unique Telegram bots tailored to your business needs',
      buttonText: 'CREATE A CUSTOM BOT',
      footerText: 'Individual Approach • Premium Quality • Full Support',
      features: [
        {
          icon: BotIcon,
          title: 'AI Integrations',
          desc: 'ChatGPT, GPT API, smart assistants with natural language processing',
          color: 'text-accent-cyan'
        },
        {
          icon: IntegrationIcon,
          title: 'CRM & Google Sheets',
          desc: 'Full synchronization with your accounting systems and databases',
          color: 'text-accent-purple'
        },
        {
          icon: DashboardIcon,
          title: 'Multi-user Dashboards',
          desc: 'Interactive panels with access rights for different roles',
          color: 'text-accent-cyan'
        },
        {
          icon: AutomationIcon,
          title: 'Security & Analytics',
          desc: 'Secure data transmission, detailed statistics, comprehensive logging',
          color: 'text-accent-purple'
        }
      ]
    }
  }

  const t = content[language]
  const features = t.features

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-r from-[#0A0A0F] via-[#120020] to-[#0A0A0F]">
      {/* Animated background glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(162, 70, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
          top: '-20%',
          left: '10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(45, 232, 181, 0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '-20%',
          right: '10%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              textShadow: [
                '0 0 15px rgba(45, 232, 181, 0.6)',
                '0 0 25px rgba(45, 232, 181, 0.8)',
                '0 0 15px rgba(45, 232, 181, 0.6)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="text-4xl md:text-6xl font-mono text-[#2DE8B5] font-bold">
              {t.title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 font-mono"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-dark-secondary/50 border border-accent-purple/30 hover:border-accent-cyan/50 transition-all duration-300 group backdrop-blur-sm"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-cyan/50" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent-cyan/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent-cyan/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-cyan/50" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative p-2 rounded-lg border border-${feature.color.includes('cyan') ? 'accent-cyan' : 'accent-purple'}/40 bg-dark/60 group-hover:shadow-[0_0_15px_rgba(${feature.color.includes('cyan') ? '45,232,181' : '162,70,255'},.3)] transition-shadow duration-300`}>
                    <feature.icon className={`w-10 h-10 ${feature.color} drop-shadow-[0_0_8px_currentColor]`} />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            ref={buttonRef}
            onClick={onOpenForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#A246FF] to-[#2DE8B5] text-black font-mono text-xl font-bold shadow-[0_0_40px_rgba(162,70,255,.6)] hover:shadow-[0_0_60px_rgba(162,70,255,.8)] transition-all duration-300"
          >
            {t.buttonText}
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-gray-500 text-sm font-mono"
          >
            {t.footerText}
          </motion.p>
        </motion.div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(162, 70, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(162, 70, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
    </section>
  )
}

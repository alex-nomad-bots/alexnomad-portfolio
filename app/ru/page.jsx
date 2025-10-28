'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import SolutionCard from '@/components/SolutionCard'
import StepCard from '@/components/StepCard'
import RequestTerminal from '@/components/RequestTerminal'

// Cyberpunk Icons
import BotIcon from '@/components/icons/BotIcon'
import IntegrationIcon from '@/components/icons/IntegrationIcon'
import AutomationIcon from '@/components/icons/AutomationIcon'
import DashboardIcon from '@/components/icons/DashboardIcon'
import TerminalIcon from '@/components/icons/TerminalIcon'
import CodeIcon from '@/components/icons/CodeIcon'
import CheckCircleIcon from '@/components/icons/CheckCircleIcon'
import RocketIcon from '@/components/icons/RocketIcon'

// Premium Section
import CustomBotSection from '@/components/CustomBotSection'
import CustomBotForm from '@/components/CustomBotForm'

export default function RussianHome() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBot, setSelectedBot] = useState('Work Report Bot')
  const [customModalOpen, setCustomModalOpen] = useState(false)
  
  const telegramLink = "https://t.me/alex_nomad_dev"

  const handleOrder = (botName) => {
    setSelectedBot(botName)
    setIsModalOpen(true)
  }

  // Services data
  const services = [
    {
      IconComponent: BotIcon,
      title: 'Telegram-боты',
      desc: 'Создаю ботов под ключ: от простых чат-ботов до сложных систем с базами данных, платежами и интеграциями.',
      iconColor: 'text-accent-cyan'
    },
    {
      IconComponent: IntegrationIcon,
      title: 'Интеграции',
      desc: 'Связываю ваши сервисы: CRM, Google Sheets, базы данных, API любой сложности. Всё работает без ручных действий.',
      iconColor: 'text-accent-purple'
    },
    {
      IconComponent: AutomationIcon,
      title: 'Автоматизация',
      desc: 'Автоматизирую рутину через n8n, Zapier или кастомные скрипты. Освобождаю время для важных задач.',
      iconColor: 'text-accent-cyan'
    },
    {
      IconComponent: DashboardIcon,
      title: 'Dashboards',
      desc: 'Делаю наглядные дашборды в Google Sheets, Notion или веб-интерфейсах для контроля бизнес-процессов.',
      iconColor: 'text-accent-purple'
    }
  ]

  // Projects data
  const projects = [
    {
      title: 'Бот для автоматизации отчётов',
      desc: 'Telegram-бот собирает ежедневные отчёты от сотрудников, агрегирует данные в Google Sheets и отправляет статистику руководителю.',
      tech: ['Python', 'aiogram', 'Google Sheets API', 'PostgreSQL']
    },
    {
      title: 'Система приёма заказов',
      desc: 'Бот принимает заказы от клиентов, отправляет уведомления менеджерам, обновляет статусы и хранит историю в базе.',
      tech: ['Python', 'Telegram Bot API', 'SQLite', 'n8n']
    },
    {
      title: 'CRM-интеграция для букинга',
      desc: 'Автоматическая синхронизация записей клиентов между Telegram-ботом, Google Calendar и CRM-системой.',
      tech: ['Python', 'Google Calendar API', 'Bitrix24 API', 'Webhooks']
    }
  ]

  // Ready Solutions data
  const solutions = [
    {
      name: 'Work Report Bot',
      desc: 'Сбор ежедневных отчётов сотрудников с выгрузкой в Google Sheets и уведомлениями в Telegram.',
      price: 'от 9 900 ₽',
      tag: 'Бизнес / Отчётность'
    },
    {
      name: 'Order & Delivery Bot',
      desc: 'Приём заказов, статусы доставки, уведомления для клиентов и менеджеров.',
      price: 'от 12 900 ₽',
      tag: 'Сервис / Доставка'
    },
    {
      name: 'Booking Bot',
      desc: 'Запись клиентов, календарь доступных дат, напоминания.',
      price: 'от 14 900 ₽',
      tag: 'Услуги / Бронирование'
    },
    {
      name: 'Feedback & Support Bot',
      desc: 'Приём отзывов и обращений, пересылка сообщений в поддержку.',
      price: 'от 8 900 ₽',
      tag: 'Клиенты / Поддержка'
    }
  ]

  // Process steps data
  const processSteps = [
    {
      step: '1',
      IconComponent: TerminalIcon,
      title: 'Обсуждение',
      desc: 'Вы пишете мне в Telegram, рассказываете задачу. Я задаю уточняющие вопросы и предлагаю решение.',
      iconColor: 'text-accent-cyan'
    },
    {
      step: '2',
      IconComponent: CheckCircleIcon,
      title: 'Оценка и договор',
      desc: 'Оцениваю сроки и стоимость, согласовываем детали, заключаем договор или работаем по предоплате.',
      iconColor: 'text-accent-purple'
    },
    {
      step: '3',
      IconComponent: CodeIcon,
      title: 'Разработка',
      desc: 'Пишу код, настраиваю интеграции, тестирую. Вы получаете промежуточные результаты и можете вносить правки.',
      iconColor: 'text-accent-cyan'
    },
    {
      step: '4',
      IconComponent: RocketIcon,
      title: 'Запуск и поддержка',
      desc: 'Запускаем бота, я провожу инструктаж. Поддержка и доработки — по договорённости.',
      iconColor: 'text-accent-purple'
    }
  ]

  return (
    <main className="relative min-h-screen bg-dark text-white">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-dark-secondary border border-accent-purple/30 rounded-lg text-accent-cyan text-sm font-mono hover:border-accent-cyan transition-all"
          >
            🌐 Change Language
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-lg">
              ALEX NOMAD
            </h1>
            <p className="text-xl md:text-2xl text-accent-cyan mb-8">
              Telegram-боты & Автоматизация бизнеса
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Создаю кастомных Telegram-ботов и автоматизирую бизнес-процессы. 
              Без конструкторов — только чистый код и точные решения под вашу задачу.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-primary rounded-xl text-black font-bold text-lg shadow-glow-purple"
                >
                  Написать в Telegram
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-dark-secondary border-2 border-accent-cyan rounded-xl text-accent-cyan font-bold text-lg hover:bg-accent-cyan/10 transition-all"
              >
                Готовые решения
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Чем я занимаюсь</h2>
            <p className="text-gray-400 text-lg">
              Разрабатываю и внедряю решения для автоматизации
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                IconComponent={service.IconComponent}
                title={service.title}
                desc={service.desc}
                index={index}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-dark-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Проекты</h2>
            <p className="text-gray-400 text-lg">
              Примеры реализованных решений
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                tech={project.tech}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Bot Development Section */}
      <CustomBotSection onOpenForm={() => setCustomModalOpen(true)} />

      {/* Ready Solutions Section */}
      <section id="solutions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовые решения</h2>
            <p className="text-gray-400 text-lg">
              Выбирайте готового Telegram-бота и получите рабочее решение за 1–3 дня
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                name={solution.name}
                desc={solution.desc}
                price={solution.price}
                tag={solution.tag}
                index={index}
                onOrder={handleOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-dark-secondary/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как я работаю</h2>
            <p className="text-gray-400 text-lg">
              Простой и прозрачный процесс от идеи до запуска
            </p>
          </motion.div>

          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                IconComponent={step.IconComponent}
                title={step.title}
                desc={step.desc}
                index={index}
                iconColor={step.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Пишите в Telegram — обсудим вашу задачу, оценим сроки и стоимость. 
              Первая консультация бесплатно.
            </p>
            
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-primary rounded-xl text-black font-bold text-xl shadow-glow-purple mb-8"
              >
                Связаться в Telegram
              </motion.button>
            </a>

            <div className="text-accent-cyan font-mono text-sm">
              @alex_nomad_dev
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 ALEX NOMAD — Telegram Bots & Automation</p>
          <p className="mt-2 font-mono">Сделано с 💜 и 💚</p>
        </div>
      </footer>

      {/* Request Terminal Modal */}
      <RequestTerminal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialBotType={selectedBot}
      />

      {/* Custom Bot Form Modal */}
      <CustomBotForm
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
      />
    </main>
  )
}

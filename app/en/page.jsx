'use client'

import { useState, useRef } from 'react'
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

export default function EnglishHome() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBot, setSelectedBot] = useState('Work Report Bot')
  const [customModalOpen, setCustomModalOpen] = useState(false)
  
  // Refs for scroll to button after modal close
  const contactButtonRef = useRef(null)
  const customBotButtonRef = useRef(null)
  
  const telegramLink = "https://t.me/alex_nomad_dev"

  const handleOrder = (botName) => {
    setSelectedBot(botName)
    setIsModalOpen(true)
  }

  // Services data
  const services = [
    {
      IconComponent: BotIcon,
      title: 'Telegram Bots',
      desc: 'I build custom bots from scratch: from simple chatbots to complex systems with databases, payments, and integrations.',
      iconColor: 'text-accent-cyan'
    },
    {
      IconComponent: IntegrationIcon,
      title: 'Integrations',
      desc: 'I connect your services: CRM, Google Sheets, databases, APIs of any complexity. Everything works without manual actions.',
      iconColor: 'text-accent-purple'
    },
    {
      IconComponent: AutomationIcon,
      title: 'Automation',
      desc: 'I automate routine tasks with n8n, Zapier, or custom scripts. Free up time for what really matters.',
      iconColor: 'text-accent-cyan'
    },
    {
      IconComponent: DashboardIcon,
      title: 'Dashboards',
      desc: 'I create visual dashboards in Google Sheets, Notion, or web interfaces for monitoring business processes.',
      iconColor: 'text-accent-purple'
    }
  ]

  // Projects data
  const projects = [
    {
      title: 'Report Automation Bot',
      desc: 'Telegram bot collects daily reports from employees, aggregates data in Google Sheets, and sends statistics to management.',
      tech: ['Python', 'aiogram', 'Google Sheets API', 'PostgreSQL']
    },
    {
      title: 'Order Management System',
      desc: 'Bot receives orders from clients, sends notifications to managers, updates statuses, and stores history in a database.',
      tech: ['Python', 'Telegram Bot API', 'SQLite', 'n8n']
    },
    {
      title: 'CRM Integration for Booking',
      desc: 'Automatic synchronization of client appointments between Telegram bot, Google Calendar, and CRM system.',
      tech: ['Python', 'Google Calendar API', 'Bitrix24 API', 'Webhooks']
    }
  ]

  // Ready Solutions data (USD pricing)
  const solutions = [
    {
      name: 'Work Report Bot',
      desc: 'Collects daily staff reports with export to Google Sheets and Telegram notifications.',
      price: 'from $200',
      tag: 'Business / Reporting'
    },
    {
      name: 'Order & Delivery Bot',
      desc: 'Order intake, delivery status tracking, notifications for clients and managers.',
      price: 'from $250',
      tag: 'Service / Delivery'
    },
    {
      name: 'Booking Bot',
      desc: 'Client appointment scheduling, availability calendar, automated reminders.',
      price: 'from $300',
      tag: 'Services / Booking'
    },
    {
      name: 'Feedback & Support Bot',
      desc: 'Collects feedback and inquiries, forwards messages to support team.',
      price: 'from $180',
      tag: 'Customer / Support'
    }
  ]

  // Process steps data
  const processSteps = [
    {
      step: '1',
      IconComponent: TerminalIcon,
      title: 'Discovery',
      desc: 'You message me on Telegram and describe your task. I ask clarifying questions and propose a solution.',
      iconColor: 'text-accent-cyan'
    },
    {
      step: '2',
      IconComponent: CheckCircleIcon,
      title: 'Estimate & Agreement',
      desc: 'I evaluate timeline and cost, we agree on details, sign a contract or work with prepayment.',
      iconColor: 'text-accent-purple'
    },
    {
      step: '3',
      IconComponent: CodeIcon,
      title: 'Development',
      desc: 'I write code, configure integrations, and test. You receive progress updates and can request changes.',
      iconColor: 'text-accent-cyan'
    },
    {
      step: '4',
      IconComponent: RocketIcon,
      title: 'Launch & Support',
      desc: 'We launch the bot, I provide training. Support and updates are available as needed.',
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
              Telegram Bots & Business Automation
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I build custom Telegram bots and automate business processes. 
              No builders — only clean code and precise solutions tailored to your needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-primary rounded-xl text-black font-bold text-lg shadow-glow-purple"
                >
                  Message on Telegram
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-dark-secondary border-2 border-accent-cyan rounded-xl text-accent-cyan font-bold text-lg hover:bg-accent-cyan/10 transition-all"
              >
                Ready-made Bots
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-400 text-lg">
              I develop and implement automation solutions
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-gray-400 text-lg">
              Real-world solutions for automation and integration
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
      <CustomBotSection 
        onOpenForm={() => setCustomModalOpen(true)}
        language="en"
        buttonRef={customBotButtonRef}
      />

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready-made Bots</h2>
            <p className="text-gray-400 text-lg">
              Choose a ready-made Telegram bot and get a working solution in 1–3 days
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
                language="en"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">
              Simple and transparent process from idea to launch
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Message me on Telegram — let&apos;s discuss your task, estimate timeline and cost. 
              First consultation is free.
            </p>
            
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" ref={contactButtonRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-primary rounded-xl text-black font-bold text-xl shadow-glow-purple mb-8"
              >
                Contact on Telegram
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
          <p className="mt-2 font-mono">Made with 💜 and 💚</p>
        </div>
      </footer>

      {/* Request Terminal Modal */}
      <RequestTerminal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialBotType={selectedBot}
        language="en"
        scrollToButton={contactButtonRef}
      />

      {/* Custom Bot Form Modal */}
      <CustomBotForm
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
        language="en"
        scrollToButton={customBotButtonRef}
      />
    </main>
  )
}

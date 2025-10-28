import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata = {
  title: 'ALEX NOMAD — Telegram Bots & Automation',
  description: 'Создаю кастомных Telegram-ботов и бизнес-автоматизации. Без конструкторов. Чистый код.',
  keywords: ['Telegram боты', 'автоматизация', 'разработка ботов', 'интеграции', 'n8n', 'Google Sheets'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={jetbrainsMono.variable}>
      <body className={jetbrainsMono.className}>
        {children}
      </body>
    </html>
  )
}


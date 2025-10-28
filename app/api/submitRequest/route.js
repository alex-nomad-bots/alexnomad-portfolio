import { NextResponse } from 'next/server'

const BOT_TOKEN = process.env.BOT_TOKEN || "8085257887:AAGD_2UEY6RSSwhEZ_IagoRmXiBAU7LAmdI"
const CHAT_ID = process.env.CHAT_ID || "285742976"

export async function POST(request) {
  try {
    const data = await request.json()
    
    if (data.formType === 'custom_bot_request') {
      console.log('🚀 Получена заявка на Custom Bot:')
      console.log('   Имя:', data.name)
      console.log('   Контакт:', data.contact)
      console.log('   Описание:', data.description)
      console.log('   Бюджет:', data.budget || 'не указан')
    } else {
      console.log('📩 Получена обычная заявка:')
      console.log('   Имя:', data.name)
      console.log('   Контакт:', data.contact)
      console.log('   Бот:', data.botType)
      console.log('   Комментарий:', data.comment || 'не указан')
    }
    
    // Отправка в Telegram
    await sendTelegramNotification(data)
    
    return NextResponse.json({
      success: true,
      message: 'Request received and sent to Telegram successfully'
    })
  } catch (error) {
    console.error('❌ Ошибка обработки заявки:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

async function sendTelegramNotification(data) {
  const timestamp = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  let message
  
  if (data.formType === 'custom_bot_request') {
    // Custom Bot Development Request
    message = `🚀 CUSTOM BOT REQUEST | ALEX NOMAD

━━━━━━━━━━━━━━━━━━━━━━━
👤 Имя: ${data.name}
📱 Контакт: ${data.contact}

📋 Описание проекта:
${data.description}

💰 Бюджет: ${data.budget || 'не указан'}

⏰ Время: ${timestamp}
━━━━━━━━━━━━━━━━━━━━━━━

🔥 ПРЕМИУМ-ЗАЯВКА на индивидуальную разработку`
  } else {
    // Regular Ready-Made Solution Request
    message = `💬 Новая заявка с сайта ALEX NOMAD

👤 Имя: ${data.name}
📱 Контакт: ${data.contact}
🤖 Бот: ${data.botType}
💭 Комментарий: ${data.comment || 'не указан'}
⏰ Время: ${timestamp}`
  }

  const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

  try {
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })

    const result = await response.json()

    if (!result.ok) {
      throw new Error(`Telegram API error: ${result.description || 'Unknown error'}`)
    }

    console.log('✅ Сообщение отправлено в Telegram успешно')
    return result
  } catch (error) {
    console.error('❌ Ошибка отправки в Telegram:', error)
    throw error
  }
}


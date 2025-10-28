# ALEX NOMAD Portfolio

Сайт-портфолио разработчика Telegram-ботов и автоматизации.

## 🚀 Особенности

- **Современный дизайн**: Cyberpunk-стиль с неоновыми акцентами и анимациями
- **Многоязычность**: Русская (`/ru`) и английская (`/en`) версии
- **Интерактивность**: Terminal-стиль модальные окна с эффектами glitch
- **Responsive**: Адаптивный дизайн для всех устройств
- **Анимации**: Framer Motion для плавных переходов

## 📁 Структура проекта

```
wwwnomad/
├── app/
│   ├── page.jsx              # Главная страница (выбор языка)
│   ├── layout.jsx            # Root layout
│   ├── globals.css           # Глобальные стили
│   ├── ru/
│   │   ├── page.jsx          # Русская версия портфолио
│   │   └── layout.jsx        # Metadata для русской версии
│   ├── en/
│   │   └── page.jsx          # Английская версия (placeholder)
│   └── api/
│       └── submitRequest/
│           └── route.js      # API для обработки форм
├── components/
│   ├── BackgroundAnimation.jsx  # Анимированный фон
│   ├── ServiceCard.jsx          # Карточка услуги
│   ├── ProjectCard.jsx          # Карточка проекта
│   ├── SolutionCard.jsx         # Карточка готового решения
│   ├── StepCard.jsx             # Карточка шага процесса
│   ├── RequestTerminal.jsx      # Модальное окно заявки (terminal-стиль)
│   ├── CustomBotSection.jsx     # Секция кастомной разработки
│   ├── CustomBotForm.jsx        # Форма заказа кастомного бота
│   ├── GlitchOverlay.jsx        # Glitch-эффект при открытии модалки
│   ├── BootScreen.jsx           # Boot-экран (secure connection)
│   └── icons/                   # Cyberpunk SVG иконки
│       ├── BotIcon.jsx
│       ├── IntegrationIcon.jsx
│       ├── AutomationIcon.jsx
│       ├── DashboardIcon.jsx
│       ├── TerminalIcon.jsx
│       ├── CodeIcon.jsx
│       ├── CheckCircleIcon.jsx
│       ├── RocketIcon.jsx
│       └── index.js             # Barrel export
└── package.json

```

## 🛠 Технологии

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS**
- **Framer Motion** (анимации)
- **JetBrains Mono** (шрифт)

## 📦 Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env.local` с переменными:
```env
BOT_TOKEN=ваш_токен_телеграм_бота
CHAT_ID=ваш_chat_id
```

3. Запустите dev-сервер:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000)

## 🎨 Цветовая палитра

- **Cyan**: `#2DE8B5` - акцент для автоматизации/ботов
- **Purple**: `#A246FF` - акцент для креатива/системы
- **Dark**: `#0A0A0F` - основной фон
- **Dark Secondary**: `#1A1A1F` - вторичный фон

## 📝 Секции сайта

### Главная (`/`)
- Терминал-стиль выбор языка
- Системная информация
- Кнопки: "🇷🇺 Русский" / "🇬🇧 English"

### Русская версия (`/ru`)
1. **Hero** - Главный экран с призывом к действию
2. **Чем я занимаюсь** - 4 услуги с кибер-иконками
3. **Проекты** - Примеры реализованных решений
4. **Custom Bot Development** - Премиум секция с кастомной разработкой
5. **Готовые решения** - 4 готовых бота с фиксированной ценой
6. **Как я работаю** - 4 шага процесса разработки
7. **Контакты** - Связь через Telegram

### Английская версия (`/en`)
- В разработке (placeholder)

## 🔧 Особенности разработки

### Модальные окна
- **RequestTerminal**: Заявка на готовое решение
- **CustomBotForm**: Заявка на кастомную разработку
- Анимация с 3 фазами: glitch → boot → form
- ESC для закрытия
- Отправка в Telegram через API

### Анимации
- Появление элементов при скролле (Framer Motion)
- Пульсирующее свечение (glow effects)
- Анимированные cyberpunk-иконки
- Hover-эффекты на карточках

### API
- `/api/submitRequest` - обработка заявок
- Отправка в Telegram Bot API
- Форматирование сообщений
- Различие между обычными и премиум-заявками

## 📱 Telegram Integration

Все заявки отправляются напрямую в Telegram:
- Имя клиента
- Контакт (Telegram или Email)
- Выбранный бот / описание проекта
- Комментарий / бюджет
- Временная метка (MSK)

## 🚀 Production

Для деплоя:
```bash
npm run build
npm start
```

Или используйте Vercel:
```bash
vercel
```

## 👨‍💻 Автор

**ALEX NOMAD**  
Telegram: [@alex_nomad_dev](https://t.me/alex_nomad_dev)

---

© 2025 ALEX NOMAD. Made with 💜 and 💚


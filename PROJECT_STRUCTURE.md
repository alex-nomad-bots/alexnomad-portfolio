# Структура проекта ALEX NOMAD Portfolio

## ✅ Статус проекта
- ✅ Проект успешно собран (`npm run build`)
- ✅ Все компоненты работают
- ✅ API интегрирован с Telegram
- ✅ Русская версия полностью готова
- ⏳ Английская версия - placeholder (можно доработать)

## 📁 Файловая структура

### `/app` - Next.js App Router
```
app/
├── page.jsx              # Главная: терминал выбора языка (RU/EN)
├── layout.jsx            # Root layout с шрифтами и metadata
├── globals.css           # Глобальные стили, анимации, Tailwind
│
├── ru/                   # Русская версия сайта
│   ├── page.jsx          # Полное портфолио (7 секций)
│   └── layout.jsx        # Metadata для русской версии
│
├── en/                   # Английская версия
│   └── page.jsx          # Placeholder (можно доработать)
│
└── api/
    └── submitRequest/
        └── route.js      # API для отправки форм в Telegram
```

### `/components` - React компоненты

#### Карточки секций:
- `ServiceCard.jsx` - Карточка услуги (4 шт в секции "Чем я занимаюсь")
- `ProjectCard.jsx` - Карточка проекта (3 шт в секции "Проекты")
- `SolutionCard.jsx` - Карточка готового решения (4 шт, с кнопкой "Заказать")
- `StepCard.jsx` - Карточка шага процесса (4 шт в секции "Как я работаю")

#### Секции:
- `CustomBotSection.jsx` - Премиум секция "Custom Bot Development"
  - Поддерживает язык: `language="ru"` или `language="en"`
  - 4 фичи с иконками
  - CTA кнопка открывает `CustomBotForm`

#### Модальные окна (Terminal-стиль):
- `RequestTerminal.jsx` - Заявка на готовое решение
  - Анимация: glitch → boot → form (3 фазы)
  - Поддержка языка: `language="ru"` или `language="en"`
  - ESC для закрытия
  - Отправка через API
  
- `CustomBotForm.jsx` - Заявка на кастомную разработку
  - Фиолетовая тема (премиум)
  - Glitch lines фон
  - Поля: имя, контакт, описание, бюджет
  - Поддержка языка

#### Эффекты:
- `BackgroundAnimation.jsx` - Анимированные градиентные блобы
- `GlitchOverlay.jsx` - Cyberpunk glitch эффект
- `BootScreen.jsx` - "Secure connection" экран

#### Иконки (`/components/icons/`):
Все иконки в cyberpunk-стиле с Framer Motion анимациями:
- `BotIcon.jsx` - Гексагональный бот
- `IntegrationIcon.jsx` - Узлы и связи
- `AutomationIcon.jsx` - Вращающаяся шестеренка
- `DashboardIcon.jsx` - Панель с графиками
- `TerminalIcon.jsx` - Терминал с командной строкой
- `CodeIcon.jsx` - Код-скобки
- `CheckCircleIcon.jsx` - Круг с галочкой
- `RocketIcon.jsx` - Ракета (запуск)
- `index.js` - Barrel export всех иконок

## 🎨 Стилизация

### Tailwind CSS классы
Определены в `globals.css`:
- `.text-glow-sm/md/lg` - Свечение текста
- `.shadow-glow-purple` - Фиолетовое свечение
- `.cursor-blink` - Мигающий курсор
- `.terminal-input` - Стиль terminal полей ввода
- `.terminal-scrollbar` - Кастомный скроллбар
- `.glitch-lines` - Анимация glitch-линий

### Цветовая палитра (Tailwind)
```js
colors: {
  'dark': '#0A0A0F',
  'dark-secondary': '#1A1A1F',
  'accent-cyan': '#2DE8B5',
  'accent-purple': '#A246FF'
}
```

### Градиенты
```js
backgroundImage: {
  'gradient-primary': 'linear-gradient(135deg, #A246FF 0%, #2DE8B5 100%)'
}
```

## 🔧 Конфигурация

### Переменные окружения (`.env.local`)
```
BOT_TOKEN=8085257887:AAGD_2UEY6RSSwhEZ_IagoRmXiBAU7LAmdI
CHAT_ID=285742976
```

### API Route (`/api/submitRequest`)
Обрабатывает два типа форм:
1. **Обычная заявка** (RequestTerminal)
   - name, contact, botType, comment
   
2. **Премиум заявка** (CustomBotForm)
   - formType: "custom_bot_request"
   - name, contact, description, budget

Оба отправляются в Telegram с форматированием.

## 📄 Секции русской версии (`/ru`)

1. **Hero** - Главный экран
   - Заголовок, подзаголовок, описание
   - 2 кнопки: "Написать в Telegram" + "Готовые решения"

2. **Чем я занимаюсь** (4 карточки)
   - Telegram-боты
   - Интеграции
   - Автоматизация
   - Dashboards

3. **Проекты** (3 карточки)
   - Бот для автоматизации отчётов
   - Система приёма заказов
   - CRM-интеграция для букинга

4. **Custom Bot Development** (премиум секция)
   - 4 фичи: AI, CRM, Дашборды, Безопасность
   - CTA: "СОЗДАТЬ КАСТОМНЫЙ БОТ"

5. **Готовые решения** (4 карточки с ценами)
   - Work Report Bot - от 9 900 ₽
   - Order & Delivery Bot - от 12 900 ₽
   - Booking Bot - от 14 900 ₽
   - Feedback & Support Bot - от 8 900 ₽

6. **Как я работаю** (4 шага)
   - Обсуждение
   - Оценка и договор
   - Разработка
   - Запуск и поддержка

7. **Контакты**
   - CTA кнопка в Telegram
   - Username: @alex_nomad_dev

## 🚀 Команды

```bash
# Разработка
npm run dev          # http://localhost:3000

# Production
npm run build        # Сборка
npm start            # Запуск production

# Другое
npm run lint         # ESLint проверка
```

## ⚡ Оптимизация

- ✅ Все страницы статически генерируются (SSG)
- ✅ Размер JS: 87.3 kB (shared) + 13.2 kB (русская версия)
- ✅ Использование `'use client'` только там, где нужна интерактивность
- ✅ Lazy loading изображений (если добавите)
- ✅ Framer Motion animations оптимизированы

## 🔍 Что можно доработать

### Английская версия `/en`
Сейчас это placeholder. Для полноценной версии нужно:
1. Скопировать структуру из `/ru/page.jsx`
2. Перевести весь контент
3. Обновить цены с ₽ на $
4. Передать `language="en"` во все компоненты

### Добавить проекты
В секцию "Проекты" можно добавить:
- Скриншоты/превью
- Ссылки на демо
- Больше деталей о технологиях

### SEO
- Meta теги (уже есть базовые в layout.jsx)
- Open Graph изображения
- Sitemap.xml
- robots.txt

### Аналитика
- Google Analytics
- Yandex Metrika
- Отслеживание конверсий

## 📱 Контакты разработчика

- **Telegram**: [@alex_nomad_dev](https://t.me/alex_nomad_dev)
- **Сайт**: В разработке
- **Email**: Через Telegram

---

© 2025 ALEX NOMAD - Telegram Bots & Automation


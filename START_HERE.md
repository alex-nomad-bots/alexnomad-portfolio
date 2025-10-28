# 🚀 Быстрый старт

## ✅ Проект полностью готов!

Английская версия создана и протестирована!

---

## 📍 Расположение проекта

```
/Users/alex_nomad/Desktop/wwwnomad
```

---

## 🌍 Что работает

### Языки
- ✅ **Русский** (`/ru`) - полное портфолио
- ✅ **English** (`/en`) - full portfolio with USD prices

### Страницы
- **/** - Выбор языка (cyberpunk terminal)
- **/ru** - 7 секций на русском (цены в ₽)
- **/en** - 7 секций на английском (цены в $)

### Функционал
- ✅ Анимации (Framer Motion)
- ✅ Cyberpunk дизайн
- ✅ Terminal-style модальные окна
- ✅ Отправка заявок в Telegram
- ✅ Responsive дизайн

---

## 🚀 Команды запуска

### Разработка (локально)
```bash
cd /Users/alex_nomad/Desktop/wwwnomad
npm run dev
```
Откройте: **http://localhost:3000**

### Production сборка
```bash
npm run build
npm start
```

### Проверка сборки
```bash
npm run build
```
✅ Должно быть: **0 errors**, warnings можно игнорировать

---

## 💰 Цены

### Русская версия (/ru)
- Work Report Bot: **от 9 900 ₽**
- Order & Delivery Bot: **от 12 900 ₽**
- Booking Bot: **от 14 900 ₽**
- Feedback & Support Bot: **от 8 900 ₽**
- Custom Development: **от 100 000 ₽**

### English version (/en)
- Work Report Bot: **from $200**
- Order & Delivery Bot: **from $250**
- Booking Bot: **from $300**
- Feedback & Support Bot: **from $180**
- Custom Development: **from $2,000**

---

## 🔧 Настройки

### Telegram Bot
Уже настроен в `.env.local`:
- `BOT_TOKEN=8085257887:AAGD_2UEY6RSSwhEZ_IagoRmXiBAU7LAmdI`
- `CHAT_ID=285742976`

Все заявки приходят сюда автоматически!

---

## 📱 Деплой

### Vercel (рекомендуется)
```bash
# 1. Зарегистрируйтесь на vercel.com
# 2. Установите CLI
npm i -g vercel

# 3. Деплой
cd /Users/alex_nomad/Desktop/wwwnomad
vercel

# 4. В Vercel Dashboard добавьте переменные:
#    Settings → Environment Variables
#    BOT_TOKEN=8085257887:AAGD_2UEY6RSSwhEZ_IagoRmXiBAU7LAmdI
#    CHAT_ID=285742976
```

После деплоя получите URL типа: `alex-nomad.vercel.app`

---

## 📂 Структура (кратко)

```
wwwnomad/
├── app/
│   ├── page.jsx         → выбор языка
│   ├── ru/page.jsx      → русская версия
│   ├── en/page.jsx      → английская версия ✨
│   └── api/submitRequest/ → обработка форм
│
├── components/
│   ├── *Card.jsx        → карточки секций
│   ├── *Terminal.jsx    → модальные окна
│   ├── *Form.jsx        → формы заявок
│   └── icons/           → 8 cyberpunk иконок
│
├── .env.local           → настройки Telegram
└── package.json         → зависимости
```

---

## ⚡ Быстрые команды

```bash
# Перейти в проект
cd /Users/alex_nomad/Desktop/wwwnomad

# Запустить
npm run dev

# Собрать
npm run build

# Деплой
vercel
```

---

## 📞 Если что-то не работает

1. Проверьте Node.js: `node -v` (должно быть 18+)
2. Переустановите зависимости: `rm -rf node_modules && npm install`
3. Очистите кэш: `rm -rf .next && npm run build`
4. Напишите мне: [@alex_nomad_dev](https://t.me/alex_nomad_dev)

---

## ✅ Чек-лист перед деплоем

- [x] `npm run build` работает без ошибок
- [x] Обе версии (/ru и /en) работают локально
- [x] Формы отправляют заявки в Telegram
- [x] Все анимации плавные
- [x] Сайт адаптивный (проверьте на телефоне)
- [ ] Купить домен (опционально)
- [ ] Настроить DNS на Vercel
- [ ] Добавить Google Analytics (опционально)

---

## 🎉 Готово!

Сайт полностью работает и готов к запуску.

**Команда для старта:**
```bash
cd /Users/alex_nomad/Desktop/wwwnomad && npm run dev
```

**Браузер:** http://localhost:3000

Удачи! 🚀

---

© 2025 ALEX NOMAD — Telegram Bots & Automation
Made with 💜 and 💚


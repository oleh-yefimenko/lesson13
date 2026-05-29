# Что используем готовый образ Playwright от Microsoft: браузеры уже установлены; Chromium/Firefox/Webkit готовы; Node.js уже внутри.
FROM mcr.microsoft.com/playwright:v1.60.0-noble
# Создает папку /app внутри контейнера и делает её основной (все команды дальше выполняются там)
WORKDIR /app
# Копируем все файлы из текущей директории в образ
COPY . .
# Устанавливает все npm пакеты из package-lock.json
RUN npm ci
# Команда по умолчанию (если написать вместо npm run test)
CMD ["npx", "playwright", "test"]
# AloCRM - Freelancer CRM System

Полнофункциональная CRM система для управления фрилансерской деятельностью с поддержкой интеграции со всеми популярными фрилас площадками.

## Основные возможности

### 🎯 Три режима интерфейса
1. **Admin/Dev Panel** - управление системой, аналитика, конфигурация
2. **Freelancer Mode** - личный кабинет фрилансера, каталог услуг, управление заказами
3. **Client Mode** - кабинет заказчика, создание заказов, контакт с исполнителями

### 📋 Основной функционал
- **Service Catalog** - собственный каталог услуг с категориями
- **Order Management** - централизованное управление заказами со всех площадок
- **Category System** - разделение заказов по категориям (дизайн, разработка, маркетинг и т.д.)
- **Real-time Chat** - чат между фрилансерами и заказчиками
- **Admin Panel** - контроль, аналитика, техподдержка
- **Integration API** - подключение к фрилас площадкам

## Стек технологий

- **Frontend**: React.js + TypeScript
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL + MongoDB (для кэша)
- **Real-time**: Socket.io
- **Authentication**: JWT + OAuth2
- **Cloud**: Docker + Docker Compose

## Структура проекта

```
alocrm/
├── frontend/
│   ├── admin-panel/
│   ├── freelancer-mode/
│   ├── client-mode/
│   └── shared-components/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── integrations/
│   │   └── utils/
│   └── tests/
├── database/
│   ├── migrations/
│   └── seeds/
└── docker-compose.yml
```

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск с Docker
docker-compose up

# Миграция БД
npm run migrate

# Запуск в dev режиме
npm run dev
```

## Документация

- [API Documentation](./docs/api.md)
- [Database Schema](./docs/database.md)
- [Integration Guide](./docs/integrations.md)
- [User Guide](./docs/user-guide.md)

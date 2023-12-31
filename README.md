**Задание 1.**

Создать модуль для регистрации (*signup*) и аутентификации (*signin*) пользователей (*AuthModule*).
После аутентификации пользователя необходимо генерировать **JSON Web Token (JWT)** и возвращать его на клиент.
**JWT payload** должен содержать структуру данных:
```javascript
{
  id: "string", // id пользователя
  email: "string", // email пользователя
  firstName: "string" // firstName пользователя
}
```

#### Методы
Метод | URL | Действие | Комментарий
--- | --- | ---  | ---
`POST` | `/api/users/signup` | Регистрация пользователей | Для регистрации пользователей необходимо использовать структуру данных: ``{ email: "string", password: "string", firstName: "string", lastName: "string" }``
`POST` | `/api/users/signin` | Аутентификация пользователей | Для аутентификации пользователей необходимо использовать структуру данных: ``{ email: "string", password: "string" }``

*Опционально: зарегистрированные пользователи должны сохраняться в MongoDB*.

**Задание 2.**

Создать собственную стратегию **JWT** с использованием **Passport**. **JWT**-секрет неоходимо хранить в *.env*-файле.

**Задание 3.**

Создать авторизационный **Guard** с использованием реализованной стратегии **JWT**.
Подключить авторизационный **Guard** к контроллерам для авторизации пользовательских запросов.
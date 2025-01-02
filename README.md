# Laravel-React Realtime Chat Application

A real-time chat application built using **Laravel** for the backend and **React** for the frontend. It uses **Laravel Echo** and **Pusher** for real-time broadcasting.

---

# Demo
![gg](https://github.com/user-attachments/assets/11ca07fd-b8fc-443d-8389-ca7afb1c472e)

## Features

- Real-time messaging with Laravel Echo and Pusher.
- User authentication for secure communication.
- Responsive design using React and TailwindCSS.
- Persistent message storage using Laravel and MySQL.
- WebSocket integration for instant updates.

---

## Prerequisites

Make sure you have the following installed on your system:

- **PHP** (>= 8.0)
- **Composer**
- **Node.js** (>= 14.x)
- **npm**
- **Laravel** (>= 9.x)
- A local environment such as Herd, XAMPP, or Laravel Valet.

---

## Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd laravel-react-chat-app

composer install
npm install
php artisan migrate
```

## Running the Application

1. **Start Laravel Development Server**:

    ```bash
    php artisan serve
    ```

2. **Install Node.js Dependencies**:

    ```bash
    npm install
    ```

3. **Build React Application (Production)**:

    ```bash
    npm run build
    ```

4. **Start React Development Server**:

    ```bash
    npm run dev
    ```

5. **Start Laravel Queue Worker**:

    ```bash
    php artisan queue:listen
    ```

6. **Start Laravel Reverb Server**:

    ```bash
    php artisan reverb:start
    ```

---

## Modifying the Root URL

If you're using Herd, Laravel Valet, or a local custom domain, update the `rootUrl` in `main.jsx`:

```javascript
const rootUrl = "http://laravel-chat-app.test";

# Subscription Tracker API

## 📌 Overview

Subscription Tracker API is a Node.js and Express-based backend that helps users track their subscriptions, manage billing cycles, and receive notifications. This API enables authentication, subscription management, email reminder.

## 🚀 Features

- 🔐 **User Authentication** (Signup, Login, JWT-based authentication)
- 📆 **Subscription Management** (Add, Edit, Delete Subscriptions)
-  user management
- Arcjet , Qsatsh , Nodemailer , most important libraries and lightweight packages

## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB (Mongoose ODM)
- **Authentication:** JWT, bcrypt.js
- **Middleware:** Express Validator,authorization, CORS
- **Deployment:** Docker, Railway, Vercel (optional)

## 📦 Installation

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/yourusername/subscription-tracker-api.git
cd subscription-tracker-api
```

### **2️⃣ Install dependencies**

```sh
npm install
```

### **3️⃣ Setup environment variables**

Create a .env.development.local  file in the root directory and add:

```sh

PORT=5500
SERVER_URL=http://localhost:5500
NODE_ENV=
PSWD=
URI=

#JWT AUTH
JWT_SECRET='secret'
JWT_EXPIRES_IN='1d'
ARCJET_KEY=
ARCJET_ENV=




QSTASH_URL= http://127.0.0.1:8080
QSTASH_TOKEN=
EMAIL_PASSWORD=
```

### **4️⃣ Start the server**

#### Development Mode:

```sh
npm run dev
```

#### Production Mode:

```sh
npm start
```

##



##

## ✨ Credits

by **Greg** 🚀

---

Feel free to customize this README to match your project details!


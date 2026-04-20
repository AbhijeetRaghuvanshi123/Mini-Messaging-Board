# 📬 Mini Messaging Board

A server-rendered message board built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**. Users can post messages, browse all senders on the dashboard, and view the full message history for any user.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

---

## 🚀 Live Demo

🌐 Experience the project live here:  

👉 **[Mini Messaging Board Live](https://mini-messaging-board-u5w7.onrender.com/)**  

---

✨ Features you can try:
- 📝 Add new messages in real-time
- 📄 View all posted messages
- 🔍 Open message details
- ⚡ Fully deployed backend + database integration

---

## 🚀 Features

- 📋 Message dashboard showing the latest message from each unique user
- ✍️ Submit new messages via a form
- 👤 View the **full message history** for any user on a dedicated detail page
- 🗄️ Persistent storage with **PostgreSQL** (messages survive server restarts)
- 🔒 Environment-based database config via `.env`
- 🌐 SSL-enabled database connection (production-ready)

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Runtime      | Node.js (ES Modules)                |
| Framework    | Express.js v5                       |
| Templating   | EJS v5                              |
| Database     | PostgreSQL (`pg` / `node-postgres`) |
| Config       | dotenv                              |
| Architecture | MVC (Model-View-Controller)         |

---

## 📁 Project Structure

```
Mini-Messaging-Board/
│
├── app.js                          # Entry point — Express app setup
│
├── config/
│   └── env.js                      # Loads .env via dotenv
│
├── routes/
│   └── indexRouter.js              # Route definitions
│
├── controllers/
│   └── indexController.js          # Request handlers
│
├── models/
│   ├── pool.js                     # PostgreSQL connection pool
│   ├── queries.js                  # DB query functions
│   └── populateDb.js               # DB seed script
│
├── views/
│   ├── home.ejs                    # Dashboard — latest message per user
│   ├── newMessage.ejs              # New message form
│   └── viewMessage.ejs             # Full message history for a user
│
├── public/
│   └── styles.css                  # Global stylesheet
│
├── package.json
└── .gitignore
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A running PostgreSQL instance (local or hosted, e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AbhijeetRaghuvanshi123/Mini-Messaging-Board.git

# 2. Navigate into the project directory
cd Mini-Messaging-Board

# 3. Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://<user>:<password>@<host>/<dbname>?sslmode=require
```

### Seed the Database

Run the seed script once to create the `messages` table and insert sample data:

```bash
node models/populateDb.js
```

### Start the Server

```bash
node app.js
```

Open your browser at **http://localhost:3000**

---

## 🗺️ Routes

| Method | Path              | Description                              |
|--------|-------------------|------------------------------------------|
| GET    | `/`               | Dashboard — latest message per user      |
| GET    | `/new`            | Render the new message form              |
| POST   | `/new`            | Submit a new message                     |
| GET    | `/view?user=<n>`  | Full message history for a specific user |

---

## 🗄️ Database

### Schema

```sql
CREATE TABLE messages (
    text      TEXT,
    username  TEXT,
    added     TIMESTAMPTZ
);
```

### Query Logic (`models/queries.js`)

| Function | Description |
|---|---|
| `getMessages()` | Fetches the latest message per unique user (`DISTINCT ON`) |
| `addMessage(message)` | Inserts a new message with a server-side timestamp |
| `getMessage(user)` | Returns all messages from a specific user |

The connection pool (`models/pool.js`) reads `DATABASE_URL` from the environment and enables SSL for hosted database compatibility.

---

## 🖼️ Views

**Home (`home.ejs`)** — Dashboard showing one card per unique sender with their username, latest date, and a View button.

**New Message (`newMessage.ejs`)** — Form with **Receiver Name** and **Message Text** fields, submitting via `POST /new`.

**Message Detail (`viewMessage.ejs`)** — Shows a user's avatar initial, total message count, and a scrollable list of all their messages with timestamps.

---

## 📄 License

This project is open source and available under the ISC License.

---

## ✨ Author

**Abhijeet Raghuvanshi**  
Built to practice Express routing, MVC architecture, server-side rendering with EJS, and PostgreSQL integration.

> Feel free to fork, star ⭐, and contribute!

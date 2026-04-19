# 📬 Mini Messageboard

A simple message board web application built with **Node.js**, **Express**, and **EJS**. Users can view messages, add new ones, and see individual message details.

---

## 🚀 Features

- View all messages on the homepage
- Add a new message via a form
- View a specific message by user
- Clean and minimal UI with EJS templates
- In-memory data storage (no database required)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML/CSS

---


## 📁 Project Structure
```markdown
│
├── app.js
├── routes/
│ └── indexRouter.js
├── controllers/
│ └── indexController.js
├── models/
│ └── messagesDB.js
├── views/
│ ├── home.ejs
│ ├── newMessage.ejs
│ └── viewMessage.ejs
├── public/
│ └── styles.css
└── package.json
```

---

## 🧩 How It Works

### Server Setup (`app.js`)
- Configures Express app
- Sets EJS as the view engine
- Serves static files from `/public`
- Uses router for handling routes

### Routes (`routes/indexRouter.js`)
- `/` → Homepage (list all messages)
- `/new` → New message form (GET)
- `/new` → Submit new message (POST)
- `/view?user=<username>` → View a specific message

### Controllers (`controllers/indexController.js`)
- `home` → Renders homepage with messages
- `newMessage` → Renders message form
- `addNewMessage` → Handles form submission
- `viewMessage` → Displays a selected message

### Data Layer (`models/messagesDB.js`)
- Stores messages in an array
- Functions:
- `getMessages()` → Fetch all messages
- `addMessage(message)` → Add a new message
- `getMessage(user)` → Get message by username

---

## 🖥️ Views

### 🏠 Home (`home.ejs`)
- Displays all messages in a card layout
- Shows:
- Receiver name
- Date
- Includes:
- "View" button → opens message detail
- "+ New Message" button → navigates to form

---

### ✉️ New Message (`newMessage.ejs`)
- Form to create a new message
- Fields:
- **Receiver Name** (`user`)
- **Message Text** (`text`)
- Submits via `POST /new`

---

### 📩 Message Detail (`viewMessage.ejs`)
- Displays a single message
- Shows:
- Name
- Message text
- Date timestamp
- Includes a **Back** button to return to homepage

---

## ⚠️ Limitations

- Messages are stored in memory (lost on server restart)
- No form validation (empty inputs possible)
- No authentication system
- Messages identified only by username (can cause duplicates)

---

## 💡 Future Improvements

- Add database (MongoDB / PostgreSQL)
- Add validation and error handling
- Implement authentication
- Allow multiple messages per user
- Add edit/delete functionality
- Improve UI/UX

---

## 📄 License

This project is open source and available under the MIT License.

---

## ✨ Author

Built as a learning project to practice:
- Express routing
- MVC architecture
- Server-side rendering with EJS

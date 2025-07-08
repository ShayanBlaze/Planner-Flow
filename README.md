# 📋 **Planner Flow: A Simple Task Manager (Node.js & Express)**

> **A lightweight, yet deeply structured task management application built with Node.js and Express — designed to showcase backend development skills and architectural understanding.**

---

## 🚀 **Features**

- ✅ **Full CRUD Operations:** Create, Read, Update, and Delete tasks
- ✅ **Task Completion Status:** Mark tasks as completed or incomplete
- ✅ **RESTful API:** Clean and well-defined API endpoints
- ✅ **Robust Error Handling:**
  - Custom API errors for specific HTTP statuses
  - Asynchronous error wrapping to simplify try-catch blocks
  - Dedicated middleware for handling 404 (Not Found) routes
- ✅ **MongoDB Integration:** Persistent data storage using MongoDB with Mongoose ODM
- ✅ **Basic Frontend:** Simple, vanilla JavaScript-powered web interface
- ✅ **Environment Variable Management:** Secure handling of sensitive data with `.env`

---

## 📁 **Project Structure**

```
Planner Flow/
├── controllers/            # 🚦 API endpoint logic (CRUD operations for tasks)
│   └── tasks.js
├── db/                     # 💾 Database connection setup
│   └── connect.js
├── errors/                 # ⛔ Custom error classes and helpers
│   └── custom-error.js
├── middleware/             # ⚙️ Express middleware functions (async handling, error handling, 404)
│   ├── async.js
│   ├── error-handler.js
│   └── not-found.js
├── model/                  # 📚 Mongoose data models
│   └── Task.js
├── public/                 # 🌐 Static frontend files (HTML, CSS, client-side JS)
│   ├── browser-app.js
│   ├── edit-task.js
│   ├── favicon.ico
│   ├── index.html
│   ├── main.css
│   ├── normalize.css
│   └── task.html
├── routes/                 # 🛣️ Express route definitions for API endpoints
│   └── tasks.js
├── .env                    # 🔑 Environment variables (ignored by Git)
├── .gitignore              # 🚫 Files/folders to exclude from Git tracking
├── app.js                  # 🚀 Main application entry point
├── package-lock.json       # 🔒 Exact dependency versions
└── package.json            # 📦 Project metadata and dependencies
```

---

## 🛠 **How It Works**

1. **app.js** initializes the Express server, sets up middleware, and defines API routes
2. **db/connect.js** establishes a MongoDB connection using Mongoose
3. **routes/tasks.js** defines API endpoints (`/api/v1/tasks`) for HTTP methods
4. **controllers/tasks.js** contains the core logic for each API operation
5. **model/Task.js** defines the Mongoose schema for a Task document
6. **middleware/async.js** wraps async controller functions for error handling
7. **middleware/error-handler.js** centrally handles all application errors
8. **public/** serves static HTML, CSS, and client-side JS (browser-app.js, edit-task.js) which interact with the backend API using axios

---

## 📦 **Installation**

### **Prerequisites**

- **Node.js:** v14 or higher
- **MongoDB:** Local or cloud instance (e.g., MongoDB Atlas)

### **Steps**

1. **Clone the project:**

   ```sh
   git clone [Your Project's GitHub Link]
   cd "Planner Flow"
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**  
   Create a `.env` file in the project root and add:
   ```
   MONGO_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<YOUR_CLUSTER_URL>/TaskManagerDB?retryWrites=true&w=majority
   ```
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: Server port (defaults to 6000 if not set)

---

## ▶️ **Run the Server**

- **Production:**
  ```sh
  node app.js
  ```
- **Development (with auto-restart):**
  ```sh
  npm start
  ```

---

## 🧪 **Demo Use Case**

1. Open your browser to [http://localhost:PORT/](http://localhost:3000/)
2. Add new tasks using the input field
3. View, edit, or delete existing tasks from the list
4. Navigate to `task.html?id=<taskID>` to directly edit a specific task

---

## 🧠 **Skills Demonstrated**

- Low-level understanding of Node.js HTTP server and Express.js routing
- Building and consuming RESTful APIs
- Database integration with MongoDB and Mongoose
- Effective error handling strategies
- Middleware pattern implementation
- Frontend-backend integration using vanilla JavaScript and Axios
- Environment variable management
- Modular and organized project structure

---

## 📍 **Author**

Custom-built by **Shayan Sharifi** as a personal project for understanding the depths of Node.js and Express.  
It serves as a foundational example of a full-stack application, focusing on backend robustness and clear architecture.

> _Feel free to fork and expand it into your own task management system or use it as a learning resource!_

---

## ✅ **License**

MIT

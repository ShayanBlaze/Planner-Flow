<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" width="120" alt="Planner Flow Logo" />
</p>

<h1 align="center"><b>📋 Planner Flow</b></h1>
<h3 align="center">A Simple Task Manager with Node.js and Express</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-14%2B-brightgreen?logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-4.x-blue?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-5.x-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/License-ISC-yellow" />
</p>

---

> **Planner Flow** is a simple yet deeply structured task manager built with Node.js, Express, and MongoDB.  
> This project is designed for **educational and resume purposes**, focusing on code structure and backend depth.  
> It’s a great starting point for learning RESTful APIs, error handling, and basic frontend integration.

---

## ✨ Key Features

- **Task Management**
  - ➕ Create new tasks
  - 👁️ View all tasks
  - 🔎 View specific tasks by ID
  - ✍️ Update task status and name
  - 🗑️ Delete tasks
- **Task Status:** Mark tasks as completed
- **RESTful API:** Clean, organized endpoints
- **Error Handling:** Custom and async error handling
- **Database:** MongoDB for persistent storage
- **Simple UI:** Basic frontend with HTML, CSS, and Vanilla JS

---

## 🛠️ Technologies Used

| Backend    | Frontend      | Utilities     |
| ---------- | ------------- | ------------- |
| Node.js    | HTML, CSS, JS | Dotenv        |
| Express.js | Axios         | Nodemon (dev) |
| MongoDB    |               |               |
| Mongoose   |               |               |

---

## 🚀 Project Setup

### **Prerequisites**

- **Node.js** (v14+ recommended)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas/database))

---

### **Installation Steps**

1. **Clone the project**

   ```bash
   git clone [Your Project's GitHub Link]
   cd "Planner Flow"
   ```

   _(Or download and extract the files, then navigate to the main directory.)_

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the root directory (next to `app.js`) and add:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=your_desired_port_number
   ```
   - **MONGO_URI:** Your MongoDB connection string  
     _Example:_  
     `mongodb+srv://user:password@cluster.mongodb.net/TaskManagerDB?retryWrites=true&w=majority`
   - **PORT:** Port for the server (default: 6000)

---

### **Running the Project**

- **Development Mode (with Nodemon):**

  ```bash
  npm start
  ```

  _Runs the server with auto-restart on file changes._

- **Production Mode (with Node):**
  ```bash
  node app.js
  ```

> On successful startup, you’ll see:  
> `server is listening on port 6000...`

---

## 🌐 How to Use

### **User Interface (Frontend)**

After starting the server, open your browser and go to:  
[http://localhost:6000/](http://localhost:6000/)  
_(Replace `6000` with your chosen port if different.)_

<p align="center">
  <img src="https://cdn.dribbble.com/users/63407/screenshots/15187010/media/5e7e2e7e6e8e7e7e7e7e7e7e7e7e7e.png?compress=1&resize=800x600" width="60%" alt="Task Manager UI Example" />
</p>

You can add, view, edit, and delete tasks via the simple web interface.

---

### **API Endpoints**

Interact with the RESTful API using tools like Postman or your own frontend.

| Method | Route               | Description                    |
| ------ | ------------------- | ------------------------------ |
| GET    | `/api/v1/tasks`     | Retrieve all tasks             |
| POST   | `/api/v1/tasks`     | Create a new task              |
| GET    | `/api/v1/tasks/:id` | Retrieve a specific task by ID |
| PATCH  | `/api/v1/tasks/:id` | Update a specific task by ID   |
| DELETE | `/api/v1/tasks/:id` | Delete a specific task by ID   |

**Example POST request to create a task:**

```json
POST /api/v1/tasks
Content-Type: application/json

{
  "name": "Buy groceries",
  "completed": false
}
```

---

## 📂 Project Structure

```
Planner Flow/
│
├── controllers/         # Controller logic for API requests
│   └── tasks.js         # CRUD functions for tasks
│
├── db/                  # Database connection settings
│   └── connect.js
│
├── errors/              # Custom error handling
│   └── custom-error.js
│
├── middleware/          # Middleware for request processing
│   ├── async.js
│   ├── error-handler.js
│   └── not-found.js
│
├── model/               # Data models
│   └── Task.js
│
├── public/              # Static and frontend files
│   ├── browser-app.js
│   ├── edit-task.js
│   ├── favicon.ico
│   ├── index.html
│   ├── main.css
│   ├── normalize.css
│   └── task.html
│
├── routes/              # API route definitions
│   └── tasks.js
│
├── .env                 # Environment variables
├── .gitignore           # Git ignore rules
├── app.js               # Main entry point
├── package-lock.json
└── package.json
```

---

## 📜 License

This project is licensed under the **MIT License**.  
See the LICENSE file for more details.

---

## 🙏 Acknowledgements

Thank you for checking out this project!  
Your feedback and suggestions are always welcome.

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" width="60" alt="Thank You" />
</p>

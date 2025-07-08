# **Task Manager API 🚀 (English Version)**

## **Smart and Efficient Task Management**

This project provides a **powerful and flexible RESTful API** for managing tasks. It is built with Node.js and the Express.js framework, utilizing MongoDB as its database. The primary goal of this application is to help users better organize their daily tasks and projects. With this API, developers can easily build robust task management applications (web, mobile, or desktop).

## **✨ Key Features**

* **Advanced User System:**  
  * **Secure Registration & Login:** Implemented with bcrypt for password hashing and JWT for authentication.  
  * **User Profile:** Ability to view and update user profile information.  
  * **Password Recovery:** Functionality to send email for password reset (requires email service configuration).  
* **Comprehensive Task Management:**  
  * **Task Creation:** With details such as title, description, due date, priority, and status.  
  * **Filtering & Search:** Ability to search by title/description and filter by status (completed, in-progress, pending), priority, and due date.  
  * **Sorting:** Tasks can be sorted by creation date, due date, or priority.  
  * **Partial Updates (PATCH):** Allows modifying only specific fields of a task without sending the entire object.  
* **Dashboard Analytics:** Provides simple statistics for tasks (e.g., number of completed, in-progress, or high-priority tasks) per user.  
* **Robust Data Validation:** Utilizes express-validator for strong API input validation.  
* **Centralized Error Handling:** A dedicated middleware for managing and providing standardized error responses.

## **🛠️ Technologies Used**

* **Node.js:** JavaScript runtime environment.  
* **Express.js:** Web framework for Node.js.  
* **MongoDB:** NoSQL database.  
* **Mongoose:** Object Data Modeling (ODM) library for MongoDB.  
* **JSON Web Token (JWT):** For authentication.  
* **Bcrypt.js:** For password hashing.  
* **Dotenv:** For managing environment variables.  
* **Nodemon:** Development tool (automatic server restart).

## **🚀 Setup and Installation**

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**  
   git clone https://github.com/YourUsername/task-manager-api-v2.git  
   cd task-manager-api-v2

2. **Install dependencies:**  
   npm install

3. Configure environment variables:  
   Create a file named .env in the root of the project and add the following variables:  
   PORT=3000  
   MONGO\_URI=mongodb://localhost:27017/taskmanager\_db\_v2  
   JWT\_SECRET=your\_super\_secret\_jwt\_key\_here  
   \# Optional: For password reset emails  
   EMAIL\_USER=your\_email@example.com  
   EMAIL\_PASS=your\_email\_password\_or\_app\_specific\_password

   * PORT: The port on which the API server will run.  
   * MONGO\_URI: Your MongoDB connection string.  
   * JWT\_SECRET: A strong, random string for signing JWT tokens.  
   * EMAIL\_USER and EMAIL\_PASS: (Optional) For email-based password recovery.  
4. Run the server:  
   To run the server in development mode (with Nodemon):  
   npm run dev

   To run the server in production mode:  
   npm start

   The server will now be accessible at http://localhost:3000 (or the port you configured).

## **📚 API Endpoints**

Below is a summary of the main API endpoints.

### **Authentication (Auth)**

* POST /api/auth/register \- Register a new user.  
* POST /api/auth/login \- Log in a user and receive a JWT.  
* POST /api/auth/forgot-password \- Request a password reset.  
* PUT /api/auth/reset-password/:token \- Reset password with a token.

### **Tasks**

* GET /api/tasks \- Get all tasks for the authenticated user (with filtering and sorting).  
* GET /api/tasks/:id \- Get a specific task by ID.  
* POST /api/tasks \- Create a new task.  
* PUT /api/tasks/:id \- Fully update an existing task.  
* PATCH /api/tasks/:id \- Partially update an existing task.  
* DELETE /api/tasks/:id \- Delete a task.

### **User Profile**

* GET /api/users/me \- Get the current user's profile information.  
* PUT /api/users/me \- Update the current user's profile information.

### **Analytics**

* GET /api/dashboard/stats \- Get task statistics for the user.

## **🤝 Contributing**

We welcome contributions to improve this project\! Please follow these steps:

1. Fork the repository.  
2. Create a new branch for your feature or bug fix (git checkout \-b feature/new-feature or bugfix/fix-bug).  
3. Commit your changes (git commit \-m 'Add new feature').  
4. Push your branch to your forked repository (git push origin feature/new-feature).  
5. Open a Pull Request to the main branch of this repository.

## **📄 License**

This project is licensed under the MIT License. See the LICENSE file for more details.

## **📧 Contact**

For any questions or suggestions, feel free to contact me at your.email@example.com.
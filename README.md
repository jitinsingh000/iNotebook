# 📝 iNotebook - Full Stack MERN Notes Application

A secure and responsive full-stack notes application built using the MERN stack. Users can create, manage, and organize personal notes with authentication and data privacy.

---

## 📌 Features

- 🔐 User Authentication (JWT-based login/signup)
- 📝 Create, Read, Update, Delete (CRUD) Notes
- 🔒 User-specific private notes
- ⚡ Fast and responsive UI
- 🌐 RESTful API integration
- 🔄 Real-time UI updates without reload

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Context API
- Bootstrap / CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Tools & Libraries
- Mongoose
- JSON Web Token (JWT)
- Express Validator

---

## 📂 Project Structure


iNotebook/
├── client/ # React Frontend
├── server/ # Node.js Backend
├── README.md


---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/jitinsingh000/iNotebook.git
cd iNotebook
2. Backend Setup - Start backend server:
cd server
npm install
node server.js - inside terminal

🔐 Environment Variables
Create a .env file inside /server folder and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

npm start
3. Frontend Setup
cd client
npm install
npm start

📡 API Endpoints
Auth Routes
POST /api/auth/createuser → Register User
POST /api/auth/login → Login User
Notes Routes
GET /api/notes/fetchallnotes → Get all notes
POST /api/notes/addnote → Add note
PUT /api/notes/updatenote/:id → Update note
DELETE /api/notes/deletenote/:id → Delete note

🚧 Future Improvements
🔍 Search notes functionality
🏷️ Tags & categories
🌙 Dark mode
📱 Mobile responsiveness improvements
🤖 AI-based note summarization

🧠 Learnings
Implemented JWT authentication and protected routes
Built RESTful APIs with Express
Managed global state using React Context API
Connected frontend with backend using fetch API
Worked with MongoDB using Mongoose

👨‍💻 Author
Jitin Singh
GitHub: https://github.com/jitinsingh000
LinkedIn: https://linkedin.com/in/jitin-singh-080290253


⭐ Support
If you found this project useful, consider giving it a ⭐ on GitHub!
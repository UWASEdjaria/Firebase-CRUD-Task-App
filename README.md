# 🧩 Firebase CRUD Task App

## 🌟 Introduction
This is a **Task Management App** built with **Next.js, TypeScript, and Firebase**.  
It allows users to **register, log in, and manage tasks** — adding, editing, deleting, and marking them as complete.  
Each user only sees **their own tasks**.

---

## 🚀 What You Can Do
- Register and log in with Firebase Authentication  
- Add, edit, and delete tasks  
- Mark tasks as complete or incomplete  
- View only your own tasks  
- Log out safely  

---

## 🧠 Learning Goals
You will learn how to:
- Connect Firebase Authentication and Firestore to Next.js  
- Manage protected routes  
- Perform CRUD (Create, Read, Update, Delete) operations  
- Display user-specific data (email and tasks)

---

## 🧱 Main Features
### 🔐 Authentication
- Email and password registration and login  
- Protected dashboard (only visible when logged in)  
- Logout option  

### 🏠 Dashboard
- Shows greeting with user’s email  
- Form to add a task (title, description, priority)  
- Task list with edit, delete, and complete buttons  

---

## 🔧 Firestore Structure
**Collection name:** `tasks`

| Field | Type | Description |
|-------|------|-------------|
| id | string | Auto ID from Firestore |
| title | string | Task title |
| description | string | Task details |
| completed | boolean | Marks if task is done |
| priority | string | "Low" | "Medium" | "High" |
| userEmail | string | Owner of the task |

---

## ⚙️ Setup Instructions
1. Clone the project  
   ```bash
   git clone <your-repo-url>
Go into the project folder

bash
Copy code
cd firebase-crud-task-app
Install dependencies

bash
Copy code
npm install
Add your Firebase config in a new file named firebase.ts
(Get this from your Firebase project settings)

Run the app

bash
Copy code
npm run dev
Open the browser
👉 http://localhost:3000

🧑‍💻 Test Account
Use this test user to log in:

makefile
Copy code
Email: testuser@gmail.com
Password: test1234
🧰 Technologies Used
Next.js

TypeScript

Firebase Authentication

Firestore Database

Tailwind CSS

🌍 Live Demo
👉 //https://vercel.com/uwasedjarias-projects/firebase-crud-task-app-9ubg

👩‍💻 Author
Uwase Djaria
Frontend Developer | UI/UX Designer
💜 Passionate about learning and building real-world projects.
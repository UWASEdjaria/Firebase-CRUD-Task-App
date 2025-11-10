📘 Firebase CRUD Task App

Next.js + TypeScript + Firebase + Tailwind CSS

A protected CRUD application that allows users to register, log in, and manage tasks (create, read, update, delete) securely using Firebase Authentication and Firestore. Each user can view and manage only their own tasks, with a personalized dashboard greeting.

🧩 1. Project Setup Steps
🔹 Step 1: Create a new Next.js project

Open your terminal and run:

npx create-next-app@latest firebase-crud-task-app


When prompted, select:

✅ TypeScript: Yes

✅ ESLint: Yes

✅ Tailwind CSS: Yes

✅ App Router: Yes

✅ Src Directory: Yes

✅ Import alias (@/): Yes

Then navigate into the project folder:

cd firebase-crud-task-app

🔹 Step 2: Install Firebase
npm install firebase

🔹 Step 3: Start the development server
npm run dev


Open your browser at:
👉 http://localhost:3000

📁 2. Folder Structure

Inside src/app, create the following structure:

src/
└── app/
    ├── (auth)/
    │   ├── login/
    │   │   └── page.tsx
    │   ├── logout/
    │   │   └── page.tsx
    │   └── register/
    │       └── page.tsx
    │
    ├── api/
    │   └── tasks/
    │       ├── route.ts
    │       └── [id]/
    │           └── route.ts
    │
    ├── lib/
    │   └── firebase.ts
    │
    ├── globals.css
    ├── layout.tsx
    └── page.tsx

💡 Tip: Create folders in VS Code

Right-click on the app folder → New Folder → name it (auth)

Inside (auth), create folders: login, logout, register

Add page.tsx inside each folder

Repeat for api/tasks and lib

📝 3. Project Description

Firebase CRUD Task App is a full-stack frontend project built with Next.js 13, TypeScript, and Tailwind CSS.

Features:

✅ User registration and login via Firebase Authentication

✅ Protected routes (only logged-in users can access the dashboard)

✅ Create, read, update, and delete tasks stored in Firestore

✅ Personalized dashboard greeting for each user

✅ Safe logout from any page

This app demonstrates integration of authentication, database CRUD operations, and route protection using modern frontend practices.

👤 Author

Uwase Djaria – Frontend Developer
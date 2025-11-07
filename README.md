# 📘 Project Title

Firebase CRUD Task App (Next.js + TypeScript + Firebase)

# 🧩 1. Project Setup Steps
🔹 Step 1: Create a new Next.js project

Open your terminal and run:

npx create-next-app@latest firebase-crud-task-app


When asked:

✅ TypeScript: Yes

✅ ESLint: Yes

✅ Tailwind CSS: Yes

✅ App Router: Yes

✅ Src Directory: Yes

✅ Import alias (@/): Yes

Then:

cd firebase-crud-task-app

🔹 Step 2: Install Firebase
npm install firebase

🔹 Step 3: Start your dev server
npm run dev


Then open your browser at
👉 http://localhost:3000

# 📁 2. Create Folder Structure

Inside src/app, create the folders like this:

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


# To create them manually in VS Code:

Right-click on the app folder → New Folder

Name it (auth)

Inside (auth), create login, logout, and register folders

Add a file named page.tsx inside each one

Repeat the same for api/tasks and lib

# 📝 3. Project Description

A Firebase CRUD Task App built with Next.js 13, TypeScript, and Tailwind CSS.
It allows users to:

Register and log in with Firebase Authentication

Create, read, update, and delete tasks in Firestore

View their own personalized dashboard with a greeting

Log out safely from any page
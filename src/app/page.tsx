"use client";
import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { app, db } from "./lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean
  userEmail?: string | null;
};

export default function Dashboard() {
  const auth = getAuth(app);
  const user = auth.currentUser;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const fetchTasks = async () => {
    if (!user) return;
    const snap = await getDocs(collection(db, "tasks"));
    const userTasks = snap.docs
      .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as TaskType))
      .filter((t) => t.userEmail === user.email);
    setTasks(userTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setMessage("User not logged in!");
      return;
    }

    try {
      if (editId) {
        await updateDoc(doc(db, "tasks", editId), {
          title,
          description,
          priority,
        });
        setMessage(`Task "${title}" updated successfully!`);
        setEditId(null);
      } else {
        await addDoc(collection(db, "tasks"), {
          title,
          description,
          priority,
          completed: false,
          userEmail: user.email,
        });
        setMessage(`Task "${title}" added successfully!`);
      }

      setTitle("");
      setDescription("");
      setPriority("Low");
      fetchTasks();
    } catch (err) {
      console.error(err);
      setMessage("Failed to save task.");
    }
  };

  const toggleComplete = async (id: string, completed: boolean) => {
    await updateDoc(doc(db, "tasks", id), { completed: !completed });
    fetchTasks();
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
    setMessage("Task deleted successfully!");
    fetchTasks();
  };

  const handleEdit = (task: TaskType) => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setEditId(task.id);
  };

  return (
    <div className="flex flex-col items-center min-h-screen mt-5 bg-white justify-centerlg:flex-row ">
      <h1 className="mb-2 text-2xl font-bold text-orange-500 sm:text-3xl md:text-4xl">
        Hello, {user?.email}
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Welcome to your Firebase CRUD Task App!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 text-gray-500 bg-gray-300 rounded-lg shadow-lg"
      >
        <h2 className="mb-4 text-xl font-semibold text-orange-500">
          {editId ? "Edit Task" : "Add New Task"}
        </h2>

        <label className="block mb-2 font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 bg-white border-2 border-orange-500 rounded"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 bg-white border-2 border-orange-500 rounded"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">Priority</label>
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "Low" | "Medium" | "High")
          }
          className="w-full p-2 mb-4 text-orange-400 bg-gray-200 border-2 border-orange-500 rounded"
        >
          <option value="Low" className="bg-gray-200">
            Low
          </option>
          <option value="Medium" className="bg-gray-200">
            Medium
          </option>
          <option value="High" className="bg-gray-200">
            High
          </option>
        </select>

        <button
          type="submit"
          className="w-full p-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          {editId ? "Update Task" : "Add Task"}
        </button>

        {message && <p className="mt-4 text-green-500">{message}</p>}
      </form>

      <div className="w-full max-w-md mt-8">
        <h2 className="mb-4 text-xl font-semibold text-orange-500">
          Your Tasks
        </h2>

        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 mb-4 bg-gray-300 rounded-lg shadow-md"
          >
            <h3
              className={`font-bold ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-sm text-orange-500">
              Priority: {task.priority}
            </p>

            <div className="flex gap-3 mt-3">
              <button
                onClick={() => toggleComplete(task.id, task.completed)}
                className="px-3 py-1 text-green-500 border border-orange-400 rounded-lg"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                onClick={() => handleEdit(task)}
                className="px-3 py-1 text-gray-600 border border-blue-500 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(task.id)}
                className="px-3 py-1 text-red-500 border border-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      </div> 
   
  );
}

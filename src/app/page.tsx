'use client'
import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { app, db } from './lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
  userEmail?: string | null;
};

export default function Dashboard() {
  const auth = getAuth(app);
  const user = auth.currentUser;

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [message, setMessage] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const fetchTasks = async () => {
    if (!user) return;
    const snap = await getDocs(collection(db, 'tasks'));
    const userTasks = snap.docs
      .map(doc => ({ id: doc.id, ...doc.data() } as TaskType))
      .filter(t => t.userEmail === user.email);
    setTasks(userTasks);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user) {
        setMessage('User not logged in!');
        return;
      }

      await addDoc(collection(db, 'tasks'), {
        title,
        description,
        priority,
        completed: false,
        userEmail: user.email,
      });

      setMessage(`Task "${title}" added successfully!`);
      setTitle('');
      setDescription('');
      setPriority('Low');

      // ✅ Update UI after adding
      fetchTasks();
    } catch (err) {
      console.error(err);
      setMessage('Failed to add task.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="mb-2 text-2xl font-bold text-orange-500 sm:text-2xl md:text-3xl lg-text-4xl">
        Hello, {user?.email}
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Welcome to your Firebase CRUD Task App!
      </p>

      {/* Task Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 text-gray-500 bg-gray-300 rounded-lg shadow-lg"
      >
        <h2 className="mb-4 text-xl font-semibold text-orange-500">Add New Task</h2>

        <label className="block mb-2 font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 mb-4 bg-white border-2 border-orange-500 rounded"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full p-2 mb-4 bg-white border-2 border-orange-500 rounded"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">Priority</label>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
          className="w-full p-2 mb-4 text-orange-400 bg-gray-200 border-2 border-orange-500 rounded"
        >
          <option value="Low" className="bg-gray-200">Low</option>
          <option value="Medium" className="bg-gray-200">Medium</option>
          <option value="High" className="bg-gray-200">High</option>
        </select>

        <button
          type="submit"
          className="w-full p-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          Add Task
        </button>

        {message && <p className="mt-4 text-green-500">{message}</p>}
      </form>

      {/* Task List */}
      <div className="w-full max-w-md mt-8">
        <h2 className="mb-4 text-xl font-semibold text-orange-500">Your Tasks</h2>
        {tasks.map(task => (
          <div key={task.id} className="p-4 mb-4 bg-gray-300 rounded-lg">
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-sm text-orange-500">Priority: {task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client'
import { getAuth } from 'firebase/auth';
import { app, db } from '../lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
interface addItem {
   id: string; 
   title: string; 
   description: string; 
   completed: boolean; 
   priority: "Low" | "Medium" | "High"; 
   userEmail: string; }

 async function addItem(data){
  const auth=getAuth(app);
  try {
    await addDoc(collection(db,"items"),data)
    console.log("Item added successfully!")
  } catch (error) {
     console.log("Error adding item:", error);
  }
 }export default addItem